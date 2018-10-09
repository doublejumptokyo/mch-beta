import HeroData from '~/build/contracts/Hero.json'
import HeroAssetData from '~/build/contracts/HeroAsset.json'
import heroTypesData from '~/assets/data/heroTypes.json'
import skillsData from '~/assets/data/skills.json'

class Hero {
  constructor(accountManager) {
    const heroAbi = HeroData.abi
    const heroAddress = HeroData.networks['default'].address
    this.contract = accountManager.getContract(heroAbi, heroAddress)
  }

  async get(id) {
    let hero = await this.contract.methods.getHero(id).call()
    const numberKeys = [
      'activeSkillId',
      'agi',
      'heroType',
      'hp',
      'intl',
      'passiveSkillId',
      'phy'
    ]
    Object.keys(hero)
      .filter(key => numberKeys.includes(key))
      .forEach(key => (hero[key] = Number(hero[key])))
    hero.id = id
    hero.activeSkill = skillsData.find(skill => skill.id === hero.activeSkillId)
    hero.passiveSkill = skillsData.find(
      skill => skill.id === hero.passiveSkillId
    )
    hero = Object.assign({}, hero, this.getHeroType(hero.heroType))
    hero.imageUrl = hero.ipfs
      ? `https://beta.mycryptoheroes.net/image/${hero.ipfs}`
      : require(`~/assets/images/heroes/${hero.fileName}`)
    return hero
  }

  getHeroType(type) {
    return heroTypesData.find(heroType => heroType.type === type)
  }
}

class HeroAsset {
  constructor(accountManager) {
    const heroAssetAbi = HeroAssetData.abi
    const heroAssetAddress = HeroAssetData.networks['default'].address
    this.contract = accountManager.getContract(heroAssetAbi, heroAssetAddress)
  }

  async getHeroCount(address) {
    return Number(await this.contract.methods.balanceOf(address).call())
  }

  async getHeroId(address, index) {
    const heroId = await this.contract.methods
      .tokenOfOwnerByIndex(address, index)
      .call()
    return Number(heroId)
  }
}

export default async ({ app, store }, inject) => {
  if (!store.getters.isLoggedIn) return
  const hero = new Hero(app.$accountManager)
  hero.asset = new HeroAsset(app.$accountManager)

  const address = store.state.loomAddress
  const heroCount = await hero.asset.getHeroCount(address)
  const indexes = Array.from(Array(heroCount).keys())
  const heroIds = await Promise.all(
    indexes.map(async index => await hero.asset.getHeroId(address, index))
  )
  const heroes = await Promise.all(
    heroIds.map(async heroId => await hero.get(heroId))
  )

  heroes.forEach(hero => store.commit('heroes/SET_HERO', hero))

  inject('hero', hero)
}

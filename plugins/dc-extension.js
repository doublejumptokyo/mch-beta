import ExtensionData from '~/build/contracts/Extension.json'
import ExtensionAssetData from '~/build/contracts/ExtensionAsset.json'
import extensionTypesData from '~/assets/data/extensionTypes.json'

class Extension {
  constructor(accountManager) {
    const extensionAbi = ExtensionData.abi
    const extensionAddress = ExtensionData.networks['default'].address
    this.contract = accountManager.getContract(extensionAbi, extensionAddress)
  }

  async get(id) {
    const ext = await this.contract.methods.getExtension(id).call()
    const numberKeys = [
      'activeSkillId',
      'agi',
      'extensionType',
      'hp',
      'intl',
      'phy'
    ]
    Object.keys(ext)
      .filter(key => numberKeys.includes(key))
      .forEach(key => (ext[key] = Number(ext[key])))
    ext.id = id
    return ext
  }

  getExtensionType(type) {
    return extensionTypesData.find(extensionType => extensionType.type === type)
  }
}

class ExtensionAsset {
  constructor(accountManager) {
    const extensionAssetAbi = ExtensionAssetData.abi
    const extensionAssetAddress = ExtensionAssetData.networks['default'].address
    this.contract = accountManager.getContract(
      extensionAssetAbi,
      extensionAssetAddress
    )
  }

  async getExtensionCount(address) {
    return Number(await this.contract.methods.balanceOf(address).call())
  }

  async getExtensionId(address, index) {
    const extensionId = await this.contract.methods
      .tokenOfOwnerByIndex(address, index)
      .call()
    return Number(extensionId)
  }
}

export default async ({ app, store }, inject) => {
  if (!store.getters.isLoggedIn) return
  const extension = new Extension(app.$accountManager)
  extension.asset = new ExtensionAsset(app.$accountManager)

  const address = store.state.loomAddress
  const extensionCount = await extension.asset.getExtensionCount(address)
  const indexes = Array.from(Array(extensionCount).keys())
  const extensionIds = await Promise.all(
    indexes.map(
      async index => await extension.asset.getExtensionId(address, index)
    )
  )
  const extensions = await Promise.all(
    extensionIds.map(async extensionId => await extension.get(extensionId))
  )

  extensions
    .map(myExtension => {
      return Object.assign(
        myExtension,
        extension.getExtensionType(Number(myExtension.extensionType))
      )
    })
    .forEach(extension => store.commit('extensions/SET_EXTENSION', extension))

  inject('extension', extension)
}

<template lang="pug">
.heroEditPage
  .page__title
    h1 Art edit

  template(v-if="isConfirming")
    .heroEditPage__content
      p.heroEditPage__display
        img(:src="`https://beta.mycryptoheroes.net/image/${pixelatedData.ipfs}`")
      .heroEditPage__skill
        .skill
          img(:src="require(`~/assets/images/icons/skill/${getSkill(pixelatedData.skillId).iconFileName}`)")
          div
            h2 {{ getSkill(pixelatedData.skillId).name[$i18n.locale] }}
            p {{ getSkill(pixelatedData.skillId).description[$i18n.locale] }}
      p.heroEditPage__decideButtons
        button(@click="reload") Cancel
        button(@click="decide") OK

  template(v-else)
    .heroEditPage__content
      p.heroEditPage__display
        img(:src="hero.imageUrl" ref="image")
      .heroEditPage__button
        .file
          label.file-label
            input.file-input(type="file" ref="input" @change="fileChanged")
            span.file-cta
              span.file-icon
                fa-icon(icon="upload")
              span.file-label Choose a file
      .heroEditPage__unsetButton(v-if="hero.ipfs")
        button(@click="unset") Unset

    .heroEditPage__warning
      h3 {{ $t('heroId.edit.warning.title') }}
      ul
        li(v-for="text in $i18n.messages[$i18n.locale].heroId.edit.warning.list") {{ text }}
      p
        nuxt-link(to="/terms") {{ $t('pages.terms') }}
      p {{ $t('heroId.edit.warning.footer') }}

  modal(v-if="isModalShown" type="bottom" @modal-close="closeModal")
    h2(slot="header") Crop
    div(slot="body")
      .cropperWrapper
        vue-cropper(
          ref="cropper"
          outputType="png"
          :img="cropImageSrc"
          :auto-crop="!isUploading"
          :center-box="!isUploading"
          :fixed="true"
          :canScale="!isUploading"
          :canMove="!isUploading"
          :canMoveBox="!isUploading"
        )
    .modal__footer(slot="footer")
      button.cancelButton(@click="closeModal") Cancel
      button.submitButton(@click="submit" :disabled="isUploading")
        i.fas.fa-spinner.fa-spin.fa-lg(v-if="isUploading")
        span Submit
</template>

<script>
import { mapGetters } from 'vuex'
import Modal from '~/components/Modal'
export default {
  components: { Modal },
  data() {
    return {
      hero: {},
      isModalShown: false,
      cropImageSrc: '',
      pixelatedData: null,
      isUploading: false
    }
  },
  computed: {
    ...mapGetters({
      getSkill: 'team/getSkill'
    }),
    isConfirming() {
      return !!this.pixelatedData
    }
  },
  async mounted() {
    const heroId = Number(this.$route.params.id)
    this.hero = await this.$hero.get(heroId)
  },
  methods: {
    fileChanged(e) {
      const done = url => {
        this.$refs.input.value = ''
        this.cropImageSrc = url
        this.openModal()
      }
      const files = e.target.files
      if (files && files.length) {
        const file = files[0]
        if (window.URL) {
          done(window.URL.createObjectURL(file))
        } else if (FileReader) {
          const reader = new FileReader()
          reader.onload = () => done(reader.result)
          reader.readAsDataURL(file)
        }
      }
    },
    submit() {
      if (!this.$refs.cropper) {
        this.closeModal()
        return
      }
      this.isUploading = true
      this.$refs.cropper.getCropBlob(async blob => {
        const formData = new FormData()
        formData.append('upload', blob)
        const headers = {
          'Content-Type': 'multipart/form-data',
          'Loom-Address': this.$store.state.loomAddress
        }
        const res = await this.$axios
          .post('/api/pixelator/upload', formData, { headers })
          .catch(() => this.$toast.error('Error.'))
        if (res) {
          this.pixelatedData = res.data
        }
        this.isUploading = false
        this.closeModal()
      })
    },
    openModal() {
      this.isModalShown = true
    },
    closeModal() {
      this.isModalShown = false
    },
    reload() {
      window.location.reload()
    },
    async decide() {
      await this.$heroManager.set(this.hero.id, this.pixelatedData.ipfs)
      this.$toast.show('Success.')
      this.$router.push(`/heroes/${this.hero.id}`)
    },
    async unset() {
      await this.$heroManager.unset(this.hero.id)
      this.$toast.show('Success.')
      this.$router.push(`/heroes/${this.hero.id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.heroEditPage {
  @media (min-width: $breakpoint) {
    &__content {
      margin: 0 auto;
      max-width: 375px;
    }
  }

  &__display {
    margin: 1rem 0;

    @media (min-width: $breakpoint) {
      margin: 2rem 0;
    }

    img {
      height: auto;
      image-rendering: pixelated;
      width: 100%;
    }
  }

  &__button {
    margin: 1rem 0;

    @media (min-width: $breakpoint) {
      margin: 2rem 0;
    }

    button {
      background: map-get($colors, primary);
      border-radius: 1rem;
      color: #fff;
      padding: 1rem;
      width: 100%;
    }
  }

  &__unsetButton {
    margin: 1rem 0;

    @media (min-width: $breakpoint) {
      margin: 2rem 0;
    }

    button {
      border: 1px solid #999;
      border-radius: 1rem;
      color: #999;
      line-height: 1;
      padding: calc(1rem - 2px);
      width: 100%;
    }
  }

  &__decideButtons {
    display: flex;

    > button {
      width: 100%;

      &:last-of-type {
        background: map-get($colors, primary);
        border-radius: 1rem;
        color: #fff;
        padding: 1rem;
      }
    }
  }

  &__warning {
    background: #555;
    border-radius: 1rem;
    color: #ccc;
    font-size: 0.8rem;
    margin: 2rem 0;
    padding: 1rem;

    @media (min-width: $breakpoint) {
      margin: 2rem;
      padding: 2rem;
    }

    ul,
    ol {
      margin: 1rem 0;
      padding-left: 1.5rem;
    }

    p {
      margin: 1rem 0;
    }
  }
}

.file {
  label.file-label {
    width: 100%;
  }

  &-input {
    text-indent: -9999px;
  }

  &-cta,
  .file-label:hover .file-cta {
    background: map-get($colors, primary);
    border: none;
    border-radius: 1rem;
    color: #444;
    display: flex;
    height: auto;
    justify-content: center;
    line-height: 1;
    padding: 1rem;
    width: 100%;
  }
}

.cropperWrapper {
  padding-top: 100%;
  position: relative;

  .vue-cropper {
    left: 0;
    position: absolute;
    top: 0;
  }
}

.skill {
  align-items: center;
  border: 1px solid #666;
  border-radius: 1rem;
  display: flex;
  margin: 1rem 0;
  padding: 1rem;

  > img {
    margin-right: 1rem;
    width: 2rem;
  }

  > div {
    flex: 1;

    > h2 {
      font-size: 1.2rem;
    }

    > p {
      color: #ccc;
    }
  }
}

.modal__footer {
  display: flex;
  padding: 1rem;

  .submitButton {
    background: map-get($colors, primary);
    border-radius: 1rem;
    color: #fff;
    padding: 1rem;
    width: 100%;

    &[disabled] {
      cursor: default;
      opacity: 0.5;
    }

    svg {
      margin-right: 0.5rem;
    }
  }

  .cancelButton {
    border-radius: 1rem;
    padding: 1rem;
    width: 100%;
  }
}
</style>

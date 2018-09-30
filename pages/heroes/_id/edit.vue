<template lang="pug">
.pixelatorPage
  .page__title
    h1 pixelatorPage
  .pixelatorPage__content
    .pixelatorPage__left
      p.pixelatorPage__display
        img(:src="displayImageSrc" ref="image")
      p.pixelatorPage__button
        .file
          label.file-label
            input.file-input(type="file" ref="input" @change="fileChanged")
            span.file-cta
              span.file-icon
                fa-icon(icon="upload")
              span.file-label Choose a file
    .pixelatorPage__right
      .pixelatedData(v-if="pixelatedData")
        section
          h3 labelsFromAws
          table.table.is-striped.is-fullwidth
            thead
              th name
              th confidence
              th type
            tbody
              tr(v-for="data in pixelatedData.labelsFromAws")
                td {{ data.name }}
                td {{ data.confidence }}
                td {{ data.type }}
        section
          h3 labelsFromGcp
          table.table.is-striped.is-fullwidth
            thead
              th name
              th confidence
              th type
            tbody
              tr(v-for="data in pixelatedData.labelsFromGcp")
                td {{ data.name }}
                td {{ data.confidence }}
                td {{ data.type }}

  modal(v-if="isModalShown" type="bottom" @modal-close="closeModal")
    h2(slot="header") Crop
    div(slot="body")
      .cropperWrapper
        vue-cropper(
          ref="cropper"
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
      isModalShown: false,
      cropImageSrc: '',
      pixelatedData: null,
      isUploading: false
    }
  },
  computed: {
    ...mapGetters({
      getHero: 'heroes/get'
    }),
    displayImageSrc() {
      const heroId = Number(this.$route.params.id)
      const hero = this.getHero(heroId)
      if (!hero) {
        return ''
      }
      return require(`~/assets/images/heroes/${hero.fileName}`)
    }
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
        const res = await this.$axios
          .post('/pixelator/upload', formData)
          .catch(console.error)
        this.pixelatedData = res.data
        this.displayImageSrc = `/${this.pixelatedData.fileUrl}`
        this.isUploading = false
        this.closeModal()
      })
    },
    openModal() {
      this.isModalShown = true
    },
    closeModal() {
      this.isModalShown = false
    }
  }
}
</script>

<style lang="scss" scoped>
.pixelatorPage {
  @media (min-width: $breakpoint) {
    &__content {
      display: flex;
      justify-content: space-between;
    }

    &__left {
      width: 32%;
    }

    &__right {
      width: 65%;
    }
  }

  &__display {
    margin: 1rem 0;

    img {
      height: auto;
      image-rendering: pixelated;
      width: 100%;
    }
  }

  &__button {
    margin: 1rem 0;

    button {
      background: map-get($colors, primary);
      border-radius: 1rem;
      color: #fff;
      padding: 1rem;
      width: 100%;
    }
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

.pixelatedData {
  margin: 1rem 0;

  section {
    margin: 1rem 0;
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

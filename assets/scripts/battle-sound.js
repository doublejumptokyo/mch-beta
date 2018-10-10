export class Sound {
  constructor() {
    window.AudioContext = window.AudioContext || window.webkitAudioContext
    this.context = new AudioContext()
  }

  set(fileUrl) {
    return new Promise(resolve => {
      let request = new XMLHttpRequest()
      request.open('GET', fileUrl, true)
      request.responseType = 'arraybuffer'
      request.onload = () => {
        this.context.decodeAudioData(request.response).then(buffer => {
          this.buffer = buffer
          resolve()
        })
      }
      request.send()
    })
  }

  play({ loop = false } = {}) {
    this.source = this.context.createBufferSource()
    this.gain = this.context.createGain()
    this.source.connect(this.gain)
    this.gain.connect(this.context.destination)
    this.source.buffer = this.buffer
    this.source.loop = loop
    this.source.start()
  }

  mute(isMuted) {
    this.gain.gain.value = isMuted ? 0 : 1
  }
}

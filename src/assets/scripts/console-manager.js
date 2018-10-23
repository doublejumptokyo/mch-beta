export default class ConsoleManager {
  constructor({ hostname, protocol }, visibleDomains) {
    this.host = hostname
    this.protocol = protocol
    this.visibleDomains = visibleDomains
  }

  /**
   * isConsole
   * ここにConsole結果を出力する条件を記述する
   */
  isConsole() {
    if (this.protocol === 'file:')
      // ローカルファイルを呼び出している場合は
      return true // 結果を表示する
    let is = false
    this.visibleDomains.some(domain => {
      if (this.host.slice(-domain.length) === domain) {
        is = true
        return true
      }
    })
    return is
  }

  override(key) {
    const proto = console[key]
    const isConsole = this.isConsole()
    console[key] = function() {
      if (isConsole) {
        proto.apply(this, arguments)
      }
    }
  }

  init() {
    for (let key in console) {
      if (typeof console[key] === 'function') {
        this.override(key)
      }
    }
  }
}

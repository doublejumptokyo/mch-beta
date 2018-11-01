import ConsoleManager from '~/assets/scripts/console-manager'

const VISIBLE_DOMAINS = [
  'localhost',
  '127.0.0.1',
  'beta.origin.sand.mch.djty.co'
]

export default () => {
  if (process.server) return
  const consoleManager = new ConsoleManager(window.location, VISIBLE_DOMAINS)
  consoleManager.init()
}

function getWalletAddress() {
  if (
    process.browser &&
    window.web3 &&
    window.web3.eth &&
    window.web3.eth.defaultAccount
  ) {
    return window.web3.eth.defaultAccount
  }
  return ''
}

export default function({ error }) {
  const walletAddress = getWalletAddress()
  if (!walletAddress) {
    error({ statusCode: 401, message: 'No wallet.' })
  }
}

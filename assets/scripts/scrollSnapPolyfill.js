let scrollArea
let actionElems
let offsetTops

let tid
function onScroll() {
  clearTimeout(tid)
  tid = setTimeout(moveToNear, 20)
}

let isMoving
let timeoutId
function moveToNear() {
  if (isMoving) {
    return
  }
  isMoving = true
  clearTimeout(timeoutId)
  timeoutId = setTimeout(() => {
    getNearestAction().scrollIntoView({ behavior: 'smooth', block: 'center' })
    isMoving = false
  }, 1)
}

function getNearestAction() {
  const scrollTop = scrollArea.scrollTop
  const index = offsetTops.findIndex(point => point > scrollTop) - 1
  return actionElems[index + 1]
}

export default function init(containerSelector, itemSelector) {
  scrollArea = document.querySelector(containerSelector)
  actionElems = scrollArea.querySelectorAll(itemSelector)
  offsetTops = Array.from(actionElems).map(elem => elem.offsetTop)
  scrollArea.addEventListener('scroll', onScroll, false)
}

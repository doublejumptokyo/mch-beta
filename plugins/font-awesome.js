import Vue from 'vue'
import { library, dom, config } from '@fortawesome/fontawesome-svg-core'
import {
  faInfoCircle,
  faUser,
  faUsers,
  faCoins,
  faShoppingCart,
  faStore,
  faHome,
  faAngleDown,
  faSort,
  faSortAlphaDown,
  faSearch,
  faAward,
  faTrophy,
  faExchangeAlt,
  faPenNib,
  faAngleRight,
  faFilter,
  faQuestion,
  faInfo,
  faBars,
  faCheck,
  faTimes,
  faPlus,
  faFire,
  faArrowRight,
  faArrowLeft,
  faUpload,
  faSpinner,
  faSignInAlt,
  faSignOutAlt,
  faExclamationCircle,
  faExclamationTriangle,
  faSync
} from '@fortawesome/free-solid-svg-icons'
import {
  faEdit,
  faCompass,
  faGem,
  faBell,
  faClock,
  faSadTear,
  faShareSquare,
  faCopy
} from '@fortawesome/free-regular-svg-icons'
import {
  faEthereum,
  faDiscord,
  faTwitter,
  faMedium
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faInfoCircle,
  faUser,
  faUsers,
  faCoins,
  faShoppingCart,
  faStore,
  faHome,
  faAngleDown,
  faSort,
  faSortAlphaDown,
  faSearch,
  faAward,
  faTrophy,
  faExchangeAlt,
  faPenNib,
  faAngleRight,
  faFilter,
  faQuestion,
  faInfo,
  faBars,
  faCheck,
  faTimes,
  faPlus,
  faFire,
  faArrowRight,
  faArrowLeft,
  faUpload,
  faSpinner,
  faSignInAlt,
  faSignOutAlt,
  faExclamationCircle,
  faExclamationTriangle,
  faSync,
  faClock,
  faSadTear,
  faShareSquare,
  faCopy,
  faEdit,
  faCompass,
  faGem,
  faBell,
  faEthereum,
  faDiscord,
  faTwitter,
  faMedium
)

config.searchPseudoElements = true

Vue.component('faIcon', FontAwesomeIcon)

dom.watch()
dom.i2svg()

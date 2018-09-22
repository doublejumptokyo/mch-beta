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
  faSignOutAlt
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
  faTwitter
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
  faTwitter
)

config.searchPseudoElements = true

Vue.component('faIcon', FontAwesomeIcon)

dom.watch()
dom.i2svg()

import SettingList from './setting/SettingList'
import FeadbackList from './feadback/list/FeadbackList'
import AboutList from './about/list/AboutList'
import HelpList from './help/list/HelpList'
import DownloadList from './download/list/DownloadList'
import CartList from './cart/list/CartList'

export default [{
        path: 'setting/list',
        name: 'setting-list',
        component: SettingList
    },
    {
        path: 'feadback/list',
        name: 'feadback-list',
        component: FeadbackList
    },
    {
        path: 'about/list',
        name: 'about-list',
        component: AboutList
    },
    {
        path: 'help/list',
        name: 'help-list',
        component: HelpList
    },
    {
        path: 'download/list',
        name: 'download-list',
        component: DownloadList
    },
    {
        path: 'cart/list',
        name: 'cart-list',
        component: CartList
    }
]
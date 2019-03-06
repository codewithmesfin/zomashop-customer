import ComputerList from './computer/list/ComputerList'
import MobileList from './mobile/list/MobileList'
import AccessoryList from './accessory/list/AccessoryList'
import FemaleList from './female/list/FemaleList'
import MenList from './men/list/MenList'
import NewItemList from './newItem/list/NewItemList'
import OrderList from './order/list/OrderList'

export default [{
        path: 'computer/list',
        name: 'computer-list',
        component: ComputerList
    },
    {
        path: 'mobile/list',
        name: 'mobile-list',
        component: MobileList
    },
    {
        path: 'accessory/list',
        name: 'accessory-list',
        component: AccessoryList
    },
    {
        path: 'female/list',
        name: 'female-list',
        component: FemaleList
    },
    {
        path: 'men/list',
        name: 'men-list',
        component: MenList
    },
    {
        path: 'newItem/list',
        name: 'new-list',
        component: NewItemList
    },
    {
        path: 'order/list',
        name: 'order-list',
        component: OrderList
    }
]
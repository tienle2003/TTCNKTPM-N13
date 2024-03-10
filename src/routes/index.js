import routes from '../constants/routes'
import HeaderOnly from '../layouts/HeaderOnly'
import Home from '../pages/Home'
import Categorys from '../pages/Categorys'
import Account from '../pages/Account'

const publicRoutes = [
    { path: routes.home, component: Home },
    { path: routes.category, component: Categorys },
    { path: routes.account, component: Account, layout: HeaderOnly },
]
const privateRoute = []
export { publicRoutes, privateRoute }
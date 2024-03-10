import routes from '../constants/routes'
import HeaderOnly from '../layouts/HeaderOnly'
import Home from '../pages/Home'
import Categorys from '../pages/Categorys'
import Account from '../pages/Account'
import Login from '../pages/Login'
import Signup from '../pages/Signup'

const publicRoutes = [
    { path: routes.home, component: Home },
    { path: routes.category, component: Categorys },
    { path: routes.account, component: Account, layout: HeaderOnly },
    { path: routes.login, component: Login, layout: HeaderOnly },
    { path: routes.signup, component: Signup, layout: HeaderOnly },
]
const privateRoute = []
export { publicRoutes, privateRoute }
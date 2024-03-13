import classNames from "classnames/bind"

import styles from './HeaderControl.module.css'
import Button from "../../../../components/Button"
import Logo from "../../../../components/Logo"
import routes from '../../../../constants/routes'

const cx = classNames.bind(styles)

export default function HeaderControl() {
    return (
        <div className={cx('header-top', 'flex justify-between items-center p-2')}>
            <div className="">
                <Logo />
            </div>
            <div className="flex items-center">
                <Button normal to={routes.login} className={cx('mr-3 hover:underline px-2 py-2')}>
                    <i className="fas fa-user-plus mr-2"></i>
                    Đăng nhập
                </Button>
                <Button normal to={routes.signup} className={cx('mr-3 hover:underline  px-2 py-2')}>
                    <i className="fas fa-sign-in-alt mr-2"></i>
                    Đăng ký
                </Button>
                <Button secondary to={routes.account} className={cx(' hover:underline ')}>
                    Đăng tin miễn phí
                    <i className="fas fa-plus-circle ml-2"></i>
                </Button>
            </div>
        </div>
    )
}
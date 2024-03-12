import classNames from "classnames/bind"

import styles from './HeaderControl.module.css'
import Button from "../../../../components/Button"
import routes from '../../../../constants/routes'

const cx = classNames.bind(styles)

export default function HeaderControl() {
    return (
        <div className={cx('header-top', 'flex justify-between items-center p-2')}>
            <div className="">
                <Button to={routes.home}>
                    <span className="flex items-end">
                        <h1 className="text-3xl text-colorPrimary font-extrabold">PhongTro</h1>
                        <h3 className="text-lg text-colorCcc font-semibold">.com</h3>
                    </span>
                    <span className="text-xs text-colorDark text-black">Kênh thông tin phòng trọ số 1 Việt Nam</span>
                </Button>
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
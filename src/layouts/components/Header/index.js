import classNames from "classnames/bind"

import styles from './Header.module.css'
import Button from "../../../components/Button"

const cx = classNames.bind(styles)

export default function Header() {
    return (
        <div className="wrapper">
            <div className="container">
                <div className={cx('header-top')}>
                    <div>
                        <Button to={'/'}>
                            <span>
                                <h1>PhongTro</h1>
                                <h3>.com</h3>
                            </span>
                            <span>Kênh thông tin phòng trọ số 1 Việt Nam</span>
                        </Button>
                    </div>
                    <div>
                        <Button>
                            <i className="fas fa-user-plus"></i>
                            Đăng nhập
                        </Button>
                        <Button>
                            <i className="fas fa-sign-in-alt"></i>
                            Đăng ký
                        </Button>
                        <Button primary>
                            Đăng tin miễn phí
                            <i className="fas fa-plus-circle"></i>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
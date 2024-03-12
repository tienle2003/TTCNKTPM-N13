import classNames from "classnames/bind"

import styles from './Header.module.css'
import HeaderControl from './HeaderControl'
import NavMenu from "./NavMenu"
import Search from "../Search"

const cx = classNames.bind(styles)

export default function Header() {
    return (
        <div className="wrapper">
            <div className="container">
                <div className="mb-2">
                    <HeaderControl />
                </div>
                <div className={cx('mb-2 sticky top-0' )}>
                    <NavMenu />
                </div>
                <div className="mb-2">
                    <Search />
                </div>
            </div>
        </div>
    )
}
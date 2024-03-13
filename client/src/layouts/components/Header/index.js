import classNames from "classnames/bind"

import styles from './Header.module.css'
import HeaderControl from './HeaderControl'
import NavMenu from "./NavMenu"
import Search from "../Search"

const cx = classNames.bind(styles)

export default function Header({ onlyNavBar = false }) {


    return (
        <div className="wrapper">
            <div className="container">
                <div className="mb-2">
                    <HeaderControl />
                </div>
                <div className={cx('mb-2 sticky top-0 z-50',)}>
                    <NavMenu />
                </div>
                {!onlyNavBar &&
                    <div className="mb-2">
                        <Search />
                    </div>
                }
            </div>
        </div>
    )
}
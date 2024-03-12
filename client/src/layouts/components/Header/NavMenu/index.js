import classNames from "classnames/bind"

import styles from './NavMenu.module.css'
import cates from '../../../../constants/category'
import NavMenuItem from "./NavMenuItem"

const cx = classNames.bind(styles)

export default function NavMenu() {
    return (
        <div className={cx('wrapper flex items-center bg-colorPrimary')}>
            {cates.map((cate, ind) => {
                return <NavMenuItem cate={cate} key={ind} />
            })}
        </div>
    )
}
import classNames from "classnames/bind"

import styles from './NavMenu.module.css'
import Button from "../../../../components/Button"
import { useLocation } from "react-router-dom"

const cx = classNames.bind(styles)

export default function NavMenuItem({ cate = {} }) {
    const currentPage = useLocation().pathname

    return (
        <div
            className={cx('wrapper hover:bg-colorSecondary', currentPage === cate.path ? 'bg-colorSecondary' : '')}
        >
            <Button to={cate?.path} small className={'text-white font-semibold px-4 py-2 block'}>
                {cate?.title}
            </Button>
        </div>
    )
}
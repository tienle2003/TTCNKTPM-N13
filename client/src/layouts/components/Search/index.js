import classNames from "classnames/bind"

import styles from './Search.module.css'
import Button from "../../../components/Button";

const cx = classNames.bind(styles)

export default function Search() {
    return (
        <div className="flex justify-center items-center ">
            <div className="flex justify-center items-center px-6 py-2 bg-colorYellow rounded-md">
                <form className="mr-4 rounded relative">
                    <input className="text-sm px-6 py-2 rounded-md outline-none" type="text" placeholder="Nhập khu vực cần tìm" />
                    <i 
                    className="fas fa-map-marker-alt absolute top-1/2 left-0 translate-x-[50%] translate-y-[-50%] text-colorCcc"
                    ></i>
                </form>
                <form className="mr-4 rounded relative">
                    <input className="text-sm px-8 py-2 rounded-md outline-none" type="text" placeholder="Nhập giá" />
                    <i 
                    className="fas fa-money-check-alt absolute top-1/2 left-0 translate-x-[50%] translate-y-[-50%] text-colorCcc"
                    ></i>
                </form>
                <Button primary className={cx('px-6 py-1 text-sm hover:bg-colorSecondary')}>
                    <i className="fas fa-search mr-2"></i>
                    Tìm kiếm
                </Button>
            </div>
        </div>
    )
}
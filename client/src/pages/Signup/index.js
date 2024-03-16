import classNames from 'classnames/bind'

import styles from './Signup.module.css'
import Button from '../../components/Button'
import routes from '../../constants/routes'

const cx = classNames.bind(styles)

export default function Signup() {
    return (
        <div className="wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className='w-100'>
                            <div className="form-box max-w-xl mx-auto px-8 pt-8 pb-24 border rounded-md shadow-md">
                                <h1 className="text-2xl font-semibold mb-4">Tạo tài khoản mới</h1>
                                <form >
                                    <div className='flex flex-col mb-4'>
                                        <label className='text-sm mb' for="name">HỌ TÊN</label>
                                        <input className='px-2 py-2 outline-none border-0 focus:border-colorPrimary' type="text" id="name" />
                                    </div>
                                    <div className='flex flex-col mb-4'>
                                        <label className='text-sm mb' for="phonenumber">SỐ ĐIỆN THOẠI</label>
                                        <input className='px-2 py-2 outline-none focus:border-colorPrimary' type="number" id="phonenumber" />
                                    </div>
                                    <div className='flex flex-col mb-4'>
                                        <label className='text-sm mb' for="password">TẠO MẬT KHẨU</label>
                                        <input className='px-2 py-2 outline-none focus:border-colorPrimary' type="text" id="password" />
                                    </div>
                                    <Button primary className={cx('text-sm font-semibold w-100 hover:underline')}>Tạo tài khoản</Button>
                                </form>
                                <p className='mt-8 text-sm'>Bạn đã có tài khoản? <Button className={cx('text-colorPrimary hover:text-colorSecondary')} to={routes.login}>Đăng nhập ngay</Button></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
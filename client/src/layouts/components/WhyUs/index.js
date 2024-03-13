import classNames from 'classnames/bind'

import styles from './WhyUs.module.css'
import cates from '../../../constants/categorys'
import Button from '../../../components/Button'
import routes from '../../../constants/routes'

const cx = classNames.bind(styles)
const countups = [
    { title: 'Thành viên', value: '116.998' },
    { title: 'Tin đăng', value: '103.348' },
    { title: 'Lượt truy cập/tháng', value: '300.000' },
    { title: 'Lượt xem/tháng', value: '2.500.000' }
]

export default function WhyUs() {
    return (
        <div className="wrapper p-4 rounded-lg border border-gray-400 shadow-md bg-white">
            <div className="container">
                <h1 className="text-xl font-bold text-center my-2">Tại sao lại chọn PhongTro.com?</h1>
                <p className='text-center text-sm mx-20 py-2'>
                    Chúng tôi biết bạn có rất nhiều lựa chọn, nhưng Phongtro.com tự hào là trang web đứng top google về các từ khóa: {cates.map((cate, i) => {
                        if (i === 0) return ''
                        return (

                            <Button className={cx('text-xs font-bold text-colorPrimary')} to={cate.path} key={i}>
                                {cate.title},
                            </Button>
                        )
                    })}
                    ...Vì vậy tin của bạn đăng trên website sẽ tiếp cận được với nhiều khách hàng hơn, do đó giao dịch nhanh hơn, tiết kiệm chi phí hơn
                </p>
                <div className='flex justify-around items-center mb-4'>
                    {countups.map((countup, i) => (
                        <div className='flex flex-col justify-center items-center' key={i}>
                            <h3 className='text-xl font-bold mb-2'>{countup.value}+</h3>
                            <p className='text-sm'>{countup.title}</p>
                        </div>
                    ))}
                </div>
                <h1 className="text-xl font-bold text-center mt-6 mb-2">Chi phí thấp, hiệu quả tối đa</h1>
                <p className='text-center mb-3'>
                    <i className="fas fa-star text-colorYellow"></i>
                    <i className="fas fa-star text-colorYellow"></i>
                    <i className="fas fa-star text-colorYellow"></i>
                    <i className="fas fa-star text-colorYellow"></i>
                    <i className="fas fa-star text-colorYellow"></i>
                </p>
                <p className='mx-20 text-center text-sm italic'>"Trước khi biết website phongtro, mình phải tốn nhiều công sức và chi phí cho việc đăng tin cho thuê: từ việc phát tờ rơi, dán giấy, và đăng lên các website khác nhưng hiệu quả không cao. Từ khi biết website phongtro.com, mình đã thử đăng tin lên và đánh giá hiệu quả khá cao trong khi chi phí khá thấp, không còn tình trạng phòng trống kéo dài."</p>
                <p className='text-center text-sm my-3'>Anh Khánh chủ hệ thống phòng trọ tại Tp.HCM</p>
                <h1 className="text-xl font-bold text-center mt-6 mb-2">Bạn đang có phòng trọ / căn hộ cho thuê?</h1>
                <p className='text-center text-sm my-3'>Không phải lo tìm người cho thuê, phòng trống kéo dài</p>
                <div className='flex justify-center mb-6'>
                    <Button
                        className={cx('font-semibold hover:underline')} secondary to={routes.account}
                    >
                        Đăng tin ngay
                    </Button>
                </div>
            </div>
        </div>
    )
}
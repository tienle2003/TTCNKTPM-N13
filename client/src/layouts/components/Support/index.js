import bgSupportImg from '../../../assets/support-bg.jpg'
import Button from '../../../components/Button'
import routes from '../../../constants/routes'

const supporters = [
    { title: 'HỖ TRỢ ĐĂNG TIN', phone: '0902657123', zl: '0902657123' },
    { title: 'HỖ TRỢ ĐĂNG TIN', phone: '0902657123', zl: '0902657123' },
    { title: 'HỖ TRỢ ĐĂNG TIN', phone: '0902657123', zl: '0902657123' },
    { title: 'PHẢN ÁNH/KHIẾU NẠI', phone: '0902657123', zl: '0902657123' },
]

export default function Contact() {
    return (
        <div className="wrapper p-9 mt-9 bg-white rounded-md border-8 border-dashed border-[#e8eefc] shadow-md">
            <div className="container">
                <div className="flex justify-center">
                    <img className='w-1/2' src={bgSupportImg} alt='...' />
                </div>
                <div className='mt-6 px-6'>
                    <h1 className='text-center text-colorDark font-semibold'>Liên hệ với chúng tôi nếu bạn cần hỗ trợ:</h1>
                    <div className='flex justify-around mt-4'>
                        {supporters.map((el, i) => (
                            <div className='flex flex-col items-center ' key={i}>
                                <h1 className='text-sm text-colorOrange font-bold uppercase mb-2'>{el.title}</h1>
                                <Button className={'text-md font-bold uppercase'} href={`tel:${el.phone}`}>
                                    điện thoại: {el.phone}
                                </Button>
                                <Button className={'text-md font-bold uppercase'} href={`https://zalo.me/${el.zl}`}>
                                    zalo: {el.zl}
                                </Button>
                            </div>
                        ))}
                    </div>
                    <div className='flex justify-center mt-6'>
                        <Button primary
                            className={'font-bold hover:underline'}
                            to={routes.contact}
                        >
                            Gửi liên hệ
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
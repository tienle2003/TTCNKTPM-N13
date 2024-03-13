import Button from "../../../components/Button";
import Logo from "../../../components/Logo";
import cates from "../../../constants/categorys";
import routes from "../../../constants/routes";

const supports = [
    { path: routes.contact, title: 'Hỗ trợ khách hàng' },
    { path: routes.contact, title: 'Câu hỏi thường gặp' },
    { path: routes.contact, title: 'Hướng dẫn đăng tin' },
    { path: routes.contact, title: 'Bảng giá dịch vụ' },
    { path: routes.contact, title: 'Quy định đăng tin' },
    { path: routes.contact, title: 'Giải quyết khiếu nại' },
]

export default function Footer() {
    return (
        <div className="wrapper mt-9 mb-4 p-9 border-solid border-y border-gray-300">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <div>
                            <Logo />
                            <h1 className="text-sm mt-4 mb-2">Phongtro.com tự hào có lượng dữ liệu bài đăng lớn nhất trong lĩnh vực cho thuê phòng trọ.</h1>
                        </div>
                    </div>
                    <div className="col-3">
                        <div>
                            <h1 className="text-sm uppercase font-bold mb-2">Về PHONGTRO.COM</h1>
                            <div className="flex flex-col">
                                {cates.map((cate, i) => {
                                    if (i === 0) return ''
                                    return (
                                        <Button
                                            style={{ 'margin-left': '0' }}
                                            className={'my-2 text-xs hover:underline '} to={cate.path} key={i}
                                        >
                                            {cate.title}
                                        </Button>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div>
                            <h1 className="text-sm uppercase font-bold mb-2">Hỗ trợ khách hàng</h1>
                            <div className="flex flex-col">
                                {supports.map((support, i) => (
                                    <Button
                                        style={{ 'margin-left': '0' }}
                                        className={'my-2 text-xs hover:underline '} to={support.path} key={i}
                                    >
                                        {support.title}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div>
                            <h1 className="text-sm uppercase font-bold mb-2">Liên hệ với chúng tôi</h1>
                            <div>
                                <Button className={'text-2xl  text-colorPrimary'}>
                                    <i className="fab fa-facebook"></i>
                                </Button>
                                <Button className={'text-2xl text-red-400'}>
                                    <i className="fab fa-instagram"></i>
                                </Button>
                                <Button className={'text-2xl text-sky-500'}>
                                    <i className="fab fa-twitter"></i>
                                </Button>
                                <Button className={'text-2xl text-sky-800'}>
                                    <i className="fab fa-facebook-messenger"></i>
                                </Button>
                            </div>
                            <h1 className="text-sm uppercase font-bold mb-2 mt-4">Phương thức thanh toán</h1>
                            <div>
                                <i className="fab fa-cc-visa mr-2 text-2xl"></i>
                                <i className="fab fa-cc-mastercard mr-2 text-2xl"></i>
                                <i className="fab fa-cc-jcb mr-2 text-2xl"></i>
                                <i className="fas fa-money-check mr-2 text-2xl"></i>
                                <i className="far fa-money-bill-alt mr-2 text-2xl"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
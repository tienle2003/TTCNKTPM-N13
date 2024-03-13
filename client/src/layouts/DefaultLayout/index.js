import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import WhyUs from '../components/WhyUs'
import Support from '../components/Support'
import Footer from '../components/Footer'

export default function DefaultLayout({ children }) {
    return (
        <div className="wrapper bg-colorBgPage">
            <div className="container">
                <div className='row'>
                    <div className='col-12'>
                        <Header />
                    </div>
                    <div className='col-xl-9 col-lg-9 col-md-12 col-sm-12'>
                        {children}
                    </div>
                    <div className='col-xl-3 col-lg-3 col-md-12 col-sm-12'>
                        <Sidebar />
                    </div>
                    <div className='col-12'>
                        <WhyUs />
                    </div>
                    <div className='col-12'>
                        <Support />
                    </div>
                    <div className='col-12'>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}

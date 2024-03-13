import Header from '../components/Header'

export default function HeaderOnly({ children }) {
    return (
        <div className="wrapper">
            <div className="container">
                <div className="">
                    <Header onlyNavBar={true}/>
                </div>
                <div className=''>
                    {children}
                </div>
            </div>
        </div>
    )
}
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'


import liveCallImg from '../public/assets/img/avater/default-male.png' 
import playImg from '../public/assets/img/shape/play.png'
import appleImg from '../public/assets/img/shape/apple.png'

export default function App(){
    return(
        <>
            <Navbar />            
                <section id="app__page" class="ptb-100">
                    <div className="top">
                        <div className="container">
                            <div className="row pt-5">
                                <h3 className="w-100 text-center mb-5">Download Shafa Care apps</h3>
                                <div className="col-md-6 app-img pt-4 d-flex align-items-center justify-content-center">
                                    <img src={liveCallImg} alt="img"/>
                                </div>
                                <div className="col-md-6 d-flex justify-content-center flex-column h-100">
                                    <h4>Download Shafa Care Patient app</h4>
                                    <p>Access video consultation with top doctors on the Shafa Care app. Connect with doctors online, available 24/7, from the comfort of your home.</p>

                                    <div className="download_links d-flex pt-4">
                                        <a className="play-btn" href="https://play.google.com/store/apps/details?id=care.shafa.ai.user">
                                            <div className="d-flex flel-row align-items-center justify-content-center">
                                                <img src={playImg} />
                                                <p>download from <span>Play store</span></p>
                                            </div>
                                        </a>
                                        <a className="apple-btn">
                                            <div className="d-flex flel-row align-items-center justify-content-center">
                                                <img src={appleImg} />
                                                <p>download from <span>Apple store</span></p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="top">
                        <div className="container">
                            <div className="row pt-4">
                                
                                <div id="mobile_img_sec" className="col-md-6 app-img pt-4 d-flex align-items-center justify-content-center">
                                    <img src={liveCallImg} alt="img"/>
                                </div>
                                <div className="col-md-6 d-flex justify-content-center flex-column h-100">
                                    <h4>Download Shafa Care Doctor app</h4>
                                    <p>Access video consultation with top doctors on the Shafa Care app. Connect with doctors online, available 24/7, from the comfort of your home.</p>

                                    <div className="download_links d-flex pt-4">
                                        <a className="play-btn" href="https://play.google.com/store/apps/details?id=care.shafa.ai.doctor">
                                            <div className="d-flex flel-row align-items-center justify-content-center">
                                                <img src={playImg} />
                                                <p>download from <span>Play store</span></p>
                                            </div>
                                        </a>
                                        <a className="apple-btn">
                                            <div className="d-flex flel-row align-items-center justify-content-center">
                                                <img src={appleImg} />
                                                <p>download from <span>Apple store</span></p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div id="pc_img_sec" className="col-md-6 app-img pt-4 d-flex align-items-center justify-content-center">
                                    <img src={liveCallImg} alt="img"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            <Footer />
         </>
    )
}   



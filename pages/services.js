
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Link from 'next/link'
import SpecilistAnimation from '../Components/SpecilistAnimation';

// import images 
import serciceImg1 from '../public/assets/img/icon/services/services1.png'
import serciceImg2 from '../public/assets/img/icon/services/services2.png'
import serciceImg3 from '../public/assets/img/icon/services/services3.png'
import serciceImg4 from '../public/assets/img/icon/services/services4.png'
import serciceImg5 from '../public/assets/img/icon/services/services5.png'
import serciceImg6 from '../public/assets/img/icon/services/services6.png'
import serciceImg7 from '../public/assets/img/icon/services/services7.png'
import serciceImg8 from '../public/assets/img/icon/services/services8.png'
import { useState } from 'react';

export default function Services() {

    const [servicesCollBtn,setServicesCollBtn] = useState("0")

    function onClickFun(data){
        if(data == servicesCollBtn) setServicesCollBtn("0")
        else setServicesCollBtn(data)
    }

    return (
        <>
        <Navbar />
            
            {/* Start AboutUs Area */}
            <section className="services_page ptb-100">
                <div className="container pt-5">
                    <div className="row">
                        <div className="title text-center w-100 mb-5">
                            <h2>Medical Services + Internet + AI</h2>
                        </div>
                    </div>
                    <div className="row services-area-pc">
                        <div className="col-md-3 all_services_card">
                            <div className="services_card d-flex align-items-center justify-content-center">
                                <div className="single_sirvices_card">
                                    <img src={serciceImg1} alt="service"/>
                                    <p>Book virtual Appointment</p>
                                </div>
                                <div className="toggle_services">
                                    <div className="cutbordeer d-flex align-items-center justify-content-center">
                                        <p>Book Virtual Appointment with expert Doctor - Download the <Link href="/#download_app_section"><a href="">Shafa Care </a></Link> app from
                                        the Google Play Store / App Store and create your account in less than a minute and make appointments
                                        easily.</p>                                        
                                    </div>
                                </div> 
                            </div>  
                        </div>

                        <div className="col-md-3 all_services_card">
                            <div className="services_card d-flex align-items-center justify-content-center">
                                <div className="single_sirvices_card">
                                    <img src={serciceImg2} alt="service"/>
                                    <p>AI for Patients</p>
                                </div>
                                <div className="toggle_services">
                                    <div className="cutbordeer d-flex align-items-center justify-content-center">
                                        <p>AI for Patients to get right information predictivety, for quick and accurate prognosis.</p>                                        
                                    </div>
                                </div> 
                            </div>  
                        </div>

                        <div className="col-md-3 all_services_card">
                            <div className="services_card d-flex align-items-center justify-content-center">
                                <div className="single_sirvices_card">
                                    <img src={serciceImg3} alt="service"/>
                                    <p>AI for Doctors</p>
                                </div>
                                <div className="toggle_services">
                                    <div className="cutbordeer d-flex align-items-center justify-content-center">
                                        <p>AI for Doctor to help better investigate each case for quicker and sharper diagnosis.</p>                                        
                                    </div>
                                </div> 
                            </div>  
                        </div>

                        <div className="col-md-3 all_services_card">
                            <div className="services_card d-flex align-items-center justify-content-center">
                                <div className="single_sirvices_card">
                                    <img src={serciceImg4} alt="service"/>
                                    <p>Video consultant</p>
                                </div>
                                <div className="toggle_services">
                                    <div className="cutbordeer d-flex align-items-center justify-content-center">
                                        <p>Get Video Consultations from the APP with in-build video call feature.</p>                                        
                                    </div>
                                </div> 
                            </div>  
                        </div>

                        <div className="col-md-3 all_services_card">
                            <div className="services_card d-flex align-items-center justify-content-center">
                                <div className="single_sirvices_card">
                                    <img src={serciceImg5} alt="service"/>
                                    <p>E-Prescription</p>
                                </div>
                                <div className="toggle_services">
                                    <div className="cutbordeer d-flex align-items-center justify-content-center">
                                        <p><span>Get E-prescription</span> -- Automated e-Prescription from doctor saved for the patient for easy 
                                    access and secured storage.</p>                                        
                                    </div>
                                </div> 
                            </div>  
                        </div>

                        <div className="col-md-3 all_services_card">
                            <div className="services_card d-flex align-items-center justify-content-center">
                                <div className="single_sirvices_card">
                                    <img src={serciceImg6} alt="service"/>
                                    <p>Cloud Storage</p>
                                </div>
                                <div className="toggle_services">
                                    <div className="cutbordeer d-flex align-items-center justify-content-center">
                                        <p> Cloud Storage for Upload Medical Record for safe storage and easy consultation with Doctor.</p>                                        
                                    </div>
                                </div> 
                            </div>  
                        </div>

                        <div className="col-md-3 all_services_card">
                            <div className="services_card d-flex align-items-center justify-content-center">
                                <div className="single_sirvices_card">
                                    <img src={serciceImg7} alt="service"/>
                                    <p>Unique Health ID </p>
                                </div>
                                <div className="toggle_services">
                                    <div className="cutbordeer d-flex align-items-center justify-content-center">
                                        <p><span> UHID</span> -- Unique Health ID for reference and keeping e-health records for future consultations.</p>                                        
                                    </div>
                                </div> 
                            </div>  
                        </div>

                        <div className="col-md-3 all_services_card">
                            <div className="services_card d-flex align-items-center justify-content-center">
                                <div className="single_sirvices_card">
                                    <img src={serciceImg8} alt="service"/>
                                    <p>Medical Reminder</p>
                                </div>
                                <div className="toggle_services">
                                    <div className="cutbordeer d-flex align-items-center justify-content-center">
                                        <p><span>Medical Reminder</span> -- Get timely remainder of your medical in-take with special feature in App 
                                     which sync with the Patient e-Prescription.</p>                                        
                                    </div>
                                </div> 
                            </div>  
                        </div>

                    </div>
                    
                    <div className="row services-area-mobile">
                        <div className="single-services-card">
                            <button onClick={() => onClickFun("1")} className="d-flex justify-content-between">
                                <p>Book virtual Appointment</p>
                                {
                                    servicesCollBtn=="1" ? <i className="fas fa-angle-up"></i> :  <i className="fas fa-angle-down"></i> 
                                }
                            </button>
                            
                            {
                                servicesCollBtn == '1'?
                                <hr/>:null
                            }
                            {
                                servicesCollBtn == "1"?
                                <div className="services-card-description"><p>Book Virtual Appointment with expert Doctor - Download the <Link href="/#download_app_section"><a href="">Shafa Care </a></Link> app from
                                the Google Play Store / App Store and create your account in less than a minute and make appointments
                                easily.</p></div>
                                :null
                            }
                        </div>
                        <div className="single-services-card">
                            <button onClick={() => onClickFun("2")} className="d-flex justify-content-between">
                                <p>AI for Patients</p>
                                {
                                    servicesCollBtn=="2" ? <i className="fas fa-angle-up"></i> :  <i className="fas fa-angle-down"></i> 
                                }
                            </button>
                            
                            {
                                servicesCollBtn == '2'?
                                <hr/>:null
                            }
                            {
                                servicesCollBtn == "2"?
                                <div className="services-card-description"><p>AI for Patients to get right information predictivety, for quick and accurate prognosis.</p></div>
                                :null
                            }
                        </div>
                        <div className="single-services-card">
                            <button onClick={() => onClickFun("3")} className="d-flex justify-content-between">
                                <p>AI for Doctors</p>
                                {
                                    servicesCollBtn=="3" ? <i className="fas fa-angle-up"></i> :  <i className="fas fa-angle-down"></i> 
                                }
                            </button>
                            
                            {
                                servicesCollBtn == '3'?
                                <hr/>:null
                            }
                            {
                                servicesCollBtn == "3"?
                                <div className="services-card-description"><p>AI for Doctor to help better investigate each case for quicker and sharper diagnosis.</p></div>
                                :null
                            }
                        </div>    
                        <div className="single-services-card">
                            <button onClick={() => onClickFun("4")} className="d-flex justify-content-between">
                                <p>Video consultant</p>
                                {
                                    servicesCollBtn=="4" ? <i className="fas fa-angle-up"></i> :  <i className="fas fa-angle-down"></i> 
                                }
                            </button>
                            
                            {
                                servicesCollBtn == '4'?
                                <hr/>:null
                            }
                            {
                                servicesCollBtn == "4"?
                                <div className="services-card-description"><p>Get Video Consultations from the APP with in-build video call feature.</p></div>
                                :null
                            }
                        </div>
                        <div className="single-services-card">
                            <button onClick={() => onClickFun("5")} className="d-flex justify-content-between">
                                <p>E-Prescription</p>
                                {
                                    servicesCollBtn=="5" ? <i className="fas fa-angle-up"></i> :  <i className="fas fa-angle-down"></i> 
                                }
                            </button>
                            
                            {
                                servicesCollBtn == '5'?
                                <hr/>:null
                            }
                            {
                                servicesCollBtn == "5"?
                                <div className="services-card-description"><p><span>Get E-prescription </span> -- Automated e-Prescription from doctor saved for the patient for easy access and secured storage.</p></div>
                                :null
                            }
                        </div>
                        <div className="single-services-card">
                            <button onClick={() => onClickFun("6")} className="d-flex justify-content-between">
                                <p>Cloud Storage</p>
                                {
                                    servicesCollBtn=="6" ? <i className="fas fa-angle-up"></i> :  <i className="fas fa-angle-down"></i> 
                                }
                            </button>
                            
                            {
                                servicesCollBtn == '6'?
                                <hr/>:null
                            }
                            {
                                servicesCollBtn == "6"?
                                <div className="services-card-description"><p>Cloud Storage for Upload Medical Record for safe storage and easy consultation with Doctor.</p></div>
                                :null
                            }
                        </div>
                        <div className="single-services-card">
                            <button onClick={() => onClickFun("7")} className="d-flex justify-content-between">
                                <p>Unique Health ID</p>
                                {
                                    servicesCollBtn=="7" ? <i className="fas fa-angle-up"></i> :  <i className="fas fa-angle-down"></i> 
                                }
                            </button>
                            
                            {
                                servicesCollBtn == '7'?
                                <hr/>:null
                            }
                            {
                                servicesCollBtn == "7"?
                                <div className="services-card-description"><p><span>UUID </span> -- Unique Health ID for reference and keeping e-health records for future consultations.</p></div>
                                :null
                            }
                        </div>
                        <div className="single-services-card">
                            <button onClick={() => onClickFun("8")} className="d-flex justify-content-between">
                                <p>Medical Reminder</p>
                                {
                                    servicesCollBtn=="8" ? <i className="fas fa-angle-up"></i> :  <i className="fas fa-angle-down"></i> 
                                }
                            </button>
                            
                            {
                                servicesCollBtn == '8'?
                                <hr/>:null
                            }
                            {
                                servicesCollBtn == "8"?
                                <div className="services-card-description"><p><span>Medical Reminder </span> -- Get timely remainder of your medical in-take with special feature in App which sync with the Patient e-Prescription.</p></div>
                                :null
                            }
                        </div>               
                    </div>

                    <div className="row">
                        <div className="title text-center specilist_title  pt-4 w-100">
                            <h2>Our Top Specialities</h2>
                        </div>
                    </div>
                    <SpecilistAnimation />

                </div>
                <div className="container-fluid">
                    
                </div>
            </section>
            {/* End Contact Area */}
            <Footer />
        </>
    )
}
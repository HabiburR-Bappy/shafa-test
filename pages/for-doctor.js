
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Link from 'next/link'

// importing images 
import doctor1 from '../public/assets/img/solution-details/doctorimg1.png'
import problemImg from '../public/assets/img/solution-details/problem.png'
import image1 from '../public/assets/img/solution-details/image1.png'

import carouselImg1 from '../public/assets/img/solution-details/c1.png'
import carouselImg2 from '../public/assets/img/solution-details/c2.png'
import carouselImg3 from '../public/assets/img/solution-details/c3.png'

import benefit1 from '../public/assets/img/benefit/benefit1.png'
import benefit2 from '../public/assets/img/benefit/benefit2.png'
import benefit3 from '../public/assets/img/benefit/benefit3.png'
import benefit4 from '../public/assets/img/benefit/benefit4.png'


export default function AboutUs() {
  var benefitData = [
    {
      id: 1,
      image: benefit1,
      title: "Saves time for both you and your patients"
    }, {
      id: 2,
      image: benefit2,
      title: "Saves costs"
    }, {
      id: 3,
      image: benefit3,
      title: "Regular virtual follow-ups"
    }, {
      id: 4,
      image: benefit4,
      title: "Additional source of revenue"
    },
  ]
  return (
    <>
      <Navbar />

      {/* Start AboutUs Area */}
      <section id="doctor_need" className="">
        <div className="hero-area ptb-100">
          <div className="container">
            <div className="row pt-5">
              <div className="col-md-6 pt-5">
                <h1 className="mt-3 mb-5 title1 coor-logo">Easy and Secure Telemedicine Solution</h1>
                <Link href="/doctor-registration"><a className="default-btn">Try it for FREE<span></span></a></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="problem pt-5 pb-5">
          <div className="container">
            <div className="row">
              <div className="top w-100 text-center pt-4">
                <h2 className="w-100 mt-3 mb-3 color-logo">Simple and Secure Telemedicine</h2>
                <p className="w-100 mb-3 app">Branded Telemedicine Apps for iOS, Android and Web</p>
                <p>A telehealth solution to improve Patient Outcomes and drive your medical practice revenues</p>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-3 text-center pt-5 pb-3 left-img">
                <img className="h-250" src={problemImg} alt="" />
              </div>
              <div className="col-md-7 pt-4 problem-right-text d-flex align-items-center  pb-3">
                <h2 className="color-logo">Schedule telemedicine sessions based on your convenience</h2>
              </div>              
              <div className="col-md-1"></div>
            </div>

            <div className="row slider-1 pt-4">
              <div className="col-md-6 mb-4">
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <p className="txt-bold">Plan your schedule</p>
                    <p className="txt-md">Set suitable appointment slots for Video Consultations, to balance your clinic schedule with telehealth sessions.</p>
                  </div>
                  <div className="col-md-6 mb-4">
                    <p className="txt-bold">Define time slots</p>
                    <p className="txt-md">Choose how long you would like your telemedicine sessions to go on. Define a suitable time slot to better assess your patients</p>
                  </div>
                  <div className="col-md-6">
                    <p className="txt-bold">Manage your time</p>
                    <p className="txt-md">Confirm, cancel or re-schedule telemedicine appointments to suit your availability so that your time is managed effectively</p>
                  </div>
                  <div className="col-md-6">
                    <p className="txt-bold">Reduce No-Shows</p>
                    <p className="txt-md">Limit no-shows with telemedicine appointments confirmations and reminders about upcoming telemedicine sessions.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div id="carouselExampleIndicators5" class="carousel slide" data-ride="carousel">

                  <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators5" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators5" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators5" data-slide-to="2"></li>
                  </ol>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img class="d-block w-100" src={carouselImg1} data-color="lightblue" alt="First Image" />
                      <div class="carousel-caption d-md-block">
                        <h5>First Image</h5>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src={carouselImg2} data-color="firebrick" alt="Second Image" />
                      <div class="carousel-caption d-md-block">
                        <h5>Second Image</h5>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src={carouselImg3} data-color="violet" alt="Third Image" />
                      <div class="carousel-caption d-md-block">
                        <h5>Third Image</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row slider-1-bottom pt-5 pb-5">
            <div className="col-md-1"></div>
              <div className="col-md-3 text-center">
                <img className="h-250" src={image1} alt="img" />
              </div>
              <div className="col-md-7 d-flex align-items-center">
                <h3 className="color-logo">Collect payments for your telemedicine session online</h3>
              </div>
            </div>

            <div className="row slider-2 pt-4">
              <div className="col-md-6 mb-4">
                <div id="carouselExampleIndicators1" class="carousel slide" data-ride="carousel">

                  <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators1" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators1" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators1" data-slide-to="2"></li>
                  </ol>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img class="d-block w-100" src={carouselImg1} data-color="lightblue" alt="First Image" />
                      <div class="carousel-caption d-md-block">
                        <h5>First Image</h5>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src={carouselImg2} data-color="firebrick" alt="Second Image" />
                      <div class="carousel-caption d-md-block">
                        <h5>Second Image</h5>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src={carouselImg3} data-color="violet" alt="Third Image" />
                      <div class="carousel-caption d-md-block">
                        <h5>Third Image</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <p className="txt-bold">Define pricing</p>
                    <p className="txt-md">You have the flexibility to price and charge patients (or keep it free) for telemedicine session as your see fit.</p>
                  </div>
                  <div className="col-md-6 mb-4">
                    <p className="txt-bold">Online payments</p>
                    <p className="txt-md">Upfront payments for your telehealth sessions before the session is due to start, to confirm participation.</p>
                  </div>
                  <div className="col-md-6 mb-4">
                    <p className="txt-bold">Online billing</p>
                    <p className="txt-md">Generate bills for Video Consultations on your Virtual Practice to keep track of revenue generated for telemedicine services</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row slider-1-bottom pt-5 pb-5">
            <div className="col-md-1"></div>
              <div className="col-md-3 text-center">
                <img className="h-250" src={image1} alt="img" />
              </div>
              <div className="col-md-7 d-flex align-items-center">
                <h3 className="color-logo">Access patient health records during video sessions to help with diagnosis</h3>
              </div>
              <div className="col-md-1"></div>
            </div>

            <div className="row slider-2">
              <div className="col-md-6 mb-4">
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <p className="txt-bold">Effective diagnosis</p>
                    <p className="txt-md">Access to patient Personal Health Records and health trackers is available during telemedicine sessions, helping you diagnose and treat patients effectively</p>
                  </div>
                  <div className="col-md-6 mb-4">
                    <p className="txt-bold">Direct interaction</p>
                    <p className="txt-md">Whether on your desktop or mobile phone, Video Consultations help you interact with patients just as you would at your clinic</p>
                  </div>
                  <div className="col-md-6 mb-4">
                    <p className="txt-bold">Audio mode</p>
                    <p className="txt-md">Connectivity issues do not need to affect your interaction. Switch to an audio-only mode to resume sessions interrupted by poor connectivity</p>
                  </div>
                  <div className="col-md-6 mb-4">
                    <p className="txt-bold">Manage from anywhere</p>
                    <p className="txt-md">Your telemedicine appointments and sessions can be managed from anywhere, on the web ormobile app.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">

                  <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators2" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators2" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators2" data-slide-to="2"></li>
                  </ol>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img class="d-block w-100" src={carouselImg1} data-color="lightblue" alt="First Image" />
                      <div class="carousel-caption d-md-block">
                        <h5>First Image</h5>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src={carouselImg2} data-color="firebrick" alt="Second Image" />
                      <div class="carousel-caption d-md-block">
                        <h5>Second Image</h5>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src={carouselImg3} data-color="violet" alt="Third Image" />
                      <div class="carousel-caption d-md-block">
                        <h5>Third Image</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row slider-1-bottom pt-5 pb-5">
            <div className="col-md-1"></div>
              <div className="col-md-3 text-center">
                <img className="h-250" src={image1} alt="img" />
              </div>
              <div className="col-md-7 d-flex align-items-center">
                <h3 className="color-logo">Share post-session summaries with patients to improve adherence</h3>
              </div>
              <div className="col-md-1"></div>
            </div>

            <div className="row slider-2 pt-4">
              <div className="col-md-6 mb-4">
                <div id="carouselExampleIndicators3" class="carousel slide" data-ride="carousel">

                  <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators3" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators3" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators3" data-slide-to="2"></li>
                  </ol>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img class="d-block w-100" src={carouselImg1} data-color="lightblue" alt="First Image" />
                      <div class="carousel-caption d-md-block">
                        <h5>First Image</h5>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src={carouselImg2} data-color="firebrick" alt="Second Image" />
                      <div class="carousel-caption d-md-block">
                        <h5>Second Image</h5>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src={carouselImg3} data-color="violet" alt="Third Image" />
                      <div class="carousel-caption d-md-block">
                        <h5>Third Image</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <p className="txt-bold">Consultation Notes</p>
                    <p className="txt-md">Create notes about your telemedicine sessions with patients to include goals, medications prescribed, invoices, follow up appointments or care plans you may have discussed.</p>
                  </div>
                  <div className="col-md-6 mb-4">
                    <p className="txt-bold">ePrescriptions</p>
                    <p className="txt-md">Online prescriptions for telemedicine sessions which can be sent to patients or printed on your clinic letter-head</p>
                  </div>
                  <div className="col-md-6 mb-4">
                    <p className="txt-bold">Consultation summary</p>
                    <p className="txt-md">Share a summary via email with patients, including key aspects discussed during your session, for better medication adherence</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row slider-2-bottom pt-5 pb-5">
            <div className="col-md-1"></div>
              <div className="col-md-3 text-center">
                <img className="h-250" src={doctor1} alt="img" />
              </div>
              <div className="col-md-7 d-flex align-items-center">
                <h3 className="color-logo">Follow up with patients on their progress</h3>
              </div>
              <div className="col-md-1"></div>
            </div>

            <div className="row slider-2">
              <div className="col-md-6 mb-4">
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <p className="txt-bold">Patient-initiated</p>
                    <p className="txt-md">Patients can book follow-up appointments to their clinic visits or online consultations and consult with your via Video Consultations</p>
                  </div>
                  <div className="col-md-6 mb-4">
                    <p className="txt-bold">Provider-initiated</p>
                    <p className="txt-md">Book follow-up telemedicine sessions for patients who may not be able to visit you at your clinic</p>
                  </div>
                  <div className="col-md-6 mb-4">
                    <p className="txt-bold">Text consultations</p>
                    <p className="txt-md">Your patients also have the option of following up with you through text-based consultations on the web or mobile app.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div id="carouselExampleIndicators4" class="carousel slide" data-ride="carousel">

                  <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators4" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators4" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators4" data-slide-to="2"></li>
                  </ol>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img class="d-block w-100" src={carouselImg1} data-color="lightblue" alt="First Image" />
                      <div class="carousel-caption d-md-block">
                        <h5>First Image</h5>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src={carouselImg2} data-color="firebrick" alt="Second Image" />
                      <div class="carousel-caption d-md-block">
                        <h5>Second Image</h5>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src={carouselImg3} data-color="violet" alt="Third Image" />
                      <div class="carousel-caption d-md-block">
                        <h5>Third Image</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row pt-5 pt-2">
              <h2 className="w-100 text-center mb-4 color-logo">Other benefits</h2>
              {
                benefitData ?
                  benefitData.map((item) => {
                    return (
                      <div className="col-md-3">
                        <div className="benefit-card text-center">
                          <img src={item.image} />
                          <p className="mt-2">{item.title}</p>
                        </div>
                      </div>
                    )
                  }) : null
              }
              <div className="col-md-3">

              </div>
            </div>

          </div>
        </div>

        <div id="for_doctor_apply">
          <div className="container pt-5 pb-5">
            <div className="row d-flex flex-column align-items-center justify-content-center">
              <h2 className="color-logo">Free Telemedicine Platform Trial</h2>
              <p className="mt-2 mb-4">A chance for you to trial and assess our Telemedicine Platform. No hidden costs.</p>
              <Link href="/doctor-registration"><a className="default-btn">Try for FREE<span></span></a></Link>
              <p className="txt-light">No credit card required</p>
            </div>
          </div>
        </div>
      </section>
      {/* End Contact Area */}
      <Footer />
      
    </>
  )
}
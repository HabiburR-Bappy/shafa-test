import userImg from '../public/assets/img/team.jpg'
import userImg1 from '../public/assets/img/team1.jpg'
import userImg2 from '../public/assets/img/team2.jpg'

export default function 
Carousel(){
    return(
        <section className="pt-1 pb-5">
			<div className="container">
                <div class="col-md-12 mt-2">
                    <div id="carouselExampleControls1" class="carousel slide" data-ride="carousel" data-interval="5000">
                        <div class="w-100 carousel-inner" role="listbox">
                        <div class="carousel-item active">
                            <div class="bg"></div>
                            <div class="carousel-caption">
                            <div class="row">
                                <div class="col-md-4 col-sm-4 d-flex flex-column justify-content-center">
                                <img src={userImg} alt="" class="rounded-circle" />
                                <p className="mt-3">HR Bappy</p>
                                </div>
                                <div class="col-md-8 col-sm-8">
                                {/* <h3>Gives me hope</h3> */}
                                <p>Very easy to book, maintain history. Hassle free from older verstion of booking appoinment via telephone..
                                            Thanks Shafa Care for making it simple.</p>
                                <p class="smallest ">-Shafa Dev User</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="bg"></div>
                            <div class="carousel-caption">
                            <div class="row">
                                <div class="col-md-4 col-sm-4 d-flex flex-column justify-content-center">
                                <img src={userImg1} alt="" class="rounded-circle" />
                                <p className="mt-3">Jubaidul</p>
                                </div>
                                <div class="col-md-8 col-sm-8">
                                {/* <h3>You will love it.</h3> */}
                                <p>Very good app. Well thought out about booking/rescheduling/canceling an appoinment. Also, Doctor's feedback
                                            mechanism is good and describes all the basics in a good way.</p>
                                <p class="smallest mute">- Shafa Care</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="bg"></div>
                            <div class="carousel-caption">
                            <div class="row">
                                <div class="col-md-4 col-sm-4 d-flex flex-column justify-content-center">
                                <img src={userImg2} alt="" class="rounded-circle" />
                                <p className="mt-3">MMS Piash</p>
                                </div>
                                <div class="col-md-8 col-sm-8">
                                {/* <h3>Velvet pouch!</h3> */}
                                <p>Very easy to book, maintain history. Hassle free from older verstion of booking appoinment via telephone..
                                        Thanks Shafa Care for making it simple.</p>
                                <p class="smallest mute">- Shafa Care User</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="w-100 text-center">
                            <a class="carousel-control-pre mr-3" href="#carouselExampleControls1" role="button" data-slide="prev">
                                <i class="fa fa-angle-left" aria-hidden="true"></i>
                            </a>
                            <a class="carousel-control-nex ml-3" href="#carouselExampleControls1" role="button" data-slide="next">
                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>
			</div>
		</section>
    )
}
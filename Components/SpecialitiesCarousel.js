
import img1 from '../public/assets/img/promo-banner/promo_banner1.jpg'
import img2 from '../public/assets/img/promo-banner/promo_banner2.jpg'
import img3 from '../public/assets/img/promo-banner/promo_banner3.jpg'
import img4 from '../public/assets/img/promo-banner/promo_banner4.jpg'
import Link from 'next/link';




export default function Carousel() {
    return (
        <div className="carousel-2">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="3000">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="carousel_img_sec">
                            <Link href="/"><img className="first_img" src={img1} alt="slide img" /></Link> 
                            <Link href="/"><img className="snd_img" src={img2} alt="slide img" /></Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel_img_sec">
                            <Link href="/"><img className="first_img" src={img3} alt="slide img" /></Link>
                            <Link href="/"><img className="snd_img" src={img4} alt=" slide img" /></Link>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <i class="fa fa-angle-left" aria-hidden="true"></i>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    )
}
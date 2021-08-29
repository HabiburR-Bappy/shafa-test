import React from 'react'

import img1 from '../public/assets/img/promo-banner/min1.png'
import img2 from '../public/assets/img/promo-banner/min2.png'
import img3 from '../public/assets/img/promo-banner/min3.png'

import DefaultShape from './DefaultShape'


export default function HeroSlider() {
    return (
        <>
            <div id="carouselHeroControls" class="carousel slide" data-ride="carousel" data-pause="false" data-interval="3000">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src={img1} alt="First slide" />
                        <DefaultShape />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={img2} alt="Second slide" />
                        <DefaultShape />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={img3} alt="Third slide" />
                        <DefaultShape />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselHeroControls" role="button" data-slide="prev">
                    <i class="fa fa-angle-left" aria-hidden="true"></i>
                </a>
                <a className="carousel-control-next" href="#carouselHeroControls" role="button" data-slide="next">
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                </a>
            </div>
        </>
    )
}
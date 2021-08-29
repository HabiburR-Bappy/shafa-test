import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ssl from '../public/assets/img/SSL.png'

export default function RefundPolicy(){
    return(
        <>
            <Navbar />            
                <section id="home__page" class="ptb-100">
                    <img src={ssl} alt="ssl"/>
                </section>
            <Footer />
         </>
    )
}   



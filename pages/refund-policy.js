import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Link from 'next/link'

export default function RefundPolicy(){
    return(
        <>
            <Navbar />
            
            <section id="refund-policy" class="ptb-100">
            <div class="container">
            <div class="row title-area pb-5">
                <h1 class="h1 title2 w-100 text-center">Shafa refund policy</h1>
            </div>
            <div class="row">
                <div class="row single_section pb-2">
                    <h3 class="mb-2 w-100">1.	payments</h3>
                    <p class="w-100">1.1 &nbsp; The PLATFORM shall solely handle all financial transactions.</p>
                    <p>1.2 &nbsp;  No payments will be made other than the PLATFORM’s payment gateway.</p>
                    <p>1.3 &nbsp; Where there is consultation fee, users must pay the consultation fee and VAT before joining the doctor queue for consultation.</p>
                    <p>1.4 &nbsp; Where there is no consultation fee, users will not be required to make any payment and they will be straight transferred to the doctor consultation queue.</p>
                    <p>1.5 &nbsp; Once the customer has made the payment and joined the queue, they will not be able to cancel the payment.</p>
                       
                </div>
    
                <div class="row single_section pb-2">
                    <h3 class="mb-2 w-100">2.	refund</h3>
                    <p class="w-100">2.1 &nbsp; If the wait time in the queue is 60 minutes more than it stated before the payment, customers can cancel the consultation and a refund will be made deducting a small payment processing fee.</p>
                    <p>2.2 &nbsp;  If a doctor can not consult a patient due to any reason, the user will get a full refund.</p>
                    <p>2.3 &nbsp; If a patient cancels a consultation prior to the video call of the doctor, a 5% fee will be deducted and the remaining fee will be refunded to the customer. There may be additional charges to make the refund. For example if the user wants the money to be refunded to bkash, bkash transaction fee will be deducted.</p>
                    <p>2.4 &nbsp; For any cancellation and refund please email to refund@shafa.care</p>
                    <p>2.5 &nbsp; Refund process may take up to 14 working days.</p>
                </div>
            </div>
        </div>
            </section>

            <Footer />
         </>
    )
}   




// // css libraries 
import '../styles/custom.css'
import Layout from '../Components/Layout';


// ClimbingBoxLoader
function MyApp({ Component, pageProps }) {  

  return (
    <>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="stylesheet" href="assets/css/animate.css" />
      <link rel="stylesheet" href="assets/css/meanmenu.css" />
      <link rel="stylesheet" href="assets/css/fontawesome.min.css" />
      <link rel="stylesheet" href="assets/css/flaticon.css" />
      <link rel="stylesheet" href="assets/css/nice-select.css" />
      <link rel="stylesheet" href="assets/css/odometer.css" />
      <link rel="stylesheet" href="assets/css/magnific-popup.min.css" />
      <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
      <link rel="stylesheet" href="assets/css/owl.theme.default.min.css" />      
      <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
      <link rel="stylesheet" href="assets/css/style.css" />
		  <link rel="stylesheet" href="assets/css/responsive.css" />
		  {/* <link rel="stylesheet" href="assets/css/slider.css" /> */}
		  <link rel="stylesheet" href="assets/css/reset.min.css" />
        
          <Layout>
            <Component {...pageProps} />        
          </Layout>
      

      <script src="assets/js/jquery.min.js"></script>
      <script src="assets/js/popper.min.js"></script>
      <script src="assets/js/jquery.meanmenu.js"></script>
      <script src="assets/js/jquery.nice-select.min.js"></script>
      <script src="assets/js/odometer.min.js"></script>
      <script src="assets/js/jquery.appear.js"></script>
      <script src="assets/js/datepicker.min.js"></script>
      <script src="assets/js/jquery.magnific-popup.min.js"></script>
      <script src="assets/js/owl.carousel.min.js"></script>
      <script src="assets/js/jquery.ajaxchimp.min.js"></script>
      <script src="assets/js/form-validator.min.js"></script>
      <script src="assets/js/contact-form-script.js"></script>
      <script src="assets/js/bootstrap.min.js"></script>
      <script src="assets/js/main.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/ekko-lightbox/5.3.0/ekko-lightbox.js"></script>
  
    </>
  )
}

export default MyApp

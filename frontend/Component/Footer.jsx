import '../ComponentStyling/Footer.css'

import { BiLogoFacebookCircle , BiLogoYoutube ,BiLogoInstagramAlt , BiLogoGithub } from "react-icons/bi";


function Footer(){

    return(
        <footer className="footer"  id='footer'>
        <div className="social">
            <a href="#"><BiLogoFacebookCircle /></a>
             <a href="#"><BiLogoInstagramAlt /></a>
            <a href="#"><BiLogoGithub /></a>
            <a href="#"><BiLogoYoutube /></a> 
        </div>

        <p className="copyright">
            &copy; Ehsan Hussain - All Rights Reserved 
        </p>


    </footer>
    )
}

export default Footer
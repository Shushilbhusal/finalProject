import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { AiFillTikTok } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <>
    <div className="bg-[#000000] w-auto">
        <div className="text-white flex justify-evenly pt-6">
        <ul>
            <li><b>Daraz</b></li>
            <li><a href="">About</a></li>
            <li><a href="">Careers</a></li>
            <li><a href="">Investors</a></li>
            <li><a href="">Press and Media</a></li>
            <li><a href="">Affiliates</a></li>
            <li><a href="">Legal</a></li>
            <li><a href="">Service Status</a></li>

          
        </ul>
        <ul>
        <li><b>Support</b></li>
            <li><a href="">Merchant Support</a></li>
            <li><a href="">Help Center</a></li>
            <li><a href="">Hire a Partner</a></li>
            <li><a href="">Daraz Academy</a></li>
            <li><a href="">Daraz Community</a></li>
            <li><a href="">Legal</a></li>

        </ul>
        <ul>
        <li><b>Developers</b></li>
            <li><a href="">Daraz.dev</a></li>
            <li><a href="">API Documentation</a></li>
            <li><a href="">Dev Degree</a></li>
            

        </ul>

        </div>
        <br />
        <hr className=" text-white"/>
        <br />
        <div className="text-white flex  gap-4 h-12 justify-center">
            <a href="https://www.facebook.com/"><FaFacebookSquare className="text-3xl"/></a>
            <a href=""><FaSquareXTwitter className="text-3xl "/></a>
            <a href=""><IoLogoYoutube className="text-3xl"/></a>
           <a href="">< AiFillTikTok className="text-3xl"/></a>
           <a href=""><FaInstagramSquare className="text-3xl"/></a>
           <a href=""><FaLinkedin className="text-3xl"/></a>

        </div>
        
    </div>

    </>
  )
}

export default Footer
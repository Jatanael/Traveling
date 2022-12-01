import {React,useEffect} from 'react'
import './footer.css'
import video2 from '../../Assets/video (2).mp4'
import {FiSend,FiChevronRight} from 'react-icons/fi';
import {MdOutlineTravelExplore} from 'react-icons/md';
import {AiOutlineTwitter,AiFillYoutube,AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa';
import Aos from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {

  useEffect(() =>{
    Aos.init({duration:2000})
}, [])

  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4">
        </video>
      </div>

      <div className="setContent container">
        <div className="contactDiv flex">
          <div  data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input  data-aos="fade-up" type="text"  placeholder='Enter Email Address'/>
            <button  data-aos="fade-up" className="btn flex" type='submit'>
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>

          <div className="footerCard flex">
            <div className="footerIntro flex">
              <div className="logoDiv">
                <a href="#top" className='logo flex'> <MdOutlineTravelExplore className="icon"/>Travel</a>
              </div>

              <div  data-aos="fade-up"
              className="footerParagraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sequi hic id! Maxime maiores nulla quaerat, ullam deleniti nostrum voluptate itaque placeat ab debitis doloremque, soluta dolor facere illo optio?
              </div>

              <div  data-aos="fade-up" className="footerSocials flex">
                <AiOutlineTwitter className="icon"/>
                <AiFillYoutube className="icon" />
                <AiFillInstagram className="icon" />
                <FaTripadvisor className="icon" />
              </div>

            </div>

            <div className="footerLinks grid">
             {/* Group Two*/}
              <div  data-aos="fade-up"
              data-aos-duration="3000" className="linkGroup">
                <span className="groupTitle">
                  OUR AGENCY
                </span>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Service
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Insurance
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Agency
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Tourism
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Payment
                </li>


              </div>

              <div  data-aos="fade-up"
              data-aos-duration="4000" className="linkGroup">
                <span className="groupTitle">
                  PARTNERS
                </span>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Bookings
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Rentcars
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  HostelWorld
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Trivago
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                 TripAdvisor
                </li>


              </div>

              <div  data-aos="fade-up"
              data-aos-duration="5000" className="linkGroup">
                <span className="groupTitle">
                  LAST MINUTE
                </span>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  LONDON
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  CALIFORNIA
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  INDONESIA
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  EUROPE
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  OCEANIA
                </li>


              </div>
            </div>
          </div>
      </div>

    </section>
  )
}

export default Footer;
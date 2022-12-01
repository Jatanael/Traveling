import {React,useEffect} from 'react'
import './main.css'
import {HiOutlineLocationMarker, HiOutlineClipboardCheck} from 'react-icons/hi';
import img from '../../Assets/img.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Data =[
  {
    id:1,
    imgSrc: img,
    destTitle: 'Grand Canyon',
    location: 'United States',
    grade: 'CULTURAL RELAX ',
    fees: '$700',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil accusamus tempora dolorem architecto natus illo aliquam quaerat tempore soluta expedita molestiae suscipit harum enim quae magni, est praesentium possimus laboriosam."
  },

   {
    id:2,
    imgSrc: img2,
    destTitle: 'Rio de Janeiro',
    location: 'Brazil',
    grade: 'DANCE WITH SAMBA',
    fees: '$300',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil accusamus tempora dolorem architecto natus illo aliquam quaerat tempore soluta expedita molestiae suscipit harum enim quae magni, est praesentium possimus laboriosam."
  },

  {
    id:3,
    imgSrc: img3,
    destTitle: 'Amsterdã',
    location: 'Holand',
    grade: 'CULTURAL RELAX ',
    fees: '$1000',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil accusamus tempora dolorem architecto natus illo aliquam quaerat tempore soluta expedita molestiae suscipit harum enim quae magni, est praesentium possimus laboriosam."
  },

  {
    id:4,
    imgSrc: img4,
    destTitle: 'Grand Canyion',
    location: 'United States',
    grade: 'CULTURAL RELAX ',
    fees: '$700',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil accusamus tempora dolorem architecto natus illo aliquam quaerat tempore soluta expedita molestiae suscipit harum enim quae magni, est praesentium possimus laboriosam."
  },

  {
    id:5,
    imgSrc: img5,
    destTitle: 'Porto',
    location: 'Portugal',
    grade: 'CULTURAL RELAX ',
    fees: '$500',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil accusamus tempora dolorem architecto natus illo aliquam quaerat tempore soluta expedita molestiae suscipit harum enim quae magni, est praesentium possimus laboriosam."
  },

  {
    id:6,
    imgSrc: img6,
    destTitle: 'Tokyo',
    location: 'Japan',
    grade: 'CULTURAL RELAX ',
    fees: '$650',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil accusamus tempora dolorem architecto natus illo aliquam quaerat tempore soluta expedita molestiae suscipit harum enim quae magni, est praesentium possimus laboriosam."
  },

  {
    id:7,
    imgSrc: img7,
    destTitle: 'Paris',
    location: 'france',
    grade: 'CULTURAL RELAX ',
    fees: '$630',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil accusamus tempora dolorem architecto natus illo aliquam quaerat tempore soluta expedita molestiae suscipit harum enim quae magni, est praesentium possimus laboriosam."
  },

  {
    id:8,
    imgSrc: img8,
    destTitle: 'London',
    location: 'England',
    grade: 'CULTURAL RELAX ',
    fees: '$1200',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil accusamus tempora dolorem architecto natus illo aliquam quaerat tempore soluta expedita molestiae suscipit harum enim quae magni, est praesentium possimus laboriosam."
  },

  {
    id:9,
    imgSrc: img9,
    destTitle: 'Moscow',
    location: 'Russia',
    grade: 'CULTURAL RELAX ',
    fees: '$600',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil accusamus tempora dolorem architecto natus illo aliquam quaerat tempore soluta expedita molestiae suscipit harum enim quae magni, est praesentium possimus laboriosam."
  } 

  ]

const Main = () => {
  useEffect(() =>{
    Aos.init({duration:2000})
}, [])



  
  return (
    <section className='main container section'>


  <div className="secTitle">
    <h3 data-aos="fade-right" className="title">
      Most visited destination
    </h3>
  </div>

    <div className="secContent grid">


      {
        Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
        return(
          <div key={id}
          data-aos="fade-up" 
           className="singleDestination">


            <div className="imageDiv">
              <img src={imgSrc} alt={destTitle}/>
            </div>

            <div className="cardInfo">
              <h4 className="destTitle">{destTitle}</h4>
              <span className="continent flex"><HiOutlineLocationMarker className='icon'/>
              <span className="name">{location}</span>
              </span>

                <div className="fees flex">
                  <div className="grade">
                    <span>{grade}<small>+1</small></span>
                  </div>
                  <div className="price">
                    <h5>{fees}</h5>
                  </div>
                </div>


              <div className="desc">
                <p>{description}</p>
              </div>

              <button className="btn flex">
                DETAILS <HiOutlineClipboardCheck className='icon'/></button>
            </div>
          </div>
        )
        })


      }
    </div>

    </section>
  )
}

export default Main
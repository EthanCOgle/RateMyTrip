import {useState} from 'react'
import {AiOutlineArrowLeft} from "react-icons/ai"
import {AiOutlineArrowRight} from "react-icons/ai"
import {sliderData} from "./slider-data"
import "./Slider.scss"

const Slider = () => {
    const [currentSlde,setCurrentSlde] = useState(0) //using react hooks
  return (
    <div className="slider">
       <AiOutlineArrowLeft className= "arrow prev"/>
       <AiOutlineArrowRight className= "arrow next"/>

       {sliderData.map((slide, index) => {
            return (
                //switches between which slide is on the screen 
                <div className= {index === currentSlide ?
                 "slide current" : "slide"} key={index}> 
                    {index === currentSlide && (
                        <img
                    )}
                </div>    
            )
       })}
    </div>
  )
}

export default Slider
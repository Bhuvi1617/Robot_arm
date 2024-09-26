import React from 'react'
import { Link } from 'react-router-dom'
import Slider from "../components/Slider"
import NewSlider from "../components/NewSlider"
function Home() {
  return (
    <>
      <Slider name = "rightServo" api = "baseServoControl" min="90" max = "180"/>
      <Slider name = "end_effector" api = "shoulderJointControl" min = "0" max ="100"/>
      <Slider name = "Vertical_Drive" max = '180' min = "30" api = "armJointControl"/>
      <Slider name = "base" min = "0" max = "180" api = "endEffectorControl"/>
      <Link to = "/looper"><button>Initiate Looping Sequence</button>
        </Link>

    </>
  )
}

export default Home

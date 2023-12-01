import React from 'react'
import img from'../../assets/questionnaire/comingsoon.png'
import './ComingSoon.css'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom'

function ComingSoon() {
  const navigate=useNavigate()
  const clickFunc=()=>{
    (navigate('/diseases'))
  }
  return (
    <div className='coms-bg'>
      <Navbar/>
        <div className='mt-5 coms-card text-center'>
          <img src={img} alt="" className='coms-img'/>
          <h2>Coming Soon</h2>
          <p>Thank you for visiting us, Currently we are providing services on Soul Care.</p>
          <p>Click here to get assistance on mental health</p>
          <button className='coms-btn' onClick={clickFunc}>Go to Soul Care</button>
        </div>
      <Footer />
    </div> 
  )
}
export default ComingSoon
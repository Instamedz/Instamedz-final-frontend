import React from 'react'
import img4 from'../../assets/questionnaire/toaster.png'
import './Remedies.css'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

function Remedies() {
  return (
    <div className='remedies-bg'>
      <Navbar/>
        <div className='mt-5 remedies-card text-center'>
          <img src={img4} alt="" className='remedies-img'/>
          <h2>Coming Soon</h2>
          <p>Your remedies are getting cooked, come again later.</p>
        </div>
      <Footer />
    </div> 
  )
}
export default Remedies

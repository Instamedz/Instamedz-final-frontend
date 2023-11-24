import React from 'react'
import { useLocation } from 'react-router-dom';
import img4 from'../../assets/questionnaire/img4.png'
import img3 from'../../assets/questionnaire/img3.png'
import {useNavigate} from 'react-router-dom';
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

function QuestResult() {
  const location=useLocation();
  const flag=location.state.id;
  const showPosResults = flag;
  const navigate = useNavigate();

  const handleClick =(flag)=>{
    if(flag==="remedies") navigate('/remedies');
    if(flag==="doctor") navigate('/appointdoctor/soul');
  }
  return (
    <div className='result-bg'>
      <Navbar/>
      {showPosResults ?
      (
        <div className='mt-5 result-card text-center'>
          <img src={img4} alt="" className='result-img'/>
          <h2>Minimal to Mild</h2>
          <p>Your responses doesnot indicate any potential concern, we recommend home remedies and exercises to help you recover better</p>
          <button className='result-btn' onClick={()=>handleClick("remedies")}>Get Remedies</button> 
        </div>
      )
      :(
        <div className='result-card text-center'>
          <img src={img3} alt="" className='result-img'/>
          <h2>Moderate to Severe</h2>
          <p>Your responses indicate a potential concern, we strongly recommend consulting a mental health professional for a comprehensive assessment and appropriate guidance</p>
          <button className='result-btn' onClick={()=>handleClick("doctor")}>Connect With Doctor</button>
        </div>
      )}
      <Footer />
    </div> 
  )
}
export default QuestResult

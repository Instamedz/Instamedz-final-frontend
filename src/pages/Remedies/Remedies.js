import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './Remedies.css'
import gifimage from '../../assets/remedies/remediesgif.gif'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

function Remedies() {
  const navigate = useNavigate();

  const location=useLocation();
  const diseasename=location.state.id;
  console.log(diseasename)

  useEffect(() => {
    window.scrollTo({top: 13, left: 0, behavior: 'smooth'});
    const timer = setTimeout(() => {
      navigate('/disremedies',{state:{id:diseasename}});
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Navbar/>
      <div class="remedies-bg">
        <div>
          <h1>REMEDIES</h1>
        </div>
        <div>
          <p>Please wait,Your remedy is being cooked...</p>
        </div>
        <div className='remedies-imgdiv'>
          <img src={gifimage} alt="image" />
        </div>
      </div>
      <Footer />
    </div> 
  )
}
export default Remedies

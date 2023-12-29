import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import diseaseRemedies from "../../sources/RemediesList"
import './Remedies.css'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom';

function DisplayRemedies({ history }) {
  const [currentTip, setCurrentTip] = useState(null);

  const navigate = useNavigate();
  const location=useLocation();
  const diseasename=location.state.id;
  console.log(diseasename)
  const remedyArray= diseaseRemedies[diseasename];

  useEffect(() => {
    window.scrollTo({top: 60, left: 0, behavior: 'smooth'});
    getRandomTip();
    const handleBackButton = () => {
      history.push('/desc');
    };
    window.addEventListener('popstate', handleBackButton);
    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, [history]);

  const getRandomTip = () => {
    const randomIndex = Math.floor(Math.random() * remedyArray.length);
    setCurrentTip(remedyArray[randomIndex]);
  }

  const handleClick=()=>{
    navigate('/remedies',{state:{id:diseasename}});
  }

    return (
      <>
        <Navbar/>
        <div class="dremedies-bg">
          <div>
            <h1>REMEDIES</h1>
          </div>
          {currentTip && (      
          <div className='dremedies-box'>
            <div className='dremedies-h'>
              <h2>{currentTip.heading}</h2>
            </div>
            <div className='dremedies-b1'>
              <p>{currentTip.bodydesc}</p>
            </div>
            <div className="dremedies-row">
            <div className='dremedies-b2'>
              <h3>To Know More</h3>
                <ul>
                {currentTip.bodysrc.map((src, index) => (
                  <li key={index}>
                    <a href={src} target="_blank" rel="noopener noreferrer">
                    {src}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="dremedies-img">
              <img src={currentTip.imgurl} alt="" />
            </div>
          </div>
          </div>
          )}
          <div className='dremedies-btncontainer'>
            <button className='dremedies-btn' onClick={handleClick}>Cook Another</button>
          </div>
        </div>
        <Footer />
      </> 
    )
  }
  export default DisplayRemedies
  
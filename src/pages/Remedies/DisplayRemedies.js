import React, { useEffect } from 'react'
import { useState } from 'react'
import {Anxiety} from "../../sources/Remedies"
import './Remedies.css'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom';

function DisplayRemedies({ history }) {
  const [currentTip, setCurrentTip] = useState(null);

  const navigate = useNavigate();

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
    const randomIndex = Math.floor(Math.random() * Anxiety.length);
    setCurrentTip(Anxiety[randomIndex]);
  }

  const handleClick=()=>{
    navigate('/remedies');
  }

    return (
      <div>
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
          </div>
          )}
          <div className='dremedies-btncontainer'>
            <button className='dremedies-btn' onClick={handleClick}>Cook Another</button>
          </div>
        </div>
        <Footer />
      </div> 
    )
  }
  export default DisplayRemedies
  
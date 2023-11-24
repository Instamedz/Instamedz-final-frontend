import React from 'react'
import { useLocation } from 'react-router-dom';
import {useEffect} from 'react';
import './Questionnaire.css';
import DisplayQuestion from './DisplayQuestion';
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
  
function Quest() {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  const location=useLocation();
  const diseasename=location.state.id;

  return (
    <div>
      <Navbar/>
      <h2 className="quest-title">Take {diseasename} Screening Test </h2>
      <p className="quest-subtitle">This test is designed to help you assess your current emotional well-being and provide some insights into your mental health. Please answer the following questions honestly and to the best of your ability.</p>
      <div className='quest-boxborder'>
        <DisplayQuestion diseasename={diseasename} />
      </div>
      <Footer />
    </div>
  )
}
export default Quest
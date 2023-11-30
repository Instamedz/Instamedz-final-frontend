import React from 'react'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
import './Description.css'
import img5 from "../../assets/questionnaire/img5.png";
import descimg1 from "../../assets/questionnaire/descimg1.jpg"
import descimg2 from "../../assets/questionnaire/descimg2.jpg"
import descimg3 from "../../assets/questionnaire/descimg3.jpg"
import {diseaseList} from '../../sources/SoulCare';
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

function Description() {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  const navigate = useNavigate();
  const location=useLocation();
  const disease=location.state.id;
  const [diseasedetails] = useState(() =>{
    switch(disease) {
      case "Anxiety":
        return  diseaseList[0];
      case "Depression":
        return  diseaseList[1];
      case "PanicAttack":
        return  diseaseList[2];
      case "OCD":
        return  diseaseList[3];
      case "Phobia":
        return  diseaseList[4];
      case "Insomnia":
        return  diseaseList[5];
      case "Fatique":
        return  diseaseList[6];
      case "Autism":
        return  diseaseList[7];
      case "BipolarDisorder":
        return  diseaseList[8];
      case "Hallucination":
        return  diseaseList[9];
      default:
        return  diseaseList[0];
    }
  });
  const redirectpage = (flag) => {
    if(flag==='test') navigate('/quest',{state:{id:diseasedetails.name}});
    if(flag==='remedies') navigate('/remedies');
    if(flag==='doctor') navigate('/appointdoctor/soul');
  };

  return (
    <div>
      <Navbar/>
      <div className="desc-row desc-titlebg">
        <div className='desc-col-left desc-title'>
          <h2>{diseasedetails.name}</h2>
          <p>{diseasedetails.definition}</p>
        </div>
        <div>
          <img src={img5} alt="" className='desc-col-right desc-imgpos'/>
        </div>
      </div>
      <div className='desc-bg'>
        <div className='desc-box'>
          <div className='desc-types'>
            <h4>More About {diseasedetails.name}</h4>
            <ul className='pt-3'>
              {diseasedetails.types.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className='desc-symptoms'>
            <h4>Symptoms</h4>
            <p className='pt-2'>{diseasedetails.symptoms}</p>
          </div>
        </div>
        </div>
        <div className="desc-row desc-cardsection">
            <div class="desc-col desc-card" onClick={()=>redirectpage("test")}>
                <img src={descimg1} alt="" />
                <h3>Take Screening Test</h3>
                <p>Find possible health problems or diseases through test </p>
            </div>
            <div class="desc-col desc-card" onClick={()=>redirectpage("remedies")}>
                <img src={descimg2} alt="" />
                <h3>Get Remedies</h3>
                <p>Home remedies to get your health improved and feel better</p>
            </div>
            <div class="desc-col desc-card" onClick={()=>redirectpage("doctor")}>
                <img src={descimg3} alt="" />
                <h3>Connect with Doctor</h3>
                <p>Book an appointment with the doctor now</p>
            </div>
        </div>
      <Footer />
    </div>

  )
}

export default Description

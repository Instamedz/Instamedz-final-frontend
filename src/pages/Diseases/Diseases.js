import React from 'react'
import {useNavigate} from 'react-router-dom';
import './Diseases.css';
import diseaseList from "../../sources/DiseaseList"
import img1 from'../../assets/questionnaire/img1.png'
import img2 from'../../assets/questionnaire/img2.png'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

function Diseases() {
  const navigate = useNavigate();

  const redirectpage = (id) => {
    navigate('/desc',{state:{id:id.name}});
  };
  return (
    <div>
      <Navbar/>
      <div className="diseases-titlebg">
        <div className="diseases-row">
          <div className="diseases-col diseases-left">
            <img src={img1} alt="" className="diseases-imgpos" />
          </div>
          <div className="diseases-col diseases-middle">
            <h4 className="diseases-title">SOUL CARE</h4>
            <p className="diseases-subtitle">Get assistance on your mental health issues, including stress, anxiety, and depression, with our specialists</p>
          </div>
          <div className="diseases-col diseases-right">
          <img src={img2} alt="" className="diseases-imgpos" />
          </div>
        </div>
      </div>

        <div className="diseases-row">
            {diseaseList.map(function(disease) {
              return (
                <div className=" diseases-col diseases-cardbox">
                  <h1 className="diseases-cardtitle">{disease.name}</h1>
                  <p className='diseases-cardcontext'>{disease.description}</p> 
                  <button className="diseases-cardbtn" onClick={()=>redirectpage(disease)}>Know more</button>
                </div>
                
              )
            })}
          </div>
        <Footer />
      </div>
  )
}

export default Diseases

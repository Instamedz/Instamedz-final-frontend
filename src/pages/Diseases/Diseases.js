import React,{useEffect} from 'react'
import {useNavigate, useLocation} from 'react-router-dom';
import diseaseList from "../../sources/DiseaseList"
import titleCard from "../../sources/TitleCard"
import './Diseases.css';
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

function Diseases() {
  const navigate = useNavigate();

  const location=useLocation();
  const cardId=location.state.id;
  const Card=titleCard.find(card => card.id === cardId);
  const diseaseDetails=diseaseList[cardId];

  const redirectpage = (id) => {
    const idname=id.name;
    if(cardId==='soul') navigate('/desc',{state:{id:idname.split(" ")[0],care:cardId}});
    else navigate('/comingsoon')
  };
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div>
      <Navbar/>
      <div className="diseases-titlebg">
        <div className="diseases-row">
          <div className="diseases-col diseases-left">
            <img src={Card.img1} alt="" className="diseases-imgpos" />
          </div>
          <div className="diseases-col diseases-middle">
            <h4 className="diseases-title">{Card.title}</h4>
            <p className="diseases-subtitle">{Card.subtitle}</p>
          </div>
          <div className="diseases-col diseases-right">
          <img src={Card.img2} alt="" className="diseases-imgpos" />
          </div>
        </div>
      </div>
      <div className="diseases-heading">
      <h2>Choose a disease below to know about</h2>
      </div>
        <div>
            {diseaseDetails.map(function(disease) {
              return (
                <div className=" diseases-cardbox" onClick={()=>redirectpage(disease)}>
                  <h1 className="diseases-cardtitle">{disease.name}</h1>
                  <p className='diseases-cardcontext'>{disease.description}</p> 
                  <button className="diseases-cardbtn">Know more</button>
                </div>
              )
            })}
          </div>
        <Footer />
      </div>
  )
}

export default Diseases

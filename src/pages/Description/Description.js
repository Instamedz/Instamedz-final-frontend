import React,{useEffect} from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import './Description.css'
import descimg1 from "../../assets/questionnaire/descimg1.jpg"
import descimg2 from "../../assets/questionnaire/descimg2.jpg"
import descimg3 from "../../assets/questionnaire/descimg3.jpg"
import diseaseList from '../../sources/DiseaseList';
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import titleCard from '../../sources/TitleCard';

function Description() {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  const navigate = useNavigate();

  const location=useLocation();
  const {id,care}=location.state;
  const diseaseSet = diseaseList[care]
  const diseasedetails=diseaseSet.find(disease=> disease.name.split(" ")[0] === id);
  const disease=titleCard.find(card => card.id === care);

  const redirectpage = (flag) => {
    const idname=diseasedetails.name;
    if(flag==='test') navigate('/quest',{state:{id:diseasedetails.name}});
    if(flag==='remedies') navigate('/remedies',{state:{id:idname.split(" ")[0]}});
    if(flag==='doctor') navigate(`/appointdoctor/${care}`);
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
          <img src={disease.img3} alt="" className='desc-col-right desc-imgpos'/>
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
                <p>Take the first step towards wellbeing with our screening tests, a gateway to understanding and managing your health. </p>
            </div>
            <div class="desc-col desc-card" onClick={()=>redirectpage("remedies")}>
                <img src={descimg2} alt="" />
                <h3>Get Remedies</h3>
                <p>Empowering health through knowledge and care, our remedies are crafted with precision and accuracy to embrace the art of healing </p>
            </div>
            <div class="desc-col desc-card" onClick={()=>redirectpage("doctor")}>
                <img src={descimg3} alt="" />
                <h3>Connect with Doctor</h3>
                <p>Expert care for every ailment. Trust our dedicated doctors to guide you through the journey of healing and process of well-being.</p>
            </div>
        </div>
      <Footer />
    </div>

  )
}

export default Description

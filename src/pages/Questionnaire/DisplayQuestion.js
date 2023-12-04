import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './Questionnaire.css';
import {SoulCare} from '../../sources/SoulCare'
import {useEffect} from 'react';

function DisplayQuestion(props) {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  const navigate = useNavigate();
  const [questions] = useState(() =>{
      switch(props.diseasename) {
        case "Anxiety":
          return SoulCare[0];
        case "Depression":
          return SoulCare[1];
        case "PanicAttack":
          return SoulCare[2];
        case "OCD":
          return SoulCare[3];
        case "Phobia":
          return SoulCare[4];
        case "Insomnia":
          return SoulCare[5];
        case "Fatique":
          return SoulCare[6];
        case "Autism":
          return SoulCare[7];
        case "BipolarDisorder":
          return SoulCare[8];
        case "Hallucination":
          return SoulCare[9];
        default:
          return SoulCare[0];
      }
  });
  var flag=0;
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [answersText, setAnswersText] = useState(Array.from({ length: 6 }, () => ""));

  const handleAnswerSelect = (questionIndex, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleTextAnswerChange = (questionIndex, text) => {
    const newAnswersText = [...answersText];
    newAnswersText[questionIndex] = text;
    setAnswersText(newAnswersText);
  };

  const calculateScore = (isCorrect) => {   
    if(isCorrect){
      setScore(score+1);
    }
  };
  const isFormValid = () => {
    return cname.trim() !== '' && phone.trim() !== '' && email.trim() !== '' && answers.every(answer => answer !== null);
  };
  

    const disease=props.diseasename
    const [email,setemail]=useState("")
    const [cname,setCname]=useState("")
    const [phone,setPhone]=useState("")
    let feedback;
    const onsubmit=async()=>{

      if (isFormValid()) {
      if(score<questions.length/2){
        flag=1
        feedback="Remedies"
      }
      else feedback="Connect Doctor"

        const resultresp=await axios.post("https://sheetdb.io/api/v1/725wae185vaj2",{
             data:[{
                Name:cname,
                Email:email,
                Contact:phone,
                Feedback:feedback,
                Form_For:'soulcare / '+disease
            }]
        })
        if(resultresp){
          navigate('/result',{state:{id:flag}});
        }
        console.log(resultresp)
        setCname("")
        setPhone("")
        setemail("")
    }
    else {
      alert('Please fill in all fields and answer all questions before submitting.');
    }
  } 

  return (
    <div className="display-card">
      <div className='display-input'>
        <label for="name" >Name</label>
        <input required type="text" id="name" onChange={(e)=>setCname(e.target.value)}   value={cname}/>
      </div>
      <div className='display-input'>
      <label for="phone">Mobile</label>
      <input required type="tel" id="phone" onChange={(e)=>setPhone(e.target.value)}   value={phone} maxlength="10" pattern="[1-9]{1}[0-9]{9}"/>
      </div>
      <div className='display-input'>
      <label for="email">Email</label>
      <input required type="email" id="email" onChange={(e)=>setemail(e.target.value)}   value={email} aria-describedby="emailHelp"/>
      </div>
      <div className='display-input'>
        <label for="gender" >Gender
        <select>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="nonbinary">Non-Binary</option>
          <option value="prefernot">Prefer Not to Say</option>
        </select>
        </label>
      </div>

      {questions.map((question, index) => (
        <div key={index} className="display-question">
          <p>{question.text}</p>
          <ol>
            {question.options.map((option, optionIndex) => (
              <li key={optionIndex} className='display-list'>
              <label>
                {option.text === "Others" ? (
                  <>
                    <input
                      required
                      type="radio"
                      id={`radiobtn${optionIndex}`}
                      name={`question${index}`}
                      checked={answersText[index]}
                      onChange={() => handleAnswerSelect(index, optionIndex)}
                    />
                    &nbsp;
                    Others :
                    &nbsp;
                    <input
                      className='display-textfield'
                      type="text"
                      value={answersText[index] || ""}
                      onChange={(e) => handleTextAnswerChange(index, e.target.value)}
                      onClick={() => calculateScore(option.isCorrect)}
                    />
                  </>
                ) : (
                  <>
                    <input
                      required
                      type="radio"
                      id={`radiobtn${optionIndex}`}
                      name={`question${index}`}
                      checked={answers[index] === optionIndex}
                      onClick={() => calculateScore(option.isCorrect)}
                      onChange={() =>  handleAnswerSelect(index, optionIndex)}
                    />
                    &nbsp;
                    {option.text}
                  </>
                )}
              </label>
            </li>
            ))}
          </ol>
        </div>
      ))}
      <button onClick={onsubmit}  class="display-btn" id="callback">Submit</button>        
    </div>
    
    );
  }
  
  export default DisplayQuestion
import global from "./global";
import { Button,FormLabel, Checkbox,MenuItem, TextField,FormControlLabel,FormControl,FormGroup,FormHelperText} from '@material-ui/core';
import { useState } from "react";
import './question1.css';
import { useNavigate } from 'react-router-dom';

function Question2(){

const navigate = useNavigate();

const [state, setState] =useState({
    one: global.getQtn_2_ans()[0],
    two: global.getQtn_2_ans()[1],
    three: global.getQtn_2_ans()[2],
    four: global.getQtn_2_ans()[3]
  });
const { one, two, three,four } = state;

const handleSubmit = () => {
  const error = [one, two, three,four].filter((v) => v).length !== 2;
  if(!error){
    global.setQtn_2_ans(one,0);
    global.setQtn_2_ans(two,1);
    global.setQtn_2_ans(three,2);
    global.setQtn_2_ans(four,3);
    navigate("/question3");
  }
  else
    alert("Please select more than one answer");
};

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  

const question={"english":"name the  silver medal winners in olympic  2021.",
                "kannada":"ಒಲಿಂಪಿಕ್ 2021 ರಲ್ಲಿ ಬೆಳ್ಳಿ ಪದಕ ವಿಜೇತರನ್ನು ಹೆಸರಿಸಿ.",
                "hindi":"ओलंपिक 2021 में रजत पदक विजेताओं के नाम बताएं।"};

const options={"english":["neeraj chopra","ravikumar dayiya","mirabi chanu","PV sindhu"],
                "kannada":["ನೀರಜ್ ಚೋಪ್ರಾ","ರವಿಕುಮಾರ್ ದಯ್ಯ","ಮಿರಾಬಿ ಚಾನು","ಪಿವಿ ಸಿಂಧು"],
                  "hindi":["नीरज चोपड़ा","रविकुमार दयाया","मीराबी चानू","पीवी सिंधु"]};

 return (
    <div className="question">
      <h1>Question 2: </h1>

      <div className="singleQuestion">
        <div>
          <Button className="qtnnumber" 
          style={{ width: 20, borderRadius:'70px', overflow:'hidden',  padding: 0,
           background: global.getQtn_1_ans()===""?'#808080':'#990000', color:'white', fontSize:26}} variant="contained" onClick={()=>navigate("/question1")} >1</Button>&nbsp;
          <Button className="qtnnumber" 
          style={{ width: 20, borderRadius:'70px', overflow:'hidden',  padding: 0,
           background: JSON.stringify(global.getQtn_2_ans())==JSON.stringify([false,false,false,false])?'#808080':'#990000', color:'white', fontSize:26}} variant="contained" onClick={()=>navigate("/question2")} >2</Button>&nbsp;
          <Button className="qtnnumber" variant="contained" 
          style={{ width: 20, borderRadius:'70px', overflow:'hidden',  padding: 0,
           background: global.getQtn_3_ans()===""?'#808080':'#990000', color:'white', fontSize:26}} variant="contained" onClick={()=>navigate("/question3")} >3</Button>&nbsp;
          <Button className="qtnnumber" variant="contained" 
          style={{ width: 20, borderRadius:'70px', overflow:'hidden',  padding: 0,
           background: global.getQtn_4_ans()===""?'#808080':'#990000', color:'white', fontSize:26}} variant="contained" onClick={()=>navigate("/question4")} >4</Button>&nbsp;
          <Button className="qtnnumber" variant="contained" style={{ width: 20, borderRadius:'70px', overflow:'hidden',  padding: 0,
           background: global.getQtn_5_ans()===""?'#808080':'#990000', color:'white', fontSize:26}} variant="contained" onClick={()=>navigate("/question5")} >5</Button>
        </div>
        <h2>{question[global.getLanguage()]}</h2>
        


      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormGroup>
          <FormLabel component="legend">Please select more than one options</FormLabel>
          <FormControlLabel
            control={
              <Checkbox checked={global.getQtn_2_ans()[0]==false?one:true} onChange={handleChange} name="one" />
            }
            label={options[global.getLanguage()][0]}
          />
          <FormControlLabel
            control={
              <Checkbox checked={global.getQtn_2_ans()[1]==false?two:true} onChange={handleChange} name="two" />
            }
            label={options[global.getLanguage()][1]}
          />
          <FormControlLabel
            control={
              <Checkbox checked={global.getQtn_2_ans()[2]==false?three:true} onChange={handleChange} name="three" />
            }
            label={options[global.getLanguage()][2]}
          />
          <FormControlLabel
            control={
              <Checkbox checked={global.getQtn_2_ans()[3]==false?four:true} onChange={handleChange} name="four" />
            }
            label={options[global.getLanguage()][3]}
          />
        </FormGroup>
      </FormControl>


        <div className="controls">
        <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185, borderRadius:50,overflow:'hidden'}}
            onClick={()=>navigate("/question1")}
          >
            Prev
          </Button>&nbsp;&nbsp;
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185, borderRadius:50,overflow:'hidden'}}
            onClick={handleSubmit}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};


export default Question2;
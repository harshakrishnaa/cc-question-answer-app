import global from "./global";
import { Button, MenuItem, TextField,FormControlLabel,RadioGroup,FormControl,Radio } from '@material-ui/core';
import { useState } from "react";
import './question1.css';
import { useNavigate } from 'react-router-dom';

function Question1(){

const navigate = useNavigate();

const [value, setValue] = useState('');

const handleChange = (event, value) => {
    setValue(value);
    global.setQtn_1_ans(value);
  };

const question={"english":"With which sport is the 'Choudhury Trophy' associated?",
                "kannada":"ಚೌಧರಿ ಟ್ರೋಫಿ' ಯಾವ ಕ್ರೀಡೆಗೆ ಸಂಬಂಧಿಸಿದೆ?",
                "hindi":"चौधरी ट्रॉफी' किस खेल से संबंधित है?"};

const options={"english":["Golf","Circumnavigation of the earth by car","Formula One racing","Buggy-Jumping"],
                "kannada":["ಗಾಲ್ಫ್","ಕಾರಿನ ಮೂಲಕ ಭೂಮಿಯ ಪ್ರದಕ್ಷಿಣೆ","ಫಾರ್ಮುಲಾ ಒನ್ ರೇಸಿಂಗ್","ಬಂಗೀ-ಜಂಪಿಂಗ್"],
                  "hindi":["गोल्फ़"," कार द्वारा पृथ्वी की परिक्रमा","फॉर्मूला वन रेसिंग","छोटी गाड़ी कूदना"]};

 return (
    <div className="question">
      <h1>Question 1: </h1>

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
        
        <FormControl component="fieldset">
        <RadioGroup
            value={global.getQtn_1_ans()===""?value:global.getQtn_1_ans()}
            onChange={handleChange}
          >
            <FormControlLabel value="1" control={<Radio />} label={options[global.getLanguage()][0]} />
            <FormControlLabel value="2" control={<Radio />} label={options[global.getLanguage()][1]} />
            <FormControlLabel value="3" control={<Radio />} label={options[global.getLanguage()][2]} />
            <FormControlLabel value="4" control={<Radio />} label={options[global.getLanguage()][3]} />
          </RadioGroup>
          </FormControl>
        
        <div className="controls">
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185, borderRadius:50,overflow:'hidden'}}
            onClick={()=>navigate("/question2")}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};


export default Question1;
import global from "./global";
import { Button, MenuItem, TextField,FormControlLabel,RadioGroup,FormControl,Radio } from '@material-ui/core';
import { useState } from "react";
import './question1.css';
import { useNavigate } from 'react-router-dom';
// import Radio from '@mui/material/';

function Question5(){

const navigate = useNavigate();

const [value, setValue] = useState('');

const handleSubmit = () => {
  if(global.getQtn_1_ans()==="")
    navigate("/question1");
  else if(JSON.stringify(global.getQtn_2_ans())==JSON.stringify([false,false,false,false]))
    navigate("/question2");
  else if(global.getQtn_3_ans()==="")
    navigate("/question3");
  else if(global.getQtn_4_ans()==="")
    navigate("/question4");
  else if(global.getQtn_5_ans()==="")
    navigate("/question5");
  else
    navigate("/result");
};

const handleChange = (event, value) => {
    setValue(value);
    global.setQtn_5_ans(value);
  };



const question={"english":"Four independent ________ testified to seeing him at the scene of the crime",
                "kannada":"ನಾಲ್ಕು ಸ್ವತಂತ್ರ ________ ಅಪರಾಧದ ಸ್ಥಳದಲ್ಲಿ ಅವನನ್ನು ನೋಡಿದಕ್ಕೆ ಸಾಕ್ಷಿಯಾಗಿದೆ",
                "hindi":"चार स्वतंत्र ________ ने उसे अपराध स्थल पर देखने की गवाही दी"};

const options={"english":["person","witnesses","spectator","attestant"],
                "kannada":["ವ್ಯಕ್ತಿ","ಸಾಕ್ಷಿಗಳು","ಪ್ರೇಕ್ಷಕ","ದೃಢೀಕರಿಸಿದ"],
                  "hindi":["व्यक्ति","गवाह","दर्शक","प्रमाणक"]};

 return (
    <div className="question">
      <h1>Question 5: </h1>

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
          <Button className="qtnnumber" variant="contained" 
          style={{ width: 20, borderRadius:'70px', overflow:'hidden',  padding: 0,
           background: global.getQtn_5_ans()===""?'#808080':'#990000', color:'white', fontSize:26}} variant="contained" onClick={()=>navigate("/question5")} >5</Button>
        </div>
        <h2>{question[global.getLanguage()]}</h2>


        <FormControl component="fieldset">
        <RadioGroup
            aria-label="Gender"
            name="gender1"
            value={global.getQtn_5_ans()===""?value:global.getQtn_5_ans()}
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
            onClick={()=>navigate("/question4")}
          >
            Prev
          </Button>&nbsp;&nbsp;
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185, borderRadius:50,overflow:'hidden'}}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};


export default Question5;
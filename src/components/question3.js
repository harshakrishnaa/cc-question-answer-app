import global from "./global";
import { Button, MenuItem, TextField,FormControlLabel,RadioGroup,FormControl,Radio } from '@material-ui/core';
import { useState } from "react";
import './question1.css';
import { useNavigate } from 'react-router-dom';

function Question3(){



const navigate = useNavigate();
const [value, setValue] = useState('');

const handleChange = (event, value) => {
    setValue(value);
    global.setQtn_3_ans(value);
  };

const question={"english":"Is first ODI (Cricket) in India was played in Ahemadabad.",
                "kannada":"ಭಾರತದಲ್ಲಿ ಮೊದಲ ODI (ಕ್ರಿಕೆಟ್) ಅಹಮದಾಬಾದ್ನಲಿ ನಡೆಯಿತು",
                "hindi":"भारत में पहला वनडे (क्रिकेट) अहमदाबाद में खेला गया था।"};

 return (
    <div className="question">
      <h1>Question 3: </h1>

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
            value={global.getQtn_3_ans()===""?value:global.getQtn_3_ans()}
            onChange={handleChange}
          >
            <FormControlLabel value="1" control={<Radio />} label="True" />
            <FormControlLabel value="2" control={<Radio />} label="False" />
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
            Prev
          </Button>&nbsp;&nbsp;
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185, borderRadius:50,overflow:'hidden'}}
            onClick={()=>navigate("/question4")}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};


export default Question3;
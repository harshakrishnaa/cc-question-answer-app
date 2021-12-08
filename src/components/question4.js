import global from "./global";
import { Button, MenuItem,Radio, TextField,FormControlLabel,RadioGroup,FormControl,Box,Grid } from '@material-ui/core';
import { useState } from "react";
import './question1.css';
import { useNavigate } from 'react-router-dom';

function Question4(){


const navigate = useNavigate();

const [value, setValue] = useState('');

const handleChange = (event, value) => {
    setValue(value);
    global.setQtn_4_ans(value);
  };


const question={"english":"Match the Trophies and Cup associated with each Sport:",
                "kannada":"ಪ್ರತಿ ಕ್ರೀಡೆಗೆ ಸಂಬಂಧಿಸಿದ ಟ್ರೋಫಿಗಳು ಮತ್ತು ಕಪ್ ಅನ್ನು ಹೊಂದಿಸಿ:",
                "hindi":"प्रत्येक खेल से जुड़ी ट्राफियां और कप का मिलान करें:"};
const optionsA={"english":["Badminton","Hockey","Table Te is","Football"],
                "kannada":["ಬ್ಯಾಡ್ಮಿಂಟನ್","ಹಾಕಿ","ಟೇಬಲ್ ಟೆ ಆಗಿದೆ","ಫುಟ್ಬಾಲ್"],
                  "hindi":[" बैडमिंटन","हॉकी","टेबल टी है","फुटबॉल"]};
const optionsB={"english":["Durand Cup","Bama Belleck Cup","Rangaswamy Cup"," BWF World Championships"],
                "kannada":["ಡುರಾಂಡ್ ಕಪ್","ಬಾಮಾ ಬೆಲ್ಲೆಕ್ ಕಪ್","ರಂಗಸ್ವಾಮಿ ಕಪ್","BWF ವಿಶ್ವ ಚಾಂಪಿಯನ್ಶಿಪ್ಗಳು"],
                  "hindi":["डूरंड कप","बामा बेलेक कप","रंगास्वामी कप","बीडब्ल्यूएफ विश्व चैंपियनशिप"]};

const options={"english":["1-d, 2-c. 3-b, 4-a","1-c. 2-b, 3-d, 4-a","1-d, 2-b, 3-c. 4-a","1-b. 2-c. 3-d, 4-a"],
                "kannada":["1-d, 2-c. 3-b, 4-a","1-c. 2-b, 3-d, 4-a","1-d, 2-b, 3-c. 4-a","1-b. 2-c. 3-d, 4-a"],
                  "hindi":["1-डी, 2-सी। 3-बी, 4-ए","1-सी। 2-बी, 3-डी, 4-ए","1-डी, 2-बी, 3-सी। 4-एक","1-बी. 2-सी. 3-डी, 4-ए"]};

 return (
    <div className="question">
      <h1>Question 4: </h1>

      <div className="singleQuestion">
        <div>
          <Button className="qtnnumber" 
          style={{ width: 20, borderRadius:'70px', overflow:'hidden',  padding: 0,
           background:global.getQtn_1_ans()===""?'#808080':'#990000', color:'white', fontSize:26}} variant="contained" onClick={()=>navigate("/question1")} >1</Button>&nbsp;
          <Button className="qtnnumber" 
          style={{ width: 20, borderRadius:'70px', overflow:'hidden',  padding: 0,
           background: JSON.stringify(global.getQtn_2_ans())==JSON.stringify([false,false,false,false])?'#808080':'#990000', color:'white', fontSize:26}} variant="contained" onClick={()=>navigate("/question2")} >2</Button>&nbsp;
          <Button className="qtnnumber" variant="contained" 
          style={{ width: 20, borderRadius:'70px', overflow:'hidden',  padding: 0,
           background:global.getQtn_3_ans()===""?'#808080':'#990000', color:'white', fontSize:26}} variant="contained" onClick={()=>navigate("/question3")} >3</Button>&nbsp;
          <Button className="qtnnumber" variant="contained" 
          style={{ width: 20, borderRadius:'70px', overflow:'hidden',  padding: 0,
           background: global.getQtn_4_ans()===""?'#808080':'#990000', color:'white', fontSize:26}} variant="contained" onClick={()=>navigate("/question4")} >4</Button>&nbsp;
          <Button className="qtnnumber" variant="contained" 
          style={{ width: 20, borderRadius:'70px', overflow:'hidden',  padding: 0,
           background: global.getQtn_5_ans()===""?'#808080':'#990000', color:'white', fontSize:26}} variant="contained" onClick={()=>navigate("/question5")} >5</Button>
        </div>
        <h2>{question[global.getLanguage()]}</h2>
        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
             <Grid item xs={3}></Grid>
            <Grid item xs={3}>
              <p>1) {optionsA[global.getLanguage()][0]}</p>
              <p>2) {optionsA[global.getLanguage()][1]}</p>
              <p>3) {optionsA[global.getLanguage()][2]}</p>
              <p>4) {optionsA[global.getLanguage()][3]}</p>
            </Grid>
            <Grid item xs={3}>
              <p>a) {optionsB[global.getLanguage()][0]}</p>
              <p>b) {optionsB[global.getLanguage()][1]}</p>
              <p>c) {optionsB[global.getLanguage()][2]}</p>
              <p>d) {optionsB[global.getLanguage()][3]}</p>
            </Grid>
             <Grid item xs={3}></Grid>
          </Grid>
        </Box>
        <FormControl component="fieldset">
        <RadioGroup
            value={global.getQtn_4_ans()===""?value:global.getQtn_4_ans()}
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
            onClick={()=>navigate("/question3")}
          >
            Prev
          </Button>&nbsp;&nbsp;
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185, borderRadius:50,overflow:'hidden'}}
            onClick={()=>navigate("/question5")}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};


export default Question4;
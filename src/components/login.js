import global from "./global";
import Child from "./child";
import './login.css';
import { Button, MenuItem, TextField } from '@material-ui/core';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


function Login(){
	
  const navigate = useNavigate();

  const [full_name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [language, setLanguage] = useState('');
  
  const handleSubmit = () => {
  global.setName(full_name);
  global.setGender(gender);
  global.setAge(age);
  global.setLanguage(language);
  navigate("/question1");
  };

  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}>Entrance Exam</span>
        <div className="settings__select">
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Name"
            variant="outlined"
            value={full_name}
            onChange={e => setName(e.target.value)}
          />
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter your Age"
            value={age}
            variant="outlined"
            onChange={e => setAge(e.target.value)}
          >
          </TextField>
          <TextField
            select
            label="Select Gender"
            value={gender}
            variant="outlined"
            style={{ marginBottom: 30 }}
            onChange={e => setGender(e.target.value)}
          >
            <MenuItem key="male" value="male">
              male
            </MenuItem>
            <MenuItem key="female" value="female">
              female
            </MenuItem>
          </TextField>

          <TextField
            select
            label="Select Language"
            value={language}
            variant="outlined"
            style={{ marginBottom: 30 }}
            onChange={e => setLanguage(e.target.value)}
          >
            <MenuItem key="kannada" value="kannada">
              Kannada
            </MenuItem>
            <MenuItem key="english" value="english">
              English
            </MenuItem>
            <MenuItem key="hindi" value="hindi">
              Hindi
            </MenuItem>
          </TextField>

          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
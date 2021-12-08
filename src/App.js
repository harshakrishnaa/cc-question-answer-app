import './App.css';
import Child from "./components/child";
import Global from "./components/global";
import Login from './components/login';
import Question1 from "./components/question1";
import Question2 from "./components/question2";
import Question3 from "./components/question3";
import Question4 from "./components/question4";
import Question5 from "./components/question5";
import Result from "./components/result";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
     <BrowserRouter>
        <Routes>
          <Route path="/" caseSensitive={false} element={<Login />} />
          <Route path="/child" caseSensitive={false} element={<Child />} />
          <Route path="/question1" caseSensitive={false} element={<Question1 />} />
          <Route path="/question2" caseSensitive={false} element={<Question2 />} />
          <Route path="/question3" caseSensitive={false} element={<Question3 />} />
          <Route path="/question4" caseSensitive={false} element={<Question4 />} />
          <Route path="/question5" caseSensitive={false} element={<Question5 />} />
          <Route path="/result" caseSensitive={false} element={<Result />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
import global from "./global";
import { PieChart } from 'react-minimal-pie-chart';
import React from "react";
import Paper from '@material-ui/core/Paper';
import './login.css';
  
function Result(){
  var count=0;
  const def_ans=[];

  if(global.getQtn_1_ans()==="2")
      count++;
   if(JSON.stringify(global.getQtn_2_ans())==JSON.stringify([false,true,true,false]))
      count++;
    if(global.getQtn_3_ans()==="1")
      count++;
    if(global.getQtn_4_ans()==="1")
      count++;
   if(global.getQtn_5_ans()==="2")
     count++;
   
const percentage=(count/5)*100;

return (
  <div className="content">
      <div className="settings">
      <p>{global.getName()}</p>
      <h1>Result</h1>
      <h3>Total percentage: {percentage}%</h3>
    <PieChart style={{width:'70%', height:'70%'}}
  data={[
    { title: 'True', value: count, color: '#00FF00' },
    { title: 'False', value: 5-count, color: '#FF0000' },
  ]}
/>
</div>
</div>
);
}
  
export default Result;
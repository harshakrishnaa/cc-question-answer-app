import global from "./global";
function child(){
console.log(global.getName());

 return (
   <h1> child fuction</h1>
  );
}

export default child;
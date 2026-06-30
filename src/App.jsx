

import './App.css';

function App() {
 let name ="Payal";
 let num1=10;
 let num2=20;
 let num3=121;
 let count=0;
 let temp=num3;
 while(num3>0){
  count++;
  num3=Math.floor(num3/10);
 }


  return (
    <>
    <h1>welcome...!{name}</h1>
    <h1>Addition :{num1+num2}</h1>
    <h1>Substraction :{num1-num2}</h1>
    <h1>multiplication :{num1*num2}</h1>
    <h1>divide :{num1/num2}</h1>
    <h1>remainder:{num1%num2}</h1>
    <h1>digit:{temp},count:{count}</h1>
    
    </>
  );
}

export default App;

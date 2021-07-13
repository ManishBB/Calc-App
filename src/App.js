import './App.css';
import { useState } from 'react';
/*eslint-disable no-eval */

function App() {
  let [oldExpression, setOldExpression] = useState("")
  let [expression, setExpression] = useState("");

  let numerics = new Set(".np 0123456789");
  let operators = new Set("+-*/");

  let buttons = ["(",")","%","AC","7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+"];

  let evaluationExpression = function(){
      let evaluate = eval(expression);
      setOldExpression(expression);
      setExpression(String(evaluate));
  }

  let handleKeyUp = function(event){
    console.log(event.key);
    if(event.key === "Backspace"){
      setExpression(expression.slice(0,-1));
    }else if(numerics.has(event.key) || operators.has(event.key)){
      setExpression(expression + event.key);
    }else if(event.key === "Enter"){
      evaluationExpression();
    }
  }
  
  return (
    <div className="App" tabIndex={0} onKeyUp= {handleKeyUp} style={{
      width : "100vw",
      height : "100vh",
      background : "#999999",
      display : "flex",
      flexDirection : "column",
      justifyContent : "center",
      alignItems : "center"
    }}>

      <div style={{
        width : "400px",
        height : "130px",
        background : "#ffffff",
        display : "flex",
        flexDirection : "column",
        alignItems : "flex-end",
        justifyContent : "center",
        padding : "20px",
        borderRadius : "10px"
      }}>

        <h6>{oldExpression}</h6>
        <h1>{expression}</h1>

      </div>

      <div style={{
        width : "400px",
        height : "auto",
        margin : "20px",
        background : "#ffffff",
        display : "flex",
        flexDirection : "row",
        alignItems : "flex-end",
        justifyContent : "center",
        padding : "20px",
        borderRadius : "10px",
        flexWrap : "wrap"
      }}>

      {buttons.map(function (buttonValue, idx){
        return <button style={{
          width : "90px",
          margin : "5px"
        }} onClick={function(){
          if(buttonValue === "="){
            evaluationExpression();
          }else if(buttonValue === "AC"){
            if(expression.length >=1){
              setExpression(expression.slice(0, -1));
            }
          }else{
            setExpression(expression + buttonValue);
          }
        }}>
      {buttonValue}</button>
      })}

      </div>
      
    </div>
  );
}

export default App;

import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("78");  
  let onButtonClick=(buttonText)=>{
    if(buttonText==="C"){
setCalVal("");
    }
    else if(buttonText==="="){
setCalVal(eval(calVal));
    }
    else{
      let newdisplayValue=calVal+buttonText;
      setCalVal(newdisplayValue);
    }
    

  }
  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal} ></Display>
      <ButtonsContainer onButtonClick={(onButtonClick)}></ButtonsContainer>
    </div>
  );
}

export default App;

import "./App.css";
import { useState } from "react";

function App() {
  const [txt,setText]=useState(null)
  const [show,setShow]=useState(null)
  const [result,setResult]=useState(true)

  function paliDrom(txt){
    setShow(txt)
    let start=0;
      let end=txt.length-1;
      while(end>start){
        if(txt[start]!==txt[end]){
          setResult(false)
        }
        else if(txt[start]===txt[end]){
          setResult(true)
        }
        start++;
        end--;
      }
    }
  return (
    <div className="App">
      <div id="fullDiv">

      <h1 id="h1">Palindrome</h1>
    <div className="inpt">
      <input placeholder="Type Text Here" onChange={((e)=>{setText(e.target.value)})}/>
    </div>
    
    { txt?.length>0?
    <div style={{marginTop:35}}>
    <button onClick={()=>{paliDrom(txt)}}>Click</button>
    </div>:''
    }
    <div>
     
        {
          show?.length>0 &&txt?.length>0?
        result===true?<div style={{color:'green',fontSize:'24px'}}>{show+' '+'is a Palidrome'}</div>:<div style={{color:'red'}}>{show+' '+"is not a palidrome"}</div>:<div style={{color:"orange"}}>Enter Some Values </div>
        }
    </div>
    </div>
    </div>

  );
}

export default App;

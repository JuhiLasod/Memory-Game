import './App.css';
import React,{useEffect, useState} from 'react';
function App() {
      const [showText1,setShowText1]=useState(null);
      const [showText2,setShowText2]=useState(null);
      const [count,setCount]=useState(16);
      const [randomNo,setRandomNo]=useState([]);
      const [matchedInd,setMatchedInd]=useState([]);
      const blocks=Array.from({length : count} ,(_,i) => i);
      const generateRandomNo=(count)=>{

        const nums=new Array(count).fill(null);
        const usedIndices=new Set();
        for(let k=0;k<count/2;k++)
        {
        const sharedNo=Math.floor(Math.random()*10);
        let firstInd;
        do{
         firstInd=Math.floor(Math.random()*count);
        }while(usedIndices.has(firstInd));
        usedIndices.add(firstInd);

        let secInd;
        do{
           secInd=Math.floor(Math.random()*count);
        }while(firstInd===secInd || usedIndices.has(secInd));
        usedIndices.add(secInd);

        nums[firstInd]=sharedNo;
        nums[secInd]=sharedNo;
        }
        setRandomNo(nums);
      };
      useEffect(()=>{
        if(count){
        generateRandomNo(count);
        setShowText1(null);
        setShowText2(null);
        }
      },[count]
    );
      const handleChange=(e)=>{
        const newValue = Number(e.target.value);
    if (!isNaN(newValue)) {
      setCount(newValue);}
      };
      const handleClick=(i)=>{
        if(showText1===null)
        {
          setShowText1(i);
        }
        else if(showText2===null && showText1!==i)
        {
          setShowText2(i);
          
          if(randomNo[showText1]===randomNo[i])
          {
            setMatchedInd((prev)=>[...prev,showText1,i]);
          }
          setTimeout(()=>{
            setShowText1(null);
            setShowText2(null);},1000);
          } 
      };
      
      const handleRandNo=(i)=>{
        return randomNo[i];
      };
      const handleReset=()=>{
        setCount(16);
        setMatchedInd(new Array(count).fill(null));
        generateRandomNo(count);
      }
  return (
      
    <div>
      <h2>{count} Blocks</h2>
      <button onClick={handleReset}>reset</button>
      <div> <input type="text" value={count} onChange={handleChange}></input></div>
      

      <div className="div1"> 
        {blocks.map((i) => (
          <button className='btns'
            key={i}
            onClick={()=>handleClick(i)}
          >
            {(showText1===i || showText2===i || matchedInd.includes(i) ) && (<p>{handleRandNo(i)}</p>)}
           
          </button>
        ))}
      </div>
      
    </div>
  );
}

export default App;

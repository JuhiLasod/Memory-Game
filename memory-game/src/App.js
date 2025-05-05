import './App.css';
import React,{useState} from 'react';
function App() {
      const [showText1,setShowText1]=useState(null);
      const [showText2,setShowText2]=useState(null);
      // const k=0;
      const [count,setCount]=useState(16);
      const [openBtn,setOpenBtn]=useState(true);
      const blocks=Array.from({length : count} ,(_,i) => i);
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
        else if(showText2===null && showText1!=i)
        {
          setShowText2(i);
          setTimeout(()=>{setShowText1(null);
          setShowText2(null);},1000);
        }
        else if(showText1!=null && showText2!=null)
        {
          
          
        }
        // setOpenBtn(!openBtn);
      //   if(openBtn){
      //   setShowText(i);
      //   }
      // else{
      //   setShowText(null);
      // }
      };
  return (
      
    <div>
      <h2>{count} Blocks</h2>
      <button onClick={() => setCount(16)}>reset</button>
      <div> <input type="text" value={count} onChange={handleChange}></input></div>
      

      <div className="div1"> 
        {blocks.map((i) => (
          <button className='btns'
            key={i}
            onClick={()=>handleClick(i)}
          >
            {(showText1===i || showText2===i) && (<p>{i+1}</p>)}
           
          </button>
        ))}
      </div>
      
    </div>
  );
}

export default App;

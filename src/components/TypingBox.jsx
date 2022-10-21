
import { useRef ,useEffect,useState,createRef } from 'react';
import UpperMenu from './UpperMenu';

const TypingBox = ({words}) => {

    const[currWordIndex,setCurrWordIndex]=useState(0);
    const[currCharIndex,setCurrCharIndex]=useState(0);
    const [countDown,setCountDown]=useState(15);
    const[testStart, setTestStart]=useState(false);
    const[testOver,setTestOver]=useState(false);

    const wordSpanRef = Array(words.length).fill(0).map(i=>createRef());
    //console.log(wordSpanRef);

    //console.log(words);

    const textInputRef = useRef(null);
    //console.log(textInputRef);

    const startTimer=()=>{
            const intervalId = setInterval(timer,1000);

            function timer(){
    
                setCountDown((prevCountDown)=>{

                    if(prevCountDown===1){
                        clearInterval(intervalId);
                        setCountDown(0);
                        setTestOver(true);
                    }
                    else{ return prevCountDown-1;
                    }
                   
                });
            }
    }

    const handleKeyDown =(e)=>{
       // console.log('down',e);

       if(!testStart){
        startTimer();
        setTestStart(true);
       }

       let allSpans = wordSpanRef[currWordIndex].current.querySelectorAll('span');

       if(e.keyCode===32){

        if(allSpans.length<=currCharIndex){
            allSpans[currCharIndex-1].className= allSpans[currCharIndex-1].className.replace("right","");
        }else{
            allSpans[currCharIndex].className= allSpans[currCharIndex-1].className.replace("current","");
        }

        wordSpanRef[currWordIndex+1].current.querySelectorAll('span')[0].className = 'char current';
        setCurrWordIndex(currWordIndex+1);
        setCurrCharIndex(0);
        return;
    }

    if(e.keyCode===8){

        if(currCharIndex!==0){

            if(currCharIndex===allSpans.length){
                if(allSpans[currCharIndex-1].className.includes("extra")){
                    allSpans[currCharIndex-1].remove();
                    allSpans[currCharIndex-2].className+='right';
                }
             else {
                allSpans[currCharIndex-1].className = 'char current';
            }
            setCurrCharIndex(currCharIndex-1);
            return;
            }
        wordSpanRef[currWordIndex].current.querySelectorAll('span')[currCharIndex].className = "char ";
        wordSpanRef[currWordIndex].current.querySelectorAll('span')[currCharIndex-1].className = "char current";
        setCurrCharIndex(currCharIndex-1);
    }
    return;
}

if(currCharIndex===allSpans.length){
    let newSpan = document.createElement('span');
    newSpan.innerText =e.key;
    newSpan.className = 'char incorrect right extra';
    allSpans[currCharIndex-1].className= allSpans[currCharIndex-1].className.replace("right","");
    
    wordSpanRef[currWordIndex].current.append(newSpan);
    setCurrCharIndex(currCharIndex+1);
    return;
}

if(e.key.length !==1){
    return;
}



        let key = e.key;
        console.log("key pressed-",key);

        console.log("current charcter",wordSpanRef[currWordIndex].current.querySelectorAll('span')[currCharIndex].innerText);
        
        let currentCharacter = wordSpanRef[currWordIndex].current.querySelectorAll('span')[currCharIndex].innerText;
        
        if(key===currentCharacter){
            console.log("currect")
            wordSpanRef[currWordIndex].current.querySelectorAll('span')[currCharIndex].className ="char correct";
            
        }else{
            console.log("wrong");
            wordSpanRef[currWordIndex].current.querySelectorAll('span')[currCharIndex].className = "char incorrect";
        }
        if(currCharIndex+1 === wordSpanRef[currWordIndex].current.querySelectorAll('span').length ){
        wordSpanRef[currWordIndex].current.querySelectorAll('span')[currCharIndex].className += 'right';
        }
        else{
            wordSpanRef[currWordIndex].current.querySelectorAll('span')[currCharIndex+1].className = "char current";
        }
        setCurrCharIndex(currCharIndex+1);

        wordSpanRef[currWordIndex].current.querySelectorAll('span')[currCharIndex+1].className = "char current";
        setCurrCharIndex(currCharIndex+1);

       
    }    

    const handleKeyUp =(e)=>{
        //console.log('Up',e);

     

        }

    const focusInput=()=>{
        textInputRef.current.focus();
    }    

    useEffect(()=>{

        focusInput();
        wordSpanRef[0].current.querySelectorAll('span')[currCharIndex].className = "char current";
        
    },[])


    return (
        <>
    <UpperMenu countDown={countDown}/>

    {!testOver ? (<div className="type-box" onClick={focusInput}>
            <div className="words">

                {words.map((word,index)=>(
                    <span className='word' ref={wordSpanRef[index]}>
                        {word.split("").map((char,ind)=>(
                             <span className="char">
                                {char}
                            </span>
                        ))}
                     
                     </span>
                ))}
                
            </div>
        </div>):( <h1>GameOver</h1>) }
        
        <input
        type='text'
        className='hidden-input'
        ref={textInputRef}
        onKeyDown={(e)=>handleKeyDown(e)}
        onKeyUp={(e)=>handleKeyUp(e)}
        />
    
    </>
  )
};

export default TypingBox;
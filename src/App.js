
import './App.css';
import { GlobalStyle } from './styles/global';
import TypingBox from './components/TypingBox';
var randomWords = require('random-words');

function App() {

  const words = randomWords(50);

  return (
    <>
    <div className="canvas">
      <GlobalStyle/>
      <h1 className='heading' style={{"text-align":"center","color":"yellow"}}>Typing Game </h1>
      <TypingBox words={words}/>
      <h1 style={{"text-align":"center"}}>Footer</h1>
      
    </div>
    </>
  );
}

export default App;

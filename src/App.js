import { useState } from 'react';
import './App.css';

function App() {
  const [selected, setSelected] = useState(null)

  const toggle = (i) =>{
    if(selected === i){
      return setSelected(null)
    }

    setSelected(i)
  }

  return (
    
    <div className="wrapper">
      
     <div className='accordion'>

        {data.map((item, i) => (
          <div className='item'>
            <div className='title' onClick={() => toggle(i)}> 
              <h2>{item.question}</h2>
              <span>{selected === i ? '-' : '+'}</span>
            </div>
            <div className={selected === i ? 'content show' : 'content'}>{item.answer}</div>
          </div>
          
          ))}
     </div>

    </div>
  );
}

const data = [
  {
    question: 'Question 1',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    
  },
  {
    question: 'Question 2',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    
  },
  {
    question: 'Question 3',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    
  },
  {
    question: 'Question 4',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    
  },
  {
    question: 'Question 5',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    
  }

]

export default App;

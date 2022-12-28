import React from 'react';
import './App.css';
import Telephones from './components/Telephones/Telephones';
import InputInfo from './components/InputInfo/InputInfo';
import { useState } from 'react';
import Used from './components/Used/Used';

function App() {
  
  const [named, setNamed] = useState('bfsjh')
  const [phone, setPhone] = useState('jsdbfj')
  const [date, setDate] = useState('sjdf')




  return (
    <div className="App">
      <div className='components'>
          <div>
            <InputInfo 
            named={named}
            phone={phone}
            date={date}
            setNamed={setNamed}
            setPhone={setPhone}
            setDate={setDate}
          />
          </div>
          <Telephones
          named={named}
          phone={phone}
          date={date}
          setNamed={setNamed}
          setPhone={setPhone}
          setDate={setDate}
          />
        </div>
    </div>
  );
}

export default App;
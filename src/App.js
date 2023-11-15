import { useState } from 'react';
import './App.css';
import InputForm from './components/InputForm';
import List from './components/List';

function App() {
  const [items, setItems] = useState([]); // 지출 항목들
  const [id, setId] = useState(''); // 지출 항목 아이디
  const [name, setName] = useState(''); // 지출 항목 이름
  const [cost, setCost] = useState(0); // 지출 항목 비용

  const [notice, setNotice] = useState({}); // 알림 메세지
  const [mode, setMode] = useState(true); // 메인 모드|수정 모드 토글

  return (
    <div className='root-container'>
      <div className='notice-bar' id={notice.color}>{notice.string}</div>
      <h1>예산 계산기</h1>

      <div className='calc-container'> 

        <InputForm 
          items = {items}
          setItems = {setItems} 
          setNotice = {setNotice}
          id = {id}
          name = {name} 
          setName = {setName}
          cost = {cost} 
          setCost = {setCost}
          mode = {mode}
          setMode= {setMode}
        />

        <List 
          items={items}
          setItems={setItems}
          setMode={setMode} 
          setId={setId} 
          setName={setName}
          setCost={setCost} 
          setNotice={setNotice}
        />

      </div>
      
      <h2>
        총지출:{items.reduce((acc,cur) => {
          return acc+cur.cost;
        },0)}원
      </h2>

    </div>
  );
}

export default App;

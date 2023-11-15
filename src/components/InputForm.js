import React from 'react'

export default function InputForm({items, setItems, setNotice, id, name, setName, cost, setCost, mode, setMode}) {

    // 항목이름 & 비용 변화 이벤트함수
  const nameChange = (e) => {
    setName(e.target.value);
  }
  const costChange = (e) => {
    setCost(e.target.value);
  }

    // 제출버튼 이벤트 함수
  const handleSubmit = (e) => {
    e.preventDefault();

    let newItem = {
      id: Date.now(),
      name: name,
      cost: parseInt(cost),
    }

    setItems(prev => [...prev, newItem]);
    setName('')
    setCost(0)
    setNotice({ string:'아이템이 생성되었습니다.', color: 'green' })
  }

  // 수정 폼 Submit 이벤트 함수
  const editSubmit = (e) => {
    e.preventDefault();

    let newItems = items.map(item => {
      if(item.id === id) {
        item.name = name;
        item.cost = parseInt(cost);
      }
      return item;
    })

    setItems(newItems);
    setName('');
    setCost(0);
    setNotice({ string:'아이템이 수정되었습니다.', color: 'green' });
    setMode(true);
  }

  return (
    <div>
        { mode ?  
          <form className='main-form' onSubmit={handleSubmit}>
            <span>지출 항목</span>
            <span>비용</span>
            <input
              type='text'
              value={name}
              placeholder='예) 렌트비'
              onChange={nameChange}
            />
            <input
              type='text'
              value={cost}
              onChange={costChange}
            />
          <button className='submit-btn' type='submit'>제출</button>
          </form> 
          : 
          <form className='edit-form' onSubmit={editSubmit}>
            <span>지출 항목</span>
            <span>비용</span>
            <input
              type='text'
              value={name}
              placeholder='예) 렌트비'
              onChange={nameChange}
            />
            <input
              type='text'
              value={cost}
              onChange={costChange}
            />
            <button className='submit-btn' type='submit'>수정</button>
          </form>
        }
    </div>
  )
}

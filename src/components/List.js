import React from 'react'

export default function List({items, setItems, setMode, setId, setName, setCost, setNotice}) {

  // 수정
  const editItem = (item) => {
    setMode(false); // 수정 모드로 변경
    setId(item.id);
    setName(item.name);
    setCost(item.cost);
  }

  // 삭제
  const deleteItem = (id) => {
    let newItems = items.filter(item => item.id !== id);
    
    setItems(newItems);
    setNotice({ string:'아이템이 삭제되었습니다.', color: 'red' })
  }

  // 목록지우기 버튼 이벤트 함수
  const deleteAll = () => {
    setMode(true) // 메인 모드로 변경
    setItems([]);
    setName('');
    setCost(0);
    setNotice({});
  }

  // 버튼 스타일
  const btnSytle = {
    float:"right", 
    border:"none", 
    borderRadius:"3px",
    marginRight:"5px",
    color:"white",
    backgroundColor:"purple",
  }

  return (
    <div className='list'>
        {items.map((item) => (
            <div style={{ position:"relative", marginBottom:"5px" }} className='item' key={item.id}>
                <span style={{ color:"black" }} >{item.name}</span>
                <span style={{ width:"290px", position:"absolute", right: "10px", color: "gray" }}>{item.cost}</span>
                <button style={btnSytle} onClick={() => deleteItem(item.id)}>삭제</button>
                <button style={btnSytle} onClick={() => editItem(item)}>수정</button>
            </div>
        ))}
        <button className='clear-btn' onClick={deleteAll}>목록 지우기</button>
    </div>
  )
}

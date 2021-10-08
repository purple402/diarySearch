import React, { useState, useEffect } from 'react';
import './Category.css';

function Category(props) {
  const [selectedKeyword, setKeyword] = useState([]);
  
  // 클릭 이벤트 처리 함수
  function handleClick(e) {
    const id = e.target.id;
    const checked = e.target.checked;
    if(checked) {
      // 체크된 경우
      setKeyword(prevList => [...prevList, id]);
    } else {
      // 해제한 경우
      setKeyword(selectedKeyword.filter(keyword => keyword !== id));
    }
  }
  // 리스트 구성하기
  const lists = [];
  // 리스트 구성하기
  let i = 0;
  while(i < props.data.length){
    const catData = props.data[i];
    // 서브 리스트 구성하기
    let j = 0;
    let subLists = [];
    while(j < catData.sub.length){
      subLists.push(
          <li key={i * 100 + j}>
            <input
              type="checkbox"
              id={catData.sub[j]}
              onChange={handleClick}
              checked={selectedKeyword.includes(catData.sub[j]) ? true : false}
              ></input>
            <label htmlFor={catData.sub[j]}>{catData.sub[j]}</label>
          </li>
      )
      j = j + 1;
    }
    lists.push(
      <div key={i * 100} className="mainCategory">
        <h2 className="groupHeader">{catData.title}</h2>
        <ul className="subCategory">
          {subLists}
        </ul>
      </div>
    );
    i = i + 1;
  }
  return (
    <div className="category">
      <div>
        {lists}
      </div>
    </div>
  );
}

export default Category;

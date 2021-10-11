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

  useEffect(() => {
    // selectedKeyword 가 변할 때 마다 props.onClick 실행해 App에 배열을 넘김
    props.onClick(selectedKeyword);
  }, [selectedKeyword, props]);
  
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
          <li key={i * 100 + j} className="keyword">
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

  // resetBtn
  function handleResetBtn() {
    setKeyword([]);
  }

  // selectedKeywordLists
  const selectedKeywordLists = [];
  let k = 0;
  while(k < selectedKeyword.length) {
    selectedKeywordLists.push(
      <li className="keyword isSelected">
        <button 
          className="KeywordDeleteBtn"
          key={k}
          id={selectedKeyword[k]}
          onClick={handleDelBtn}>
            <span># </span>
            {selectedKeyword[k]}
            <i className="fas fa-times"></i>
        </button>
      </li>
    )
    k = k + 1;
  }

  // DeleteBtn
  function handleDelBtn(e) {
    let id = e.target.id;
    if(id === '') {
      id = e.target.parentElement.id;
    };
    setKeyword(selectedKeyword.filter(keyword => keyword !== id))
  }

  return (
    <div className="category">
      <div>
        {lists}
      </div>
      <button onClick={handleResetBtn}>RESET!</button>
      <div className="selectedKeywordLists">
        {selectedKeywordLists}
      </div>
    </div>
  );
}

export default Category;
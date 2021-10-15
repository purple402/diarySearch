import React from 'react';
import SelectedKeywordLists from "./SelectedKeywordLists.js";
import './Category.css';

function Category(props) {
  let selectedKeywords = props.selectedKeywords

  // 클릭 이벤트 처리 함수
  function handleClick(e) {
    const id = e.target.id;
    const checked = e.target.checked;
    if(checked) {
      // 체크된 경우
      props.onChange([...selectedKeywords, id]);
    } else {
      // 해제한 경우
      props.onChange(selectedKeywords.filter(keyword => keyword !== id));
    }
  }
  
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
              checked={selectedKeywords.includes(catData.sub[j]) ? true : false}
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
    props.onChange([]);
  }

  return (
    <div className="category">
      <div>
        {lists}
      </div>
      <button onClick={handleResetBtn}>RESET!</button>
      <SelectedKeywordLists
        selectedKeywords={selectedKeywords}
        keywords={[]}
        onClick={(keywords) => props.onChange(keywords)}
        ></SelectedKeywordLists>
    </div>
  );
}

export default Category;
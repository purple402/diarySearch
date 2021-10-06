import React from 'react';
import './Category.css';

function Category(props) {
  // 클릭 이벤트 처리 함수
  function handleClick(e) {
    console.log(e.target.id);
    console.log(e.target.checked);
  }
  // 리스트 구성하기
  const lists = [];
  let i = 0;
  while(i < props.data.length){
    const catData = props.data[i];
    // 서브 리스트 구성하기
    let j = 0;
    let subLists = [];
    while(j < catData.sub.length){
      subLists.push(
          <li key={i * 100 + j}>
            <input type="checkbox" id={catData.sub[j]} onClick={handleClick}>
            </input>
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
      {lists}
    </div>
  );
}

export default Category;

import React from 'react';
import Category from "./components/Category.js";
import './App.css';

function App() {
  const category = [
    {title:"구성", sub:['연간', '월간', '주간', '일간']},
    {title:"기간", sub:['1년+', '1년', '6개월', '3개월', '1개월']}
  ];
  // 카테고리 선택을 위한 리스트 만들기
  const lists = [];
  let i = 0;
  while(i < category.length){
    lists.push(
      <Category title={category[i].title} data={category[i].sub}></Category>
    );
    i = i + 1;
  }
  return (
    <div className="App">
      {lists}
    </div>
  );
}

export default App;

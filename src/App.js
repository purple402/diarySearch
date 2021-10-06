import React from 'react';
import Category from "./components/Category.js";
import './App.css';

function App() {
  const category = [
    {title:"구성", sub:['연간', '월간', '주간', '일간']},
    {title:"기간", sub:['1년+', '1년', '6개월', '3개월', '1개월']},
    {title:"크기", sub:["A6-", "B6", "A5", "B5", "A4+"]},
    {title:"커버", sub:["하드커버", "소프트커버", "PVC"]},
    {title:"제본", sub:["양장", "6공", "스프링", "메모지"]},
    {title:"기타", sub:["타임라인", "체크리스트", "밴드", "가름끈", "모눈", "월간-주간-월간-주간", "월간전체-주간전체"]},
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

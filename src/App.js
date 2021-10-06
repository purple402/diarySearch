import React from 'react';
import Category from "./components/Category.js";
import './App.css';

function App() {
  const category = [
    {id: 1, title:"구성", sub:['연간', '월간', '주간', '일간']},
    {id: 2, title:"기간", sub:['1년+', '1년', '6개월', '3개월', '1개월']},
    {id: 3, title:"크기", sub:["A6-", "B6", "A5", "B5", "A4+"]},
    {id: 4, title:"커버", sub:["하드커버", "소프트커버", "PVC"]},
    {id: 5, title:"제본", sub:["양장", "6공", "스프링", "메모지"]},
    {id: 6, title:"기타", sub:["타임라인", "체크리스트", "밴드", "가름끈", "모눈", "월간-주간-월간-주간", "월간전체-주간전체"]},
  ];
  return (
    <div className="App">
      {/* <h1>다이어리 키워드로 검색하기</h1> */}
      <Category data={category}></Category>
    </div>
  );
}

export default App;
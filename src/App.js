import React, { useState } from "react";
import Category from "./components/Category.js";
import "./App.css";

function App() {
  const [selectedKeyword, setKeyword] = useState([]);
  const category = [
    {id: 1, title:"날짜형식", sub:["2022년", "만년"]},
    {id: 2, title:"내지구성", sub:["연간", "월간", "주간", "일간"]},
    {id: 3, title:"월간위치", sub:["월간-주간-월간-주간", "월간전체-주간전체"]},
    {id: 4, title:"주간형태", sub:["가로나열", "세로나열", "한주1쪽", "한주2쪽"]},
    {id: 5, title:"기간", sub:["1년이상", "1년", "6개월", "3개월", "1개월"]},
    {id: 6, title:"크기", sub:["A6-", "B6", "A5", "B5", "A4+"]},
    {id: 7, title:"커버", sub:["하드커버", "소프트커버", "PVC"]},
    {id: 8, title:"제본", sub:["양장", "6공", "스프링", "메모지"]},
    {id: 8, title:"종이", sub:["100g", "120g"]},
    {id: 9, title:"기타", sub:["타임라인", "체크리스트", "밴드", "가름끈", "모눈"]},
  ];
  
  function handleCategory(newKeyword) {
    setKeyword(newKeyword);
  }

  return (
    <div className="App">
      {/* <h1>다이어리 키워드로 검색하기</h1> */}
      <Category
        data={category}
        onClick={(selectedKeyword) => handleCategory(selectedKeyword)}
        ></Category>
    </div>
  );
}

export default App;
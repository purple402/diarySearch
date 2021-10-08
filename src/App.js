import React from 'react';
import Category from "./components/Category.js";
import './App.css';

function App() {
  const [selectedKeyword, setKeyword] = useState([]);
  const category = [
    {id: 1, title:"날짜 형식", sub:["2022년", "만년"]},
    {id: 2, title:"구성", sub:["연간", "월간", "주간", "일간"]},
    {id: 3, title:"기간", sub:["1년+", "1년", "6개월", "3개월", "1개월"]},
    {id: 4, title:"크기", sub:["A6-", "B6", "A5", "B5", "A4+"]},
    {id: 5, title:"커버", sub:["하드커버", "소프트커버", "PVC"]},
    {id: 6, title:"제본", sub:["양장", "6공", "스프링", "메모지"]},
    {id: 7, title:"기타", sub:["타임라인", "체크리스트", "밴드", "가름끈", "모눈", "월간-주간-월간-주간", "월간전체-주간전체"]},
  ];

  // Category에서 선택된 keyword 처리
  function handleCategory(id, checked) {
    if(checked) {
      // 체크된 경우
      setKeyword(prevList => [...prevList, id]);
    } else {
      // 해제한 경우
      setKeyword(selectedKeyword.filter(keyword => keyword !== id));
    }
  };
  
  return (
    <div className="App">
      {/* <h1>다이어리 키워드로 검색하기</h1> */}
      <Category
        data={category}
        onClick={(id, checked) => handleCategory(id, checked)}
        ></Category>
    </div>
  );
}

export default App;
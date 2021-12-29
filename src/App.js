import React, { useState } from "react";
import Category from "./components/Category.js";
import ResultLists from "./components/ResultLists.js";
import Information from "./components/Information.js";
import "./App.css";

function App() {
  const [selectedKeywords, setKeyword] = useState([]);

  const category = [
    { id: 1, title: "날짜형식", sub: ["2022년", "만년"] },
    {
      id: 2,
      title: "내지구성",
      sub: ["달력", "연간", "월간", "주간", "일간", "프리노트"],
    },
    {
      id: 3,
      title: "월간위치",
      sub: ["월간-주간-월간-주간", "월간전체-주간전체"],
    },
    {
      id: 4,
      title: "주간형태",
      sub: [
        "좁은가로형",
        "넓은가로형",
        "좁은세로형",
        "넓은세로형",
        "여유공간있음",
      ],
    },
    {
      id: 5,
      title: "기간",
      sub: ["1년이상", "1년", "6개월", "3개월", "1개월"],
    },
    { id: 6, title: "크기", sub: ["A6이하", "B6", "A5", "B5", "A4이상"] },
    {
      id: 7,
      title: "커버",
      sub: ["하드커버", "소프트커버", "PVC커버", "가죽커버"],
    },
    { id: 8, title: "제본", sub: ["양장/반양장", "6공", "스프링", "메모지"] },
    { id: 8, title: "종이", sub: ["100g", "120g"] },
    {
      id: 9,
      title: "기타",
      sub: [
        "타임라인",
        "체크리스트",
        "모눈",
        "주말크기작음",
        "월요일시작",
        "가름끈",
        "밴드",
        "포켓",
        "정사각형",
      ],
    },
  ];

  // 전달받은 키워드 반영
  function handleKeywords(newKeyword) {
    setKeyword(newKeyword);
  }

  // 키워드 4개 이상 선택
  let result = "";
  function checkNumber() {
    if (selectedKeywords.length < 4) {
      return (
        <div className="keywordMessage">키워드를 네 개 이상 선택해주세요</div>
      );
    } else {
      return (
        <ResultLists
          selectedKeywords={selectedKeywords}
          onChange={(selectedKeyword) => handleKeywords(selectedKeyword)}
        ></ResultLists>
      );
    }
  }
  result = checkNumber();
  const length = Information.length
  return (
    <div className="App">
      <div className="titleDiv">
      <div className="title">
        <span id="emoji">📚</span>
        <span id="appTitle">다이어리 검색기</span>
      </div>
      <span className="info">{length}개의 다이어리들 중 검색합니다 (2022.12.18)</span>
      <a
        class="info"
        href="https://joy-lee.notion.site/b4d709f83ebe436d84599e3e99d8fbab"
        target="_blank"
        rel="noopener noreferrer">설명서를 참고해주세요!</a>
      </div>
      <Category
        data={category}
        selectedKeywords={selectedKeywords}
        onChange={(selectedKeyword) => handleKeywords(selectedKeyword)}
      ></Category>
      {result}
    </div>
  );
}

export default App;

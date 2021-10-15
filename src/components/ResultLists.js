import React from 'react';
import SelectedKeywordLists from "./SelectedKeywordLists.js";
import './ResultLists.css';

function ResultLists(props) {
  const keywords = ["2022년", "월간", "주간", "1년", "A5"];

  return (
    <div className="ResultLists">
    <ul className="diaries">
      <li className="diary">
        <div className="diaryImage">
          <div>
            <img className="diaryThumbnail" src={"http://thumbnail.10x10.co.kr/webimage/image/add1/409/A004096257_01.jpg?cmd=thumb&w=240&h=240&fit=true&ws=false"} alt="thumbnail"></img>
          </div>
        </div>
        <div className="diaryInfo">
          <div className="diaryTitle">2022 프리즘 데일리 다이어리(날짜형,일간,미니)</div>
          <div className="diaryBrand">INDIGO</div>
          <div className="diaryKeywords">
          <SelectedKeywordLists
            selectedKeywords={props.selectedKeywords}
            keywords={keywords}
            onClick={(newKeywords) => props.onChange(newKeywords)}></SelectedKeywordLists>
          </div>
        </div>
      </li>
    </ul>
  </div>
  )
}

export default ResultLists;
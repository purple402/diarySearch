import React from 'react';
import KeywordLists from "./KeywordLists.js";
import Information from "./Information.js";
import './ResultLists.css';

function ResultLists(props) {
  const selectedKeywords = props.selectedKeywords;
  function containKeywords(data) {
    for (let i = 0; i < selectedKeywords.length; i++) {
      if(data.tag.indexOf(selectedKeywords[i]) < 0) return false;
    }
    return true;
  }
  const items = Information.filter(containKeywords).map(data => {
    return(
      <li className="diary"
        key={data.id}>
        <div className="diaryImage">
          <div>
            <img className="diaryThumbnail" src={data.image} alt="thumbnail"></img>
          </div>
          <div className="diarySize">size: <span>{data.size}</span></div>
          <a className="diaryLink" href={data.link}>link</a>
        </div>
        <div className="diaryInfo">
          <div className="diaryTitle">{data.name}</div>
          <div className="diaryBrand">{data.brand}</div>
          <div className="diaryKeywords">
          <KeywordLists
            selectedKeywords={selectedKeywords}
            keywords={data.tag}
            onClick={(newKeywords) => props.onChange(newKeywords)}></KeywordLists>
          </div>
        </div>
      </li>
    )
  })
  return (
    <div className="ResultLists">
    <ul className="diaries">
      {items}
    </ul>
  </div>
  )
}

export default ResultLists;
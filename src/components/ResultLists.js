import React from 'react';
import KeywordLists from "./KeywordLists.js";
import Information from "./Information.js";
import './ResultLists.css';

function ResultLists(props) {
  const selectedKeywords = props.selectedKeywords;
  let message = '';

  // 모바일 확인
  function detectMobileDevice() {
    const minWidth = 760;
    return window.innerWidth <= minWidth;
  }

  const isMobile = detectMobileDevice();
  console.log(isMobile);

  function containKeywords(data) {
    for (let i = 0; i < selectedKeywords.length; i++) {
      if(data.tag.indexOf(selectedKeywords[i]) < 0) return false;
    }
    return true;
    // selectedKeywords.forEach(keyword => {
    //   console.log(data.name, keyword, data.tag.indexOf(keyword))
    //   if(data.tag.indexOf(keyword) < 0) {
    //     return false;
    //   }
    // })
  }

  const items = Information.filter(containKeywords).map(data => {
    if(!isMobile){
      return(
        <li className="diary"
          key={data.id}>
          <div className="diaryImage">
            <div>
              <img className="diaryThumbnail" src={data.image} alt="thumbnail"></img>
            </div>
            <div className="diarySize">size: <span>{data.size} (mm)</span></div>
            <a 
              className="diaryLink"
              href={data.link}
              target="_blank"
              rel="noopener noreferrer">link</a>
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
    } else {
      return(
        <li className="diary"
          key={data.id}>
          <div className="diaryImage">
            <div>
              <img className="diaryThumbnail" src={data.image} alt="thumbnail"></img>
            </div>
            <div className="diaryInfo">
              <div className="diaryTitle">{data.name}</div>
              <div className="diaryBrand">{data.brand}</div>
              <div className="diarySize">size: <span>{data.size} (mm)</span></div>
              <a 
                className="diaryLink"
                href={data.link}
                target="_blank"
                rel="noopener noreferrer">link</a>
            </div>
          </div>
          <div className="diaryKeywords">
          <KeywordLists
            selectedKeywords={selectedKeywords}
            keywords={data.tag}
            onClick={(newKeywords) => props.onChange(newKeywords)}></KeywordLists>
          </div>
        </li>
      )
    }
  })
  if(items.length === 0) {
    message = "검색 결과가 없습니다."
  }
  if(selectedKeywords.length === 0) {
    message = "키워드를 선택해 보세요."
  }
  return (
    <div className="ResultLists">
    <span className="ResultMessage">{message}</span>
    <ul className="diaries">
      {items}
    </ul>
  </div>
  )
}

export default ResultLists;
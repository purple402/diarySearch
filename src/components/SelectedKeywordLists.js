import React from 'react';
import './selectedKeywordLists.css';

function SelectedKeywordLists(props) {
  let keywords = props.selectedKeywords;
  let wholeKeywords = props.keywords;

  // wholeKeywordLists
  const wholeKeywordLists = [];
  if(wholeKeywords.length) {
    keywords.forEach(keyword => {
      wholeKeywords = wholeKeywords.filter(word => word !== keyword)
    })

    let i = 0;
    while(i < wholeKeywords.length) {
      wholeKeywordLists.push(
        <li
          className="keyword"
          key={i}>
          <button 
            className="keywordDeleteBtn"
            id={wholeKeywords[i]}
            onClick={handleAddBtn}>
              <span># </span>
              {wholeKeywords[i]}
              <i className="fas fa-times"></i>
          </button>
        </li>
      )
      i = i + 1;
    }
  }

  // selectedKeywordLists
  const keywordLists = [];
  let i = 0;
  while(i < keywords.length) {
    keywordLists.push(
      <li
        className="keyword isChecked"
        key={i}>
        <button 
          className="keywordDeleteBtn"
          id={keywords[i]}
          onClick={handleDelBtn}>
            <span># </span>
            {keywords[i]}
            <i className="fas fa-times"></i>
        </button>
      </li>
    )
    i = i + 1;
  }

  // DeleteBtn
  function handleDelBtn(e) {
    let id = e.target.id;
    if(id === '') {
      id = e.target.parentElement.id;
    };
    keywords = keywords.filter(keyword => keyword !== id);
    props.onClick(keywords);
  }

  function handleAddBtn(e){
    let id = e.target.id;
    if(id === '') {
      id = e.target.parentElement.id;
    };
    keywords.push(id);
    props.onClick(keywords);
  }

  return (
    <ul className="keywordLists selected">
      {keywordLists}
      {wholeKeywordLists}
    </ul>
  )
}

export default SelectedKeywordLists;
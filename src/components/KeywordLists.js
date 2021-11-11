import React from 'react';
import './keywordLists.css';

function KeywordLists(props) {
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
              {wholeKeywords[i]}
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
            <i className="fas fa-thumbtack"></i>
            {keywords[i]}
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

  // AddBtn
  function handleAddBtn(e){
    let id = e.target.id;
    if(id === '') {
      id = e.target.parentElement.id;
    };
    props.onClick([...keywords, id]);
  }

  return (
    <ul className="keywordLists selected">
      {keywordLists}
      {wholeKeywordLists}
    </ul>
  )
}

export default KeywordLists;
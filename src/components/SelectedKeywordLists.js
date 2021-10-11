import React from 'react';

function SelectedKeywordLists(props) {
//   const [keywords, setKeywords] = useState(props.selectedKeywords);
  let keywords = props.selectedKeywords;
  // selectedKeywordLists
  const keywordLists = [];
  let i = 0;
  while(i < keywords.length) {
    keywordLists.push(
      <li
        className="keyword isSelected"
        key={i}>
        <button 
          className="KeywordDeleteBtn"
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
    props.onChange(keywords);
  }

  return (
    <div className="selectedKeywordLists">
      {keywordLists}
    </div>
  )
}

export default SelectedKeywordLists;
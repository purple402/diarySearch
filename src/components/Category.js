import React from 'react';

function Category(props) {
  const lists = [];
  let i = 0;
  while(i < props.data.length){
    lists.push(
      <li key={i}>
        <input type="checkbox" id={props.data[i]}>
        </input>
        <label for={props.data[i]}>{props.data[i]}</label>
      </li>
    );
    i = i + 1;
  }
  return (
    <div>
      <h2>{props.title}</h2>
      <ul>
        {lists}
      </ul>
    </div>
  );
}

export default Category;

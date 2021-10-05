import './App.css';

function App() {
  const category = [
    {title:"구성", sub:['연간', '월간', '주간', '일간']},
    {title:"기간", sub:['1년+', '1년', '6개월', '3개월', '1개월']}
  ];
  return (
    <div className="App">
      <ul>
        <li>
            <input type="checkbox" id="2021 날짜형"></input>
            <label for="2021 날짜형">2021 날짜형</label>
        </li>
        <li>
            <input type="checkbox" id="만년형"></input>
            <label for="만년형">만년형</label>
        </li>
      </ul>
    </div>
  );
}

export default App;

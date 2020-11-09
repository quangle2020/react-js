import React, { } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TotalTwoNumber from './totalFunctionComponent/totalFunctionComponent';
import SubTwoNumber from "./subClassComponent/subClassComponent";

function App() {
  let persons = [
    {
      id: 1,
      name: 'QuangLe',
      status: true
    },
    {
      id: 2,
      name: 'Quangle1410',
      status: true
    },
    {
      id: 3,
      name: 'QuangLeVan',
      status: true
    }
  ];

  let elements = persons.map((person, index) => {
    let result = '';
    if (person.status && index !== persons.length - 1) {
      result = person.name + ", " ;
    }
    else result = person.name ;
    return result;
  });

  function sum(x, y, z, k) {
    return x + y + z + k;
  }
  
  const numbers = [1, 2, 3, 4];
  
  console.log(sum(...numbers));
  // expected output: 6
  
  console.log(sum.apply(null, numbers));
  // expected output: 6

  return (
    <div className="App">
      <div className="head">
        <h2>XIN CHÀO</h2>
        <h1>ĐÂY LÀ MỘT BÀI DEMO</h1>
      </div>
      <div className="form-group row">
        <div className="col-md-6 text-left">
          <TotalTwoNumber name={elements} />
        </div>
        <div className="col-md-6 text-left">
          <SubTwoNumber />
        </div>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TotalTwoNumber from './totalFunctionComponent/totalFunctionComponent';
import SubTwoNumber from "./subClassComponent/subClassComponent"
// const App = () => {
function App() {
  return (
    <div className="App">
      <div className="head">
        <h2>XIN CHÀO</h2>
        <h1>ĐÂY LÀ MỘT BÀI DEMO</h1>
      </div>
      <div className="form-group row">
        <div className="col-md-6 text-left">
          <TotalTwoNumber />
        </div>
        <div className="col-md-6 text-left">
          <SubTwoNumber />
        </div>
      </div>
    </div>
  );
}

export default App;

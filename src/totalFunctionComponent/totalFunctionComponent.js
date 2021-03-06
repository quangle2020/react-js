import React, { useEffect, useState } from "react";
import './totalFunctionComponent.css';


const TotalTwoNumber = (props) => {
  
  const [numA, SetNumA] = useState(0);
  const [numB, SetNumB] = useState(0);
  const [total, SetTotal] = useState(0);

  const changeValueNumA = (e) => {
    SetNumA(e.target.value);
  }

  const changeValueNumB = (e) => {
    SetNumB(e.target.value);
  }

  const totalTwoNum = () => {
    SetTotal(Number(numA) + Number(numB));
  }

  useEffect(() =>{
    totalTwoNum();
  });

  return (
    <form>
      <h1 className="head-style">TÍNH TỔNG A + B</h1>
      <div className="head-style">
        <div>
        <label className="col-md-2 text-right">Số a</label>
          <input value={numA} className="col-md-4" onChange={(e) => changeValueNumA(e)} type="Number" placeholder="Nhập vào số a"></input>
        </div>
        <div>
        <label className="col-md-2 text-right">Số b</label>
          <input value={numB} className="col-md-4" onChange={(e) => changeValueNumB(e)} type="Number" placeholder="Nhập vào số b"></input>
        </div>
        <button type="button" className="btn btn-primary" onClick={totalTwoNum}>Tính tổng</button>
        {total !== 0 && <h1>Tổng Hai Số = {total}</h1>}
        <h4 className="text-right">Người tạo: {props.name}{props.age} </h4>
      </div>
    </form>
  );
}

export default TotalTwoNumber;
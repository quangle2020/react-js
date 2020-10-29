import React from "react";
import './subClassComponent.css';

class SubTwoNumber extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numA: 0,
            numB: 0,
            sub : 0
        };
        // this.changeValueNumA = this.changeValueNumA.bind(this);
        // this.changeValueNumB = this.changeValueNumB.bind(this);
        // this.subTwoNum = this.subTwoNum.bind(this);
        
    }

    changeValueNumA = (e) =>{
        this.setState({
            numA: e.target.value
        });
    }

    changeValueNumB = (e) =>{
        this.setState({
            numB: e.target.value
        });
    }
   
    subTwoNum = () => {
      this.setState({
          sub: Number(this.state.numA) - Number(this.state.numB)
      });
    }
    render() {
        return (
            <form>
                <h1 className="head-style">TÍNH HIỆU A - B</h1>
                <div className="head-style">
                    <div>
                        <label className="col-md-2 text-right">Số a</label>
                        <input className="col-md-4" onChange={(e) => this.changeValueNumA(e)} type="Number" placeholder="Nhập vào số a"></input>
                    </div>
                    <div>
                        <label className="col-md-2 text-right">Số b</label>
                        <input className="col-md-4" onChange={(e) => this.changeValueNumB(e)} type="Number" placeholder="Nhập vào số b"></input>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={this.subTwoNum}>Tính hiệu</button>
                    {(this.state.sub !==0) && <h1>Hiệu Hai Số = {this.state.sub}</h1>}
                </div>
            </form>
        );
    }
}
export default SubTwoNumber;
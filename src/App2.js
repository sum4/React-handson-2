import React, { Component } from 'react'
import "./App.css";

export default class App2 extends Component {
    state={
        name : "",
        department : "",
        rating : "",
        data : []

    }

    handleClick = () =>{
        const obj = {
            name : this.state.name,
            department : this.state.department,
            rating : this.state.rating
        }
        this.state.data.push(obj)
        this.setState({data:this.state.data,name:"",department:"",rating:""})
        console.log(this.state.data)
    }


    handleChange = (event) =>{
        this.setState({[event.target.name]:event.target.value})
    }





  render() {
    return (
      <div className='App'>
        <h1 style={{fontSize:"40px"}}>EMPLOYEE FEEDBACK FORM</h1>
            <label className='lable'>Name : </label>
            <input type='text'className='input'  name='name'value={this.state.name} onChange={this.handleChange} />
            <br />
            <label className='lable'>Department : </label>
            <input type='text' className='input' name='department'value={this.state.department} onChange={this.handleChange}/>
            <br />
            <label className='lable'>Rating : </label>
            <input type="number" className='input' name='rating'value={this.state.rating} onChange={this.handleChange}/>
            <br />
            <button className='btn' onClick={this.handleClick}>Submit</button>

        <div className='footer'>
        {this.state.data.map((item)=>{
            return(
                <div className='child'>Name : {item.name} | Department : {item.department} | Rating : {item.rating}</div>
            )
        })}
        </div>
      </div>
    )
  }
}

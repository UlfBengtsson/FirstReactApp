import React, { Component } from "react";
import MyFirstComponet from "./componets/MyFirstComponet";
import Memo from "./componets/Memo";
import './App.css';

export default class App extends Component {

  state = 
  {
    okToAddMemo: false,
    newMemo: "",
    memoList: ["prop name is sensetiv", "more memos"]//javascript array == list 
  };

  updateNewMemo = event => {
    let enableButton = false;

    if (event.target.value.length > 0) {
      enableButton = true;
    }

    console.log("update Memo length check: ", event.target.value.length > 0);

    this.setState(
      {
        newMemo: event.target.value,
        okToAddMemo: enableButton
      }
    );
  };

  addNewMemo = () => {
    /*
    const toAddMemo = this.state.newMemo;
    let newMemoList = this.state.memoList;
    
    newMemoList.push(toAddMemo);
    
    this.setState(
      {
        memoList: newMemoList, 
        newMemo: ""
      }
    );*/
    
    let { newMemo, memoList } = this.state;

    console.log("addMemo length check: ", newMemo.length > 0);

    if (newMemo.length > 0) {
      memoList.push(newMemo);

      this.setState(
        {
          memoList: memoList, 
          newMemo: "",
          okToAddMemo: false
        }
      );
    }

  };

  render() {

    let { okToAddMemo } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello World!</h1>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
  
        <section>
          <MyFirstComponet />

          <div>
            <label>New memo:</label>
            <input type="text" value={this.state.newMemo} placeholder="text here" onChange={this.updateNewMemo} />
            <button disabled={!okToAddMemo} onClick={this.addNewMemo}>Add memo</button>
          </div>

          <Memo memoList={this.state.memoList} />
        </section>
  
      </div>
    );
  } 
}
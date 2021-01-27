import React, { Component } from 'react';

export default class Memo extends Component {
    
    
    render() {

        const memoTitle = "Dont forget to do this!";


        return (
            <div>
               <h3>{memoTitle}</h3>
               <ul>
                {this.props.memoList.map((row, index) =>
                    <li key = {index}>
                        <p>
                            {row}
                            <span>
                                
                            </span>
                        </p>
                    </li>)}
               </ul>
            </div>
        );
    }
}
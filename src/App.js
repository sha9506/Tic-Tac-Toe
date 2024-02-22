import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';

function App (){
    return (
        <div>
          <div className='heading'>Tic-Tac-Toe</div>
          <div className='tic-box'>
            <div> {status}</div>
            <div>Player 2</div>
            <Board/>
          </div>
        </div>
    );
  }


export default App;

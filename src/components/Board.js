import React, { useState } from "react";
import './Board.css';
import Square from "./Square";
import Winner from "./Winner";

function Board()
{
    const [xNext, setXNext]= useState(true);
    const [squares , setSquares]= useState(Array(9).fill(null));


    const handle=(i)=>
    {
        if (Winner(squares) || squares[i]) {
            return;
          }
        const nextSquares= squares.slice();
        if (xNext) {
            nextSquares[i] = 'X';
          } 
        else {
            nextSquares[i] = 'O';
          }
        setSquares(nextSquares);
        setXNext(!xNext);
    }

    const game = Winner(squares);
    let status; 
    if(game)
    {
        status = 'Winner is '+ Winner(squares);
    }
    
    return (<div> {status}
        <div className='row'>
              <Square value={squares[0]} onSquareClick={() => handle(0)} />
              <Square value={squares[1]} onSquareClick={()=>handle(1)} />
              <Square value={squares[2]} onSquareClick={()=>handle(2)} />
            </div>
            <div className='row'>
              <Square value={squares[3]} onSquareClick={()=>handle(3)} />
              <Square value={squares[4]} onSquareClick={()=>handle(4)} />
              <Square value={squares[5]} onSquareClick={()=>handle(5)} />
            </div>
            <div className='row'>
              <Square value={squares[6]} onSquareClick={()=>handle(6)} />
              <Square value={squares[7]} onSquareClick={()=>handle(7)} />
              <Square value={squares[8]} onSquareClick={()=>handle(8)} />
            </div>
    </div>)
}

export default Board;
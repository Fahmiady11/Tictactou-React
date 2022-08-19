import './App.css';
import React, { useState, useEffect } from 'react';
import Board from './component/Board';
import { ArrowSmRightIcon } from '@heroicons/react/solid';
function App() {
  const [score, setScore] = useState({ A: 0, B: 0, C: 0 });
  const [changeP, setChangeP] = useState(true);
  const [statusSquere, setStatusSquere] = useState(Array(9).fill(null));
  const [count, setCount] = useState(0);
  const [win, setWin] = useState(null);
  const data = [
    //horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //diagonal
    [0, 4, 8],
    [2, 4, 6],
  ];

  const Winner = () => {
    setCount(count + 1);
    for (let i = 0; i < data.length; i++) {
      const [a, b, c] = data[i];
      if (
        statusSquere[a] === true &&
        statusSquere[a] === statusSquere[b] &&
        statusSquere[a] === statusSquere[c]
      ) {
        setCount(0);
        return true;
      } else if (
        statusSquere[a] === false &&
        statusSquere[a] === statusSquere[b] &&
        statusSquere[a] === statusSquere[c]
      ) {
        setCount(0);
        return false;
      } else if (i + 1 === data.length && count === 9) {
        setCount(0);
        return null;
      }
    }
  };

  useEffect(() => {
    let result = Winner();
    if (result === true) {
      setScore({ ...score, A: score.A + 1 });
      setStatusSquere(Array(9).fill(null));
      setWin(result);
    } else if (result === false) {
      setScore({ ...score, B: score.B + 1 });
      setStatusSquere(Array(9).fill(null));
      setWin(result);
    } else if (result === null) {
      setScore({ ...score, C: score.C + 1 });
      setStatusSquere(Array(9).fill(null));
      setWin(result);
    }

    //eslint-disable-next-line
  }, [changeP, score]);

  return (
    <>
      <div className="bg-[#15202B] w-screen h-screen flex justify-center items-center">
        <div className="flex items-center justify-center flex-col gap-10 font-semibold text-4xl text-white">
          <p>
            <span className="text-red-600">TIC</span>{' '}
            <span className="text-blue-600">TAC</span>{' '}
            <span className="text-yellow-600">TOU</span>
          </p>
          <Board
            changeP={changeP}
            setChangeP={setChangeP}
            statusSquere={statusSquere}
            setStatusSquere={setStatusSquere}
          />
          <div className="w-full flex justify-between items-start">
            <div>
              <div className="flex items-center text-red-600">
                <p className="text-base ">Player A</p>
                <ArrowSmRightIcon className="h-5 w-5" />
                <p className="text-base">{score.A}</p>
              </div>
              <div className="flex items-center text-blue-600">
                <p className="text-base">Player B</p>
                <ArrowSmRightIcon className="h-5 w-5" />
                <p className="text-base">{score.B}</p>
              </div>
              <div className="flex items-center text-yellow-600">
                <p className="text-base">Draw</p>
                <ArrowSmRightIcon className="h-5 w-5" />
                <p className="text-base">{score.C}</p>
              </div>
            </div>
            <div className="flex items-center">
              <p className="text-base">Winner </p>
              <ArrowSmRightIcon className="h-5 w-5" />
              <p className="text-base">
                {win == null
                  ? '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'
                  : win
                  ? 'Player A'
                  : 'Player B'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

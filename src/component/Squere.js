import React from 'react';

export default function Squere(props) {
  const { changeP, setChangeP, statusSquere, setStatusSquere, number } = props;
  const handleClick = () => {
    if (statusSquere[number] === null) {
      setChangeP(!changeP);
      setStatusSquere({ ...statusSquere, [number]: changeP });
    }
  };
  return (
    <>
      <div
        onClick={handleClick}
        className={`border-2 border-white w-24 h-24  flex justify-center items-center hover:bg-slate-700 cursor-pointer ${statusSquere[number]?'text-red-600':'text-blue-600'}`}
      >
        {statusSquere[number] === null
          ? null
          : statusSquere[number]
          ? 'O'
          : 'X'}
      </div>
    </>
  );
}

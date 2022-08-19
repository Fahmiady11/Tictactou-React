import React from 'react';
import Squere from './Squere';
export default function Board(props) {
  const { changeP, setChangeP, statusSquere, setStatusSquere } = props;
  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-center items-center">
          <Squere
            changeP={changeP}
            setChangeP={setChangeP}
            statusSquere={statusSquere}
            setStatusSquere={setStatusSquere}
            number={0}
          />
          <Squere
            changeP={changeP}
            setChangeP={setChangeP}
            statusSquere={statusSquere}
            setStatusSquere={setStatusSquere}
            number={1}
          />
          <Squere
            changeP={changeP}
            setChangeP={setChangeP}
            statusSquere={statusSquere}
            setStatusSquere={setStatusSquere}
            number={2}
          />
        </div>
        <div className="flex justify-center items-center">
          <Squere
            changeP={changeP}
            setChangeP={setChangeP}
            statusSquere={statusSquere}
            setStatusSquere={setStatusSquere}
            number={3}
          />
          <Squere
            changeP={changeP}
            setChangeP={setChangeP}
            statusSquere={statusSquere}
            setStatusSquere={setStatusSquere}
            number={4}
          />
          <Squere
            changeP={changeP}
            setChangeP={setChangeP}
            statusSquere={statusSquere}
            setStatusSquere={setStatusSquere}
            number={5}
          />
        </div>
        <div className="flex justify-center items-center">
          <Squere
            changeP={changeP}
            setChangeP={setChangeP}
            statusSquere={statusSquere}
            setStatusSquere={setStatusSquere}
            number={6}
          />
          <Squere
            changeP={changeP}
            setChangeP={setChangeP}
            statusSquere={statusSquere}
            setStatusSquere={setStatusSquere}
            number={7}
          />
          <Squere
            changeP={changeP}
            setChangeP={setChangeP}
            statusSquere={statusSquere}
            setStatusSquere={setStatusSquere}
            number={8}
          />
        </div>
      </div>
    </>
  );
}

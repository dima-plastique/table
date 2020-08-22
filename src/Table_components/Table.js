import React from "react";
import List from "./List";

const Table = (props) => {
  return (
    <>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Кол-во смен</th>
            <th>Ставка в смену</th>
            <th>Итого ЗП</th>
          </tr>
        </thead>
        <tbody>
          <List
            workers={props.workers}
            createDay={props.createDay}
            createCoast={props.createCoast}
            onChangeDay={props.onChangeDay}
            onBlurDay={props.onBlurDay}
            onChangeCoast={props.onChangeCoast}
          />
        </tbody>
      </table>
    </>
  );
};

export default Table;

import React from "react";

const List = (props) => {
  const list = props.workers.map((worker, index) => {
    return (
      <tr key={index}>
        <td>{worker.name}</td>
        <td>{worker.surname}</td>
        <td onClick={(evt) => props.createDay(index, evt)}>
          {worker.checked ? (
            <div>
              {" "}
              <input
                type="number"
                onChange={(evt) => props.onChangeDay(evt, index)}
                placeholder={worker.day}
              />
              <button onClick={() => props.onBlurDay(index)}>ОК</button>
            </div>
          ) : (
            worker.day
          )}
        </td>

        <td onClick={(evt) => props.createCoast(index, evt)}>
          {worker.checkedCoast ? (
            <div>
              {" "}
              <input
                type="number"
                onChange={(evt) => props.onChangeCoast(evt, index)}
                placeholder={worker.coast}
              />
              <button onClick={() => props.onBlurDay(index)}>ОК</button>
            </div>
          ) : (
            worker.coast
          )}
        </td>
        <td>{worker.summ}</td>
      </tr>
    );
  });
  return <>{list}</>;
};

export default List;

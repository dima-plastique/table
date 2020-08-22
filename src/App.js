import React, { Component } from "react";
import worker from "./Workers";

import Table from "./Table_components/Table";

class App extends Component {
  state = {
    workers: worker,
  };

  // Состояние, при появлении в DOM
  componentDidMount() {
    const workers = this.state.workers;
    workers.forEach(
      (value) => (
        (value.summ = value.day * value.coast),
        (value.checked = false),
        (value.checkedCoast = false)
      )
    );

    this.setState({ workers });
  }

  // Меняем флаг при нажатии на поле с днем
  createDay = (index, evt) => {
    if (evt.target.tagName === "TD") {
      const workers = this.state.workers.concat();

      workers[index].checked = !workers[index].checked;

      this.setState({ workers });
    }
  };

  // Меняем кол-во дней в стейте
  onChangeDay = (evt, index) => {
    const workers = this.state.workers.concat();

    workers[index].day = parseInt(evt.target.value);

    this.setState({ workers });
  };

  // Нажатие на кнопку ок меняет общую сумму ЗП
  onBlurDay = () => {
    const workers = this.state.workers.concat();
    workers.forEach((value) => {
      value.summ = value.day * value.coast;
      if (value.checkedCoast || value.checked) {
        return (value.checkedCoast = false), (value.checked = false);
      }
    });

    this.setState({ workers });
  };

  createCoast = (index, evt) => {
    if (evt.target.tagName === "TD") {
      const workers = this.state.workers.concat();

      workers[index].checkedCoast = !workers[index].checkedCoast;

      this.setState({ workers });
    }
  };

  onChangeCoast = (evt, index) => {
    const workers = this.state.workers.concat();

    workers[index].coast = parseInt(evt.target.value);

    this.setState({ workers });
  };

  render() {
    return (
      <div className="container">
        <Table
          workers={this.state.workers}
          createDay={this.createDay}
          createCoast={this.createCoast}
          onChangeDay={this.onChangeDay}
          onBlurDay={this.onBlurDay}
          onChangeCoast={this.onChangeCoast}
        />
      </div>
    );
  }
}

export default App;

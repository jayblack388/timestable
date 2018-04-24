import React, { Component } from "react";


const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default class Table extends Component {
  state = {
    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  };

  render() {
    return (
      <table style={{height:"auto"}} className="table text-center table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            {shuffle(this.state.data.map(number => {
              return <th scope="col">{number}</th>;
            }))}
          </tr>
        </thead>
        <tbody>
          {shuffle(this.state.data.map(number => {
            return (
              <tr style={{height:"auto"}}>
                <th scope="row">{number}</th>
                <td><input style={{width: 30}} /></td>
                <td><input style={{width: 30}} /></td>
                <td><input style={{width: 30}} /></td>
                <td><input style={{width: 30}} /></td>
                <td><input style={{width: 30}} /></td>
                <td><input style={{width: 30}} /></td>
                <td><input style={{width: 30}} /></td>
                <td><input style={{width: 30}} /></td>
                <td><input style={{width: 30}} /></td>
                <td><input style={{width: 30}} /></td>
                <td><input style={{width: 30}} /></td>
                <td><input style={{width: 30}} /></td>
              </tr>
            );
          }))}
        </tbody>
        <tbody />
      </table>
    );
  }
}

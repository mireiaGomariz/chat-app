import React, { Component } from 'react';
import '../chat.css';



class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    props.contact.map(function(person, i){
      this.state["status"+i] = person.status
    }, this)
    console.log(this.state)
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {this.props.contact.map(function(person, i){
            return (
            <tr key={i}>
              <td><img className="avatar"  src={person.avatar}/>
              </td>

              <td className="name">{person.name}</td>
              <td
                onClick = {event => {
                  const newStatus = !this.state["status"+i];
                  this.setState ({["status"+i]: newStatus });
                }}>
                {this.state["status"+i] === true ? "Online" : "Offline" }
              </td>
            </tr>
          )
          }, this)
          }

        </tbody>
      </table>
    )
  }
}





export default Table;

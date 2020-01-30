import React, { Component } from 'react';
import '../chat.css';



function Table(props) {

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
          {props.contact.map(person => {
            return (
            <tr>
            <td><img className="avatar" src={person.avatar}/></td>

               <td className="name">{person.name}</td>
               <td>{person.status === true ? "Online" : "Offline" }
                </td>
              </tr>
          )
          })}

        </tbody>
      </table>
      )
    }





export default Table;

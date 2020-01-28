
import React, { Component } from 'react'


  let people = [
    {
      name: 'Mireia',
      avatar: ("https://avatars0.githubusercontent.com/u/47714488?s=400&v=4"),
      status: true,
    },
    {
      name: 'Marta',
      avatar: ("https://avatars0.githubusercontent.com/u/47714488?s=400&v=4"),
      status: false,
    },
    {
      name: 'Onis',
      avatar: ("https://avatars0.githubusercontent.com/u/47714488?s=400&v=4"),
      status: true,
    },
  ];

  function Contact () {
    // this.name = name,
    // this.avatar = avatar,
    // this.status = status,


    return (
      <div>
      {
        people.map( person => {
          return (

            <div className="Contact">
              <img className="avatar" src={person.avatar}/>

              <div>
                <h4 className="name">{person.name}</h4>

                <div className='status'>
                  {person.status ?
                    <div>
                      <div className='status-online'></div>
                        <span className="status-text">Online</span>
                    </div>
                    :
                    <div>
                      <div className='status-offline'></div>
                      <span className="status-text">Offline</span>
                    </div>
                  }
                </div>
              </div>
            </div>
          )


        })
      }

    </div>
    )
  };




export default Contact;

import React,{Component} from 'react';
import axios from 'axios';

class Contact extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isGoing: true,
        numberOfGuests: 2
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
      
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value =  target.value;
      const name = target.name;
      this.setState({
        [name]: value
      });
    }



    handleSubmit(event) {
      event.preventDefault();

      var form = document.querySelector('form');
      
var serverDate = 'namerr';
          const data = {name:serverDate};

      
          axios.post('http://localhost:3000/',data)
          .then((result) => {
            //access the results here....
          });

/*    fetch('http://localhost:3001', {
      method: 'POST',
      body: data,
    });*/
      
       /* var data = {
            "name":"name"
        }
        fetch("http://localhost:3000/tasks/",{
          
        method: "POST",
        headers: 'application/json',
        body:   JSON.stringify(data)
        })
        .then(function(responce){
            return responce.json();
        }).then(function(data){
            console.log('fdfd');
        });
        */
       event.preventDefault();
      }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit} >
          <label>
            Name:
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Email id:
            <input
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleInputChange} />
          </label>
          <label>
            Messgae:
            <input
              name="messgae"
              type="text"
              value={this.state.message}
              onChange={this.handleInputChange} />
          </label>
          <input type="submit" value="Submit" />

        </form>
      );
    }
  }

  export default Contact;
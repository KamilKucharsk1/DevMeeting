import React, { Component } from "react";


class Contact extends Component {
constructor(props) {
    super(props);
}


    

render(){




return (

  <section>
      <h1>Users:</h1>
      
      
    <div>
        <header>{this.props.item.name.title}</header>
            <p>{this.props.item.name.first}</p>
            <p>{this.props.item.name.last}</p>
            <p>{this.props.item.login.username}</p>
            <p>{this.props.item.phone}</p>
            
    </div>
        
  </section>
);

}
}

export default Contact;


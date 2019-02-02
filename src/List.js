import React from 'react';
import Contact from './Contact';
import Search from './Search';

class List extends React.Component {
 

    state = {

        users: [],
        query: "",
        results: []

    }



    componentDidMount() {

        fetch("https://randomuser.me/api/?results=5")
          .then(res => res.json())
          .then(res => {
            console.log(res, res.results);
            //this.setState({users: res.results})
            var resu = res.results;

            this.setState({users: resu})
          })
          .catch();

    }

    handleButtonClick = (event) =>
        this.handleInputChange;


    handleInputChange = (e) => {
        this.setState({
            query: e.target.value
        });
    }


    render(){
        
            console.log(this.state.query);
        if(this.state.users) {
    return <section>
        <input placeholder="Search User..."onChange={this.handleInputChange} />
        <button onClick={this.handleButtonClick}>Search</button>
        <p>{this.state.query}</p>
        <h1>Searched user{console.log(this.state.results)}</h1>


        <h1>Users</h1>
        {this.state.users.filter(user => user.name.first === this.state.query)
            .map((user) => {
            return<div>
          <Contact key={user.id} item={user} />
          
        }
        
        <Contact key={user.id} item={user} />
        </div>
        )}
      </section>;
            }
            return <div>Loading...</div>

}
}
export default List;
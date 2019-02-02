import React, {Component} from 'react';
import List from './List';

class Search extends Component{

    handleButtonClick = (event) =>
    console.log(event.target.textContent);

    state ={
        query: "",
        results: []
    }

    handleInputChange = () => {
        this.setState({
           query: this.input
        });
    }

    getInfo = () => {
        
        
    }
    

render() {
    return <form>
        <input placeholder="Search User..." ref={input => (this.search = input)} onChange={this.handleInputChange} />
        <button onClick={this.handleButtonClick}>Search</button>
        <p>{this.state.query}</p>
        
      </form>;
}
}

export default Search;
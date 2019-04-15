import React, { Component } from "react";

class UserSearch extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchString: "",
      foundUsers: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSelected = this.handleSelected.bind(this)
  }

  componentDidMount(){
    this.refs.search.focus();
  }

  handleChange(event) {
    this.setState({
      searchString: this.refs.search.value
    });

  }

  handleSelected(user){
    this.props.selectedUser(user);
    this.setState({ searchString: "" })
  }

  render(){
    let users = this.props.users
    let foundUsers = []
    let search = this.state.searchString.trim().toLowerCase()
    if (search.length > 0){
      foundUsers = users.filter((user) => {
        return user.username.toLowerCase().match(search);
      })
    }
    const searchedUsers = foundUsers.map((user, index) => {
      return <li onClick={ () => this.handleSelected(user) } key={ index }>{ user.username }</li>
    })

    return (
      <div>
        <div>
          <input
            type="text"
            value={this.state.searchString}
            ref="search"
            onChange={this.handleChange}
            placeholder="type name here"
          />
          <ul>
            {  searchedUsers }
          </ul>
        </div>
      </div>
    )
  }

}

export default UserSearch;

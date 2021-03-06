import React from "react";
import CardList from "./components/card-list/card-list-component";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const FilteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <input
          type="search"
          placeholder="input monster name"
          name="searchField"
          onChange={e => this.setState({ searchField: e.target.value })}
          value={this.state.searchField}
        />
        <CardList monsters={FilteredMonsters} />
      </div>
    );
  }
}

export default App;

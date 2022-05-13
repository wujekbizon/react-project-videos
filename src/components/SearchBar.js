import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="search">Search</label>
            <input
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              id="search"
              type="text"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

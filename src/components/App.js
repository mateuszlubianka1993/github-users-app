import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import UserDisplay from './UserDisplay';

class App extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <SearchBar />
        <UserDisplay />
      </div>
    );
  };
}

export default App;

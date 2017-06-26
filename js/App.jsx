import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar.jsx';
import CatHead from './CatHead.jsx';
import CatTable from './CatTable.jsx';


class App extends React.Component {
  render () {
    return (
      <section>
              <SearchBar />
       <section>
              <table>
                  <CatHead />
                  <CatTable />
              </table>
              </section>
          </section>
    )
  }
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';


class CatTable extends React.Component {
  render () {
     console.log(this.props.kitties);

     const male = this.props.kitties.filter(cat => {
       return cat.category === 'male';
     });

     const maleRows = male.map(cat => {
       return (<tr key={cat.name}>
          <td>{cat.name}</td>
          <td>{cat.age}</td>
          </tr>
       );
     })

    return (
      <tbody>
          {maleRows}
          <tr>
              <th colSpan="2">female</th>
          </tr>
          <tr>
              <td>Ciapek</td>
              <td>4</td>
          </tr>
      </tbody>

            )
          }
        };

export default CatTable;

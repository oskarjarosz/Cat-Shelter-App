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

     const female = this.props.kitties.filter(cat => {
       return cat.category === 'female';
     });

     const femaleRows = female.map(cat => {
       return (<tr key={cat.name}>
          <td>{cat.name}</td>
          <td>{cat.age}</td>
          </tr>
       );
     })

    return (
      <tbody>
          <tr>
              <th colSpan="2">male</th>
          </tr>
            {maleRows}
          <tr>
              <th colSpan="2">female</th>
          </tr>
            {femaleRows}
      </tbody>

            )
          }
        };

export default CatTable;

import React from 'react';
import '../index.css';

export class Zip extends React.Component {
  render() {
    return (
      <div className="zip">
        <form onSubmit= {(event) => {
          event.preventDefault
        }}>
          <h4>Enter your location here for your forecast</h4>
          <input id= "textbox" type="text" value="City, State (ex. Dallas, TX)"/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
};

export default Zip

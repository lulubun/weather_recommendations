import React from 'react';

export class Zip extends React.Component {
  render() {
    return (
      <div className="zip">
        <form>
          <h4>Enter your location here for your forecast</h4>
          <input type="text" value="City, State (ex. Dallas, TX)"></input>
        </form>
      </div>
    )
  }
}

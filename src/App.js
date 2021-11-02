import React from "react";

class App extends React.Component{
  join = () => {
    console.log('join');
  }

  render(){
    
    return (
      <div className="App">
        <h2>Join / Login</h2>
        <button onClick={this.join}>Join</button>
      </div>
    )
  }
}
export default App;

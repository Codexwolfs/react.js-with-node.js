import logo from "./logo.svg";
import "./App.css";
  
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" 
             alt="logo" />
          
<p>A simple React app.....</p>
<h3>
  rajat payal
</h3>
  
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <form action="../../post" method="post" 
              className="form">
          <button type="submit">Connected to node.js server</button>
        </form>
      </header>
    </div>
  );
}
  
export default App
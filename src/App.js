import "./App.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widget from "./Widget";

function App() {
  return (
    <div className="app">
      {/*Side Bar */}
      <Sidebar />

      {/*Feed */}
      <Feed />
      {/*Widget */}
      <Widget />
    </div>
  );
}

export default App;

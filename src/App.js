import "./styles.css";
import { Tt } from "./components/Timers";

import LoginControl from "./components/LogiinControl";
import Page from "./components/Page";

function App() {
  return (
    <div className="App">
      <Tt />
      <LoginControl />
      <Page />
    </div>
  );
}

export default App;

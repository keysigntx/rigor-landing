import { Router } from "react-router-dom";
import history from "./utils/history";
import Routes from "./Routes";

function App() {
  return (
    <>
      <Router history={history}>
        <Routes />
      </Router>
    </>
  );
}

export default App;

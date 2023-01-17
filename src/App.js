import Cardlist from './components/Cardlist'
import SearchField from "./components/SearchField";
import { RobotProvider } from './context/RobotContext';

function App() {
  return (
    <>
      <RobotProvider>
        <div className="tc">
          <h1 className="f2 white pTitle">I-made Robot Friends</h1>
          <SearchField />
        </div>

        <div
          style={{
            border: "5px solid transparent",
            marginTop: "25px",
            height: "800px",
          }}
        >
          <Cardlist />
        </div>
      </RobotProvider>
    </>
  );
}

export default App;

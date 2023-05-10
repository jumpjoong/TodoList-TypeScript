import Main from './component/Main';
import { Context } from './context/Context';

function App() {
  return (
    <div className="App">
      <Context>
        <Main />
      </Context>
    </div>
  );
}

export default App;

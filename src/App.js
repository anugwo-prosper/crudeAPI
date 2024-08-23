
import CrudeApi from './Crude';
import './App.css';
import ApiList from './components/ApiList';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <>
      <CrudeApi>
        <Form />
          <ApiList/>
      </CrudeApi>
      </>
    </div>
  );
}

export default App;

import './App.css';
import Forms from './Forms'
import Data from "./components/Data";

function App() {
  return (
    <>
      <section>
        <Forms/>
        <h1>O nome é {Data[0]}</h1>
      </section>
    </>
  );
}

export default App;

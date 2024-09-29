import { BrowserRouter as Router } from "react-router-dom";
import MasterLayout from './component/MasterLayout/MasterLayout';
import RandomShapes from './component/utility/RandomShapes'; // Import RandomShapes

function App() {
  return (
    <>
      <Router>
        <div className="relative z-10"> 
          <MasterLayout />
        </div> 
         <RandomShapes /> 
      </Router>
    </>
  );
}

export default App;

// Import necessary libraries and components
import { BrowserRouter as Router } from "react-router-dom";
import MasterLayout from './component/MasterLayout/MasterLayout'; // Ensure correct import path

function App() {
  return (
    <>
      <Router>
        {/* Wrapping MasterLayout in a relative container for layering */}
        <div className="relative z-10">
          <MasterLayout />
        </div> 
      </Router>
    </>
  );
}

export default App;

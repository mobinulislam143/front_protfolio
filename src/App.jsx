// Import necessary libraries and components
import { BrowserRouter as Router } from "react-router-dom";

import MasterLayout from './component/MasterLayout/MasterLayout'; // Adjust the path if needed
import Particalesbg from './component/utility/Particalesbg'

function App() {


  return (
    <Router>
      <div className="relative">
        {/* Background particles */}
          <Particalesbg/>
        {/* Main layout */}
        <div className="relative z-10 ">
       
          <MasterLayout />
        </div>
      </div>
    </Router>
  );
}

export default App;

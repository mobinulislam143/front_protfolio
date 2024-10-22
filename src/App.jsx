import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MasterLayout from './component/MasterLayout/MasterLayout';
import Particalesbg from './component/utility/Particalesbg';
import FullScreenLoader from './component/utility/FullScreenLoader';
// import AnimatedCursor from "react-animated-cursor"
import mernsound from './assets/mernaudio.mp3'

// Define the fetchData function (mock example)
const fetchData = async () => {

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: { /* your fetched data here */ } });
    }, 2000); // Simulating a 2-second delay for fetching data
  });
};

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from API or database
    fetchData()
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Change body styles based on loading state
    if (loading) {
      document.body.style.backgroundColor = '#111827';
      document.body.style.overflow = 'hidden'; // Prevents scrolling while loading
      document.body.style.width = '100%';
    } else {
      document.body.style.backgroundColor = '';
      document.body.style.overflow = '';
      document.body.style.width = '';
    }
    // Clean up the effect when the component unmounts or updates
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.overflow = '';
      document.body.style.width = '';
    };
  }, [loading]);

  return (
    <Router>
      <div className="relative">
        {loading ? (
          <FullScreenLoader loading={loading} />
        ) : (
          <>
            <Particalesbg />
            <div className="relative z-10">
              <MasterLayout data={data} />
              {/* <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="245, 158 ,11"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        /> */}
            </div>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;

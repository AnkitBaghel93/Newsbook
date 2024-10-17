import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Footer from './components/Footer';

const App = (props) => {

  const [progress, setProgress] = useState(0);
  

  const handleSetProgress = (progressValue) => {
      
        setProgress(progressValue)
  }


  return (
    <Router>

      <div className=" mb-2 bg-secondary-subtle text-secondary-emphasis  ">
        <Navbar />
        <LoadingBar
          height={2}
          color='#f11946'
          progress={progress} />

        <Routes>
          
          <Route exact path="/" element={<Navigate to="/general" replace />} />
          <Route exact path="/business" element={<News setProgress={handleSetProgress} key="business" pageSize={9} country="us" category="business" />}></Route>
          <Route exact path="/entertainment" element={<News setProgress={handleSetProgress} key="entertainment" pageSize={9} country="us" category="entertainment" />}></Route>
          <Route exact path="/general" element={<News setProgress={handleSetProgress} key="general" pageSize={9} country="us" category="general" />}></Route>
          <Route exact path="/health" element={<News setProgress={handleSetProgress} key="health" pageSize={9} country="us" category="health" />}></Route>
          <Route exact path="/science" element={<News setProgress={handleSetProgress} key="science" pageSize={9} country="us" category="science" />}></Route>
          <Route exact path="/sports" element={<News setProgress={handleSetProgress} key="sports" pageSize={9} country="us" category="sports" />}></Route>
          <Route exact path="/technology" element={<News setProgress={handleSetProgress} key="technology" pageSize={9} country="us" category="technology" />}></Route>
        </Routes>
        
        <Footer/>
      </div>
    </Router>
  )
}
export default App















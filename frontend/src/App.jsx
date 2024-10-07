import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import HomeContainer from './HomeContainer'
import Resume from './Resume';
import ContactMe from './ContactMe';



function App() {
  

  return (
    <>
      <div >
      
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<ContactMe/>}/>
      </Routes>
    

      </div>
      
    </>
  )
}

export default App


import Navbar from './components/navbar'
import Card from './components/card'
import './App.css'
import Footer from './components/footer'
import { BrowserRouter as  Router, Routes, Route } from "react-router-dom";
import Model from './components/model';
import { useState } from 'react';
import { IoIosCloseCircle } from "react-icons/io";
import AddProduct from './components/addProducts';
import Carousel from './components/crausal';
function App() {
  const [openModel, setOpenModel] = useState(false);
  
  

  return (
    <>
     {openModel && (
        <Model>
          <div className="bg-white w-2/6 rounded-md p-4">
            <div className="flex justify-end">
              <IoIosCloseCircle
                onClick={() => setOpenModel(false)}
                className="text-[#000435] text-xl cursor-pointer"
              />
            </div>
            <AddProduct />
          </div>
        </Model>
      )}

      <Router> {/* Ensure only one Router is used */}
      
        <Navbar />
        
        
        
        <Routes> {/* Use Routes instead of Router here */}
          <Route path="/" element={<><Carousel /><button
        onClick={() => setOpenModel(true)}
        className="bg-[#000435] text-white h-9 w-9 rounded-full m-5 cursor-pointer"
      >
        Add
      </button><Card /><Footer /> </>} />
          <Route path="/about" element={<></>} />
          <Route path="/contact" element={<></>} />
          <Route path="*" element={<></>} /> {/* Handles unknown routes */}
        </Routes>
        
        
      
    </Router>
      
    </>
  )
}

export default App

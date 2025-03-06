import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1000)
  }

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert("Dark Mode has been enabled", "success")
      document.title = 'TextUtils - Dark Mode';
      setInterval(()=> {
        document.title = 'TextUtils is Amazing';
      },2000)
      setInterval(()=> {
        document.title = 'Install TextUtils Now';
      },1500)
    }
    else if(mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Light Mode has been enabled', "success")
      document.title = 'TextUtils - Light Mode';
    }
    
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="MyAPP" aboutText = "About Us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3" >
      {/* <Routes>
      <Route exact path="/about" element={<About />} /> */}
      {/* <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />}/>   */}
      <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} /> {/*Later comment this out */}
      {/* </Routes> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;

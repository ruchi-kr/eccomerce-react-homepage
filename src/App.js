import Home from './Home'                            //importing Home
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";    //importing router from react-router-dom
function App() {                                //App functional component
  return (
   <>
   <Router>                                                 {/*BrowserRouter as Router*/}
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
   </Router>
   </>
  );
}

export default App;                                      //exporting App

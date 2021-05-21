import { Contacts } from "./Components/Contacts/Contacts";
import { Home } from "./Components/Home/Home";
import { Projects } from "./Components/Projects/Projects";
import { BrowserRouter, Route } from 'react-router-dom'
import Nav from "./Components/Navbar/Nav";
import './App.css'
import { Cv } from "./Components/Cv/Cv";
import Certificate from "./Components/Certificates/Certificate";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Route exact path="/pratapprofile"><Home /></Route>
        <Route path="/projects"><Projects /></Route>
        <Route path="/contact"><Contacts /></Route>
        <Route path="/cv"><Cv /></Route>
        <Route path="/certificates"><Certificate /></Route>




      </BrowserRouter>
    </div>
  );
}

export default App;

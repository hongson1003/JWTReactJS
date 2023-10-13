import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Container/Client/Home';
import Login from './Component/Login';
// Bootstrap CSS
import 'bootstrap/scss/bootstrap.scss';

function App() {
  return (
    <div className="App color-change">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

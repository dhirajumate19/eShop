import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Checkout from "./Component/Checkout/Checkout";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Basketprovider from "./Store/BasketReducer";

function App() {
  return (
    <Basketprovider>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/checkout" element={<Checkout />}></Route>
          </Routes>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Basketprovider>
  );
}

export default App;

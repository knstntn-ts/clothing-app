import Home from "./components/routes/home/home.component";
import Navigation from "./components/routes/navigation/navigation.component";
import Signin from "./components/routes/signin/signin.component";
import { Route, Routes } from "react-router-dom"



const Shop = () => {
  return (
    <h1>I am shop</h1>
  )
}

function App() {

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>

        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<Signin />} />

      </Route>
    </Routes>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Header from "./components/headercomponent";
import Body from "./components/bodycomponent";
import Footer from "./components/footercomponent";
function App() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );

}

export default App;

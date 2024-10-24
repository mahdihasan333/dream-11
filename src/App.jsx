import { useEffect } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Players from "./components/Players";

function App() {
  


  return (
    <>
      {/* Header Section */}
      <Header></Header>
      {/* Banner Section */}
      <Banner></Banner>
      {/* Main Section */}
      <Players></Players>
      {/* Footer Section */}
    </>
  );
}

export default App;

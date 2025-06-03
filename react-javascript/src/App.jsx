// import { useEffect } from "react";
// import axiosCustomize from "./utils/axios.customize";
import Header from "./components/layout/header";
import { Outlet } from "react-router";

function App() {
  // useEffect(() => {
  //   const fetchHelloWorld = async () => {
  //     const res = await axiosCustomize.get(`/v1/api/`)
  //     console.log(">>>check res: ", res);
  //   }
  //   fetchHelloWorld()
  // }, [])

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default App;

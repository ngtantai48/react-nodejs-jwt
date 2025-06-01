import { useEffect } from "react"
import axiosCustomize from "./utils/axios.customize"

function App() {
  useEffect(() => {
    const fetchHelloWorld = async () => {
      const res = await axiosCustomize.get(`/v1/api/`)
      console.log(">>>check res: ", res);
    }
    fetchHelloWorld()
  }, [])

  return (
    <>
      hello world
    </>
  )
}

export default App

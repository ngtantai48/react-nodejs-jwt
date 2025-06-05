import { useContext, useEffect } from "react";
import axiosCustomize from "./utils/axios.customize";
import Header from "./components/layout/header";
import { Outlet } from "react-router";
import { AuthContext } from "./components/context/auth.context";
import { Spin } from 'antd';

function App() {
  const { setAuth, appLoading, setAppLoading } = useContext(AuthContext);

  useEffect(() => {
    const fetchAccount = async () => {
      setAppLoading(true);
      const res = await axiosCustomize.get(`/v1/api/account`);
      if (res && !res.message) {
        setAuth({
          isAuthenticated: true,
          user: {
            email: res.mail,
            name: res.name
          }
        })
      }
      setAppLoading(false);
    }
    fetchAccount()
  }, [])

  return (
    <div>
      {appLoading === true ?
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}>
          <Spin size="large" />
        </div>
        :
        <>
          <Header />
          <Outlet />
        </>
      }
    </div>
  )
}

export default App;

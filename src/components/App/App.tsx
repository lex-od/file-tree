import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Layout } from "components/Layout/Layout";
import { Home } from "components/Home/Home";

export const App = () => {
  return (
    <>
      <Layout>
        <Home />
      </Layout>

      <ToastContainer />
    </>
  );
};

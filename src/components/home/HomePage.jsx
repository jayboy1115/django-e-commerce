import Header from "./Header";
import CardContainer from "./CardContainer";
import api from "../../api";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    api.get("/products") // Ensure the correct endpoint is passed as a string
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <Header />
      <CardContainer />
    </>
  );
};

export default HomePage;

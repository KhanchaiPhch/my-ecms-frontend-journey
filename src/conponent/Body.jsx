import React from "react";
import { Headers } from "./Header";
// import { Footers } from "./Footer";
import { Displays } from "./Display";
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';

export const Bodys = ({ setToken }) => {

  return (
    <>
      {/* <Container>  */}
        <Headers setToken={setToken} />
        <Displays />
        {/* <Footers /> */}
      {/* </Container> */}
    </>
  );
}
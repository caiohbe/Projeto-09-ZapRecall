import React from "react";
import Header from "./Header";
import Cards from "./Cards";
import Footer from "./Footer";
import styled from "styled-components";

export default function App() {
    return (
        <Container>
            <Header />
            <Cards />
            <Footer />
        </Container>
    )
}

const Container = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
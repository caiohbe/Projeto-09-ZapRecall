import React from "react";
import Header from "./Header";
import Cards from "./Cards";
import styled from "styled-components";
import Footer from "./Footer";

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
    *{
	box-sizing: border-box;
    }
    background-color: #FB6B6B;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #333333;
    font-family: 'Recursive', sans-serif;
    margin-bottom: 100px;
`
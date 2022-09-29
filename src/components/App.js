import Header from "./Header";
import FlashCards from "./FlashCards";
import styled from "styled-components";
import Footer from "./Footer";
import deck1 from "./Deck1";
import React from "react";


export default function App() {
    const [cardsQtt, setCardsQtt] = React.useState(deck1.length)
    const [done, setDone] = React.useState([])
    const [gotIncorrect, setGotIncorrect] = React.useState([])
    const [gotAlmost, setGotAlmost] = React.useState([])
    const [gotCorrect, setGotCorrect] = React.useState([])

    return (
        <Container>
            <Header />
            {deck1.map((card, i) => { return (
                <FlashCards 
                index={i}
                question={card.q}
                answer={card.a}
                done={done}
                setDone={setDone}
                key={i.toString()}
                gotIncorrect={gotIncorrect}
                setGotIncorrect={setGotIncorrect}
                gotAlmost={gotAlmost}
                setGotAlmost={setGotAlmost}
                gotCorrect={gotCorrect}
                setGotCorrect={setGotCorrect}
                />)
            })}
            <Footer done={done} />
        </Container>
    )
}

const Container = styled.div`
    * {
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
    margin-bottom: 80px;
`
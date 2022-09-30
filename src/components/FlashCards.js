import React from "react";
import styled from "styled-components";
import turn from "../assets/img/seta_virar.png"
import playIcon from "../assets/img/seta_play.png"
import incorrectIcon from "../assets/img/icone_erro.png"
import almostIcon from "../assets/img/icone_quase.png"
import correctIcon from "../assets/img/icone_certo.png"

export default function FlashCards(props) {
    const [hideUnflipped, setHideUnflipped] = React.useState(false)
    const [hideQuestion, setHideQuestion] = React.useState(true)
    const [hideAnswer, setHideAnswer] = React.useState(true)
    const [icon, setIcon] = React.useState(playIcon)


    return (
        <>
            <Unflipped gotIncorrect={props.gotIncorrect} gotAlmost={props.gotAlmost} gotCorrect={props.gotCorrect} index={props.index} done={props.done} onClick={() => flip(props.done, props.index)} hide={hideUnflipped}>Pergunta {props.index + 1} <img src={icon} alt="icon"/></Unflipped>
            <Question onClick={seeAnswer} hide={hideQuestion}>{props.question} <img src={turn} alt="turn"/></Question>
            <Answer hide={hideAnswer}>
                <span>{props.answer}</span>
                <Buttons>
                    <Button onClick={() => getIncorrect(props.index, props.setGotIncorrect, props.gotIncorrect, props.setDone, props.done)}>
                        Não<br/>Lembrei
                    </Button>
                    <Button onClick={() => getAlmost(props.index, props.setGotAlmost, props.gotAlmost, props.setDone, props.done)}>
                        Quase Não Lembrei
                    </Button>
                    <Button onClick={() => getCorrect(props.index, props.setGotCorrect, props.gotCorrect, props.setDone, props.done)}>
                        Zap!
                    </Button>
                </Buttons>
            </Answer>
        </>
    )

    function flip(done, index) {
        if (done.includes(index)) {
            return
        }
        setHideUnflipped(!hideUnflipped)
        setHideQuestion(!hideQuestion)
    }

    function seeAnswer() {
        setHideQuestion(!hideQuestion)
        setHideAnswer(!hideAnswer)
    }

    function getIncorrect(index, setGotIncorrect, gotIncorrect, setDone, done) {
        setHideAnswer(!hideAnswer)
        setHideUnflipped(!hideUnflipped)
        setGotIncorrect([...gotIncorrect, index])
        setIcon(incorrectIcon)
        setDone([...done, index, 'incorrect'])
    }

    function getAlmost(index, setGotAlmost, gotAlmost, setDone, done) {
        setHideAnswer(!hideAnswer)
        setHideUnflipped(!hideUnflipped)
        setGotAlmost([...gotAlmost, index])
        setIcon(almostIcon)
        setDone([...done, index, 'almost'])
    }

    function getCorrect(index, setGotCorrect, gotCorrect, setDone, done) {
        setHideAnswer(!hideAnswer)
        setHideUnflipped(!hideUnflipped)
        setGotCorrect([...gotCorrect, index])
        setIcon(correctIcon)
        setDone([...done, index, 'correct'])
    }

    // function unflip() {
    //     setHideAnswer(!hideAnswer)
    //     setHideUnflipped(!hideUnflipped)
    // }
}

function selectColor(index, gotIncorrect, gotAlmost, gotCorrect) {
    if(gotIncorrect.includes(index)) {
        return '#FF3030'
    } else if(gotAlmost.includes(index)) {
        return '#FF922E'
    } else if(gotCorrect.includes(index)) {
        return '#2FBE34'
    }
}

const Unflipped = styled.div`
    text-decoration: ${props => props.done.includes(props.index)? 'line-through' : ''};
    color: ${props => selectColor(props.index, props.gotIncorrect, props.gotAlmost, props.gotCorrect)};
    display: ${props => props.hide ? 'none' : 'flex'};
    justify-content: space-between;
    align-items: center;
    height: 65px;
    width: 80%;
    background-color: #FFFFFF;
    border-radius: 5px;
    box-shadow: 0px 4px 5px 0px #00000026;
    margin-bottom: 25px;
    padding: 15px;
    font-size: 16px;
    line-height: 19px;
    font-weight: 700;

    img {
        height: 22px;
        color: #333333;
    }
`

const Question = styled.div`
    display: ${props => props.hide ? 'none' : ''};
    height: 130px;
    width: 80%;
    background: #FFFFD4;
    border-radius: 5px;
    box-shadow: 0px 4px 5px 0px #00000026;
    margin-bottom: 25px;
    padding: 15px;
    font-size: 16px;
    line-height: 19px;
    font-weight: 400;
    position: relative;

    img {
        height: 15px;
        position: absolute;
        bottom: 15px;
        right: 15px;
    }

`

const Answer = styled.div`
    display: ${props => props.hide ? 'none' : 'flex'};
    flex-direction: column;
    justify-content: space-between;
    height: 130px;
    width: 80%;
    background-color: #FFFFD4;
    border-radius: 5px;
    box-shadow: 0px 4px 5px 0px #00000026;
    margin-bottom: 25px;
    padding: 15px;
    font-size: 16px;
    line-height: 19px;
    font-weight: 400;
`

const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    & div:nth-child(1) {
        background-color: #FF3030;
    }

    & div:nth-child(2) {
        background-color: #FF922E;
    }

    & div:nth-child(3) {
        background-color: #2FBE34;
    }


`

const Button = styled.div`
    width: 88px;
    height: 36px;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    border-radius: 5px;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
`
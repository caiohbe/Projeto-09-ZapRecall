import styled from "styled-components";
import play from "../assets/img/play-outline-icon.svg"
export default function Cards() {
    return (
        questions.map((q) => {
            return (
                <Unflipped>
                    Pergunta {questions.indexOf(q)+1}
                    <img src={play} alt="PlayButton"/>
                </Unflipped>)
        })
    )
}

const questions = ['0?', '1?', '2?', '3?', '4?', '5?', '6?', '7?'];

const Unflipped = styled.div`
    height: 65px;
    width: 80%;
    background-color: #FFFFFF;
    border-radius: 5px;
    box-shadow: 0px 4px 5px 0px #00000026;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    padding: 15px;
    font-size: 16px;
    line-height: 19px;
    font-weight: 700;

    img {
        height: 30px;
        color: #333333;
    }
`
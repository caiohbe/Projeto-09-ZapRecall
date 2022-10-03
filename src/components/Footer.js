import styled from "styled-components"
import incorrectIcon from "../assets/img/icone_erro.png"
import almostIcon from "../assets/img/icone_quase.png"
import correctIcon from "../assets/img/icone_certo.png"
import React from "react"

export default function Footer(props) {
    let arr = ['','','','','','','','']
    return (
        <Bottom>
            <h3 data-identifier="flashcard-counter">{props.done.length/2}/8 CONCLUÍDO</h3>
            <div>
                <Icon done={props.done}/>
            </div>
        </Bottom>
    )
    
    function Icon(props) {
        props.done.forEach((e, i) => {
            if (i % 2 !== 0) {
                arr[props.done[i-1]] = e
            }
        }) 

        return arr.map((e) => {
            switch (e) {
                case 'incorrect':
                    return <img src={incorrectIcon} />
                    break;
                
                case 'almost':
                    return <img src={almostIcon} />
                    break
                
                case 'correct':
                    return <img src={correctIcon} />
                    break

                default:
                    break;
            }
        })
    }
}

const Bottom = styled.div`
    position: fixed;
    bottom: 0; 
    width: 100vw;
    height: 80px;
    background-color: #FFFFFF;
    box-shadow: 0px -4px 6px 0px #0000000D;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    display: flex;
    flex-direction: column;

    img {
    padding: 2px;
    } 


`
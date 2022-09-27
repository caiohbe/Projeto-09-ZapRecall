import styled from "styled-components"

export default function Footer() {
    return (
        <Bottom>
            X/Y CONCLUÍDOS
        </Bottom>
    )
}

const Bottom = styled.div`
    position: fixed;
    bottom: 0; 
    width: 100vw;
    height: 110px;
    background-color: #FFFFFF;
    box-shadow: 0px -4px 6px 0px #0000000D;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
`
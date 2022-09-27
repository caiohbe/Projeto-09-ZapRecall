import React from "react"
import ZapLogo from "../assets/img/logo.png"
import styled from "styled-components"

export default function Header() {
    return (
        <Logo>
            <img src={ZapLogo} alt="Zap" />
            ZapRecall
        </Logo>
    )
}

const Logo = styled.div`
    color: white;
    font-size: 36px;
    line-height: 45px;
    letter-spacing: -0.012em;
    text-align: center;
    display: flex;
    align-items: center;
    font-family: 'Righteous', cursive;
    margin-top: 50px;
    margin-bottom: 50px;
    
    img {
        margin-right: 18px;
    }

`
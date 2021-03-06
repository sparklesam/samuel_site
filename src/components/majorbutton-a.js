import React from "react"
import styled from "styled-components"

const Text = styled.small`
    font-size: 16px;
    color: ${props => props.textColor || "white"};
    text-decoration: none;
`

const Button = styled.button`
    background-color: ${props => props.bgColor || "navy"};
    padding: 10px 25px;
    border: none;
    margin-bottom: 10vh;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color ease-in-out 0.2s;

    &:hover {
        background-color: blueviolet;
    }
`

const MajorButton = props => (
    <a href={props.href}>
    <Button style={{backgroundColor:`${props.bgColor}`, color:`${props.textColor}`}}>
            <Text style={{color:`${props.textColor}`}}>{props.text}</Text>
    </Button>
   </a>
)

export default MajorButton
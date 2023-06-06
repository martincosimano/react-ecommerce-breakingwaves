import React from 'react'
import Main from '../components/Shop/Main'
import '../styles/routes/shop.css'

export default function Shop(props) {
    return (
        <Main checkItem={props.checkItem}></Main>
    )
}
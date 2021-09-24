import React from 'react'
import './home.scss'
import {Navbar, Featured, List} from '../../components'

const Home = () => {
    return (
        <div className="home">
            <Navbar/>
            <Featured/>
            <List/>
            <List/>
            <List/>
            <List/>
        </div>
    )
}

export default Home

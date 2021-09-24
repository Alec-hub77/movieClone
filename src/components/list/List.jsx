import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons'
import React from 'react'
import './list.scss'
import ListItem from '../listItem/ListItem'

const List = () => {
    const [slideNumber, setSlideNumber] = React.useState(0)
    const [isMoved, setIsMoved] = React.useState(false)
    const listRef = React.useRef()

    const handleClick = (direction) => {
        setIsMoved(true)
        let distance = listRef.current.getBoundingClientRect().x -50;
        if(direction === "left" && slideNumber > 0) {
            listRef.current.style.transform = `translateX(${230 + distance}px)`
            setSlideNumber(slideNumber -1)
        }
        if (direction === "right" && slideNumber < 5) {
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
            setSlideNumber(slideNumber +1)
        }
        
        
    }
    return (
        <div className="list">
            <span className="listTitle">Continue to watch</span>
            <div className="wrapper">
                <ArrowBackIos className="sliderArrow left" onClick={() => handleClick("left")} style={{display: !isMoved && "none"}}/>
                    <div className="container" ref={listRef}>
                        <ListItem index={0} />
                        <ListItem index={1}/>
                        <ListItem index={2}/>
                        <ListItem index={3}/>
                        <ListItem index={4}/>
                        <ListItem index={5}/>
                        <ListItem index={6}/>
                        <ListItem index={7}/>
                        <ListItem index={8}/>
                        <ListItem index={9}/>
                    </div>
                <ArrowForwardIos className="sliderArrow right" onClick={() => handleClick("right")}/>
            </div>
        </div>
    )
}

export default List

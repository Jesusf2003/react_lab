import { useEffect, useState } from 'react';
import './styles.css'

const ComponentB = () => {

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new
                Date());
        }, 1000); // Update every second

        return () => clearInterval(intervalId);
    }, []);

    return (<div className='title-container'>
        <div className='show-hour'>
            <p style={{flex: 1,  color: '#ffffff'}}>Fecha: {currentTime.getDay()}/{currentTime.getMonth()}/{currentTime.getFullYear()}</p>
            <p style={{flex: 1, color: '#ffffff'}}>Hora: {currentTime.getHours()}:{currentTime.getMinutes()}:{currentTime.getSeconds()}</p>
        </div>
        <div>
            <h2 className='title-b'>Características de React</h2>
            <div className='row'>
                <div class="col-md-4">
                    <img src='../img/demo1.jpg' width={"250px"} height={"150px"}></img>
                </div>
                <div class="col-md-4">
                    <img src='../img/demo1.jpg' width={"250px"} height={"150px"}></img>
                </div>
                <div class="col-md-4">
                    <img src='../img/demo1.jpg' width={"250px"} height={"150px"}></img>
                </div>
            </div>
        </div>
        <div>
            <h2 className='title-b'>¿Qué podemos hacer con React?</h2>
            <div className='row'>
                <div class="col-md-3">
                    <img src='../img/demo1.jpg' height={"150px"} width={"300px"}></img>
                </div>
                <div class="col-md-3">
                    <img src='../img/demo1.jpg' height={"150px"} width={"300px"}></img>
                </div>
                <div class="col-md-3">
                    <img src='../img/demo1.jpg' height={"150px"} width={"300px"}></img>
                </div>
                <div class="col-md-3">
                    <img src='../img/demo1.jpg' height={"150px"} width={"300px"}></img>
                </div>
            </div>
        </div>
    </div>);
}

export default ComponentB;
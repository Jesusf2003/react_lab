import './styles.css'

const ComponentA = () => {
    return (<div className="title-container">
        <div>
            <h2 className="title">React JS</h2>
            <div className='bg-main'>
                <img className='main' src='../img/demo1.jpg' height={"250px"} width={"800px"}></img>
            </div>
        </div>
    </div>);
}

export default ComponentA;
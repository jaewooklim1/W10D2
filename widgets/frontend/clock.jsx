import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(),

        }
    this.tick = this.tick.bind(this);
    }

    render() {
        return (<div className='clock'>
            <h1>Clock</h1>
                
                {/* Time: {this.state.time.toTimeString()} */}
                Time: {this.state.time.getHours()}:{this.state.time.getMinutes()}:{this.state.time.getSeconds()} EST

                <br/>
                <br/>   
                Date: {this.state.time.toDateString()} 
                
               
        </div>
        )
    }

    tick() {
        this.setState({time: new Date()});
    }

    componentDidMount() {
        this.intervalID = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

}

export default Clock;
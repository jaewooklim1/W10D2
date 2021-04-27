import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(),

        }
    // this.tick = this.tick.bind(this);
    }

    render() {
        return (<div className='clock'>
            <h1>Clock</h1>
        </div>
        )
    }

}

export default Clock;
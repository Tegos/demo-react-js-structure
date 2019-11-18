import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        console.log('Home Page');
    }

    render() {
        return (
            <div>
                <h2>List of users:</h2>
            </div>
        );
    }
}

export default Home;
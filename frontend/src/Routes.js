import React from 'react'; 
import Route from './Route';

export default class Routes extends React.Component {

    constructor(props) {
        super(props);

        this.state = {routes: []};
    }

    componentDidMount() {
        fetch("http://localhost:3000")
        .then(response => response.json())
        .then(data => {
            this.setState({ routes: data });
        })
        .catch((error) => {
          console.error(error)
        })
    }

    render() {
        return (
            <ul>
                {this.state.routes.map(route => {
                    return <li><Route title={route.title} start={route.startPosition} end={route.endPosition}></Route></li>
                })}
            </ul>
        )

    }
    
}

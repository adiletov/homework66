import React, {Component} from 'react';
import Header from "../Component/Header/Header";

class Layuot extends Component {
    render() {
        return (
            <div>
                <Header/>
                {this.props.children}
            </div>
        );
    }
}

export default Layuot;
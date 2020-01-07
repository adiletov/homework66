import React, {Component} from 'react';
import Layuot from "../Layout/Layuot";
import {Route,  Switch} from "react-router-dom";
import Add from "../Component/Blog/Blog";
import Posts from "../Component/Posts/Posts";

class Content extends Component {
    render() {
        return (
            <div>
                <Layuot>
                    <Switch>
                        <Route path="/Add" exact component={Add}/>
                        <Route path="/Posts" exact component={Posts}/>
                    </Switch>
                </Layuot>
            </div>
        );
    }
}

export default Content;
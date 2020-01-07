import React, {Component} from 'react';
import axiosApi from "../../AxiosApi";
import {Button, Card, CardBody, Collapse, } from "reactstrap";
import withErrorHandler from "../../Hoc/withErrorHandler/withErrorHandler";
import {Categories} from "../../Categories";
import './posts.css'
class Posts extends Component {
    state={
       isOpen: false,
       onePost: null,
        loading: false
    };


    deletePost=async (c, id)=>{
        await axiosApi.delete('/posts/'+ c + '/' + id + '.json');
        this.openCard()
    };


    openCard = async (id) =>{
        const res = await axiosApi.get('/posts/' + id + '.json');
        this.setState({onePost: res.data});
            this.setState({isOpen: true})
    };

    render() {
        return (
            <div>
                {Categories.map(c=>  <Button className="btn" key={c} color="primary" onClick={()=>this.openCard(c)}  style={{ marginBottom: '1rem' }}>{c}</Button>)}
                <Collapse isOpen={this.state.isOpen}>
                    {this.state.onePost ? Object.keys(this.state.onePost).map(id=>
                        <Card key={id}>
                            <CardBody>
                                <h3>{this.state.onePost[id].user}</h3>
                                <span>{this.state.onePost[id].dateTime}</span>
                                <p>{this.state.onePost[id].message}</p>
                                <button onClick={()=>this.deletePost(this.state.onePost[id].category, id)}>Delete</button>
                            </CardBody>
                        </Card>): <div>No posts</div>}
                </Collapse>
            </div>
        );
    }
}

export default withErrorHandler(Posts, axiosApi) ;
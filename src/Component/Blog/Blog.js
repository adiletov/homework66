import React, {Component} from 'react';
import axiosApi from "../../AxiosApi";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import {Categories} from "../../Categories";

class Add extends Component {
    state={
      user: '',
      dateTime: new Date(),
      message: '',
        category: Categories[0],
    };

    getValInp=(e)=>{
        this.setState({[e.target.name] : e.target.value})
    };

    postMessage = async ()=>{
        const post = {
            user: this.state.user,
            message: this.state.message,
            dateTime: this.state.dateTime,
            category: this.state.category,
        };
        const c = this.state.category;
        await axiosApi.post('/posts/'+ c +'.json', post);
        this.props.history.replace('/posts')
    };



    render() {
        return (
            <div>
                <Form>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input type="email" name="user"  placeholder="with a placeholder" value={this.state.user} onChange={this.getValInp} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input type="textarea" name="message"  placeholder="with a placeholder" value={this.state.message} onChange={this.getValInp} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Select</Label>
                        <Input type="select" name="category" value={this.state.category} onChange={this.getValInp}>
                            {Categories.map(c=> <option key={c} >{c}</option>)}
                        </Input>
                    </FormGroup>
                </Form>
                <Button onClick={this.postMessage} color="success">success</Button>

            </div>
        );
    }
}

export default Add;
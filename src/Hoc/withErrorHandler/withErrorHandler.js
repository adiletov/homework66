import React, {Component, Fragment} from "react";
import {Modal} from "reactstrap";


const withErrorHandler = (WrappedComponent, axios ) =>{
    return class withError extends Component{
       constructor(props){
           super(props);

           this.state={
               error: null,
               modal: false,
               interceptorsId: '',
           };


          this.state.interceptorsId =  axios.interceptors.response.use(res=> res  , error => {
               this.setState({error, modal: true});
               throw error;
           });
       }
       componentWillUnmount() {
           axios.interceptors.response.eject(this.state.interceptorsId)
       }

        modalClose=()=>{
           this.setState({modal: false})
        };


        render() {
            return (
                <Fragment>
                    <WrappedComponent {...this.props}/>
                    {this.state.error ?
                        <Modal isOpen={this.state.modal}>
                            <div>
                                <h3>{String(this.state.error)}</h3>
                            </div>
                            <button onClick={this.modalClose}>Close</button>
                        </Modal>
                        : null
                    }
                </Fragment>
                )
        }
    }
};
export default withErrorHandler;
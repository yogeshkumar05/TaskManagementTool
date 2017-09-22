import React, {Component} from 'react';
import LoginModal from './LoginModal';
import { connect } from "react-redux"
class LandingPage extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            loginModalShown:false
        };
        this.showLoginModal=this.showLoginModal.bind(this);
    }
    componentWillReceiveProps(nextProps)
    {
        if(nextProps.login!=undefined)
            {
                this.props.updateLoginStatus(nextProps.login)
            }
    }
    showLoginModal()
    {
        this.setState({loginModalShown:true});
    }
    closeLoginModal()
    {
        this.setState({loginModalShown:false});   
    }
    render()
    {
        return(<div className="landing-page">
            <button onClick={this.showLoginModal}>Login</button>
            <LoginModal showModal={this.state.loginModalShown} closeModal={this.closeLoginModal}/>
            </div>)
    }
}
export default connect(state => (
    {
        
        login: state.agencyReducer.login,
    }
))(LandingPage);
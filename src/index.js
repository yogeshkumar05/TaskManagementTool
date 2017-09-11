import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/index.scss';
import {BrowserRouter, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import CreateProject from './components/CreateProject';
import store from './store';
import {Provider} from 'react-redux';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import LandingPage from './components/LandingPage';
import AgencyMain from './components/AgencyMain';
import { connect } from "react-redux"
class InitialRender extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            loginStatus:"logout"
        }

        this.updateLoginStatus=this.updateLoginStatus.bind(this);
    }

    // componentWillReceiveProps(nextProps)
    // {
    //     alert("received"+JSON.stringify(nextProps.login));
    // }
    updateLoginStatus(data)
    {
        // alert("updating"+data)
        this.setState({loginStatus:data})
    }
    render()
    {
        let renderComponent="";
        if(this.state.loginStatus=="logout")
            {
        renderComponent=        <LandingPage updateLoginStatus={this.updateLoginStatus}/>;
            }
if(this.state.loginStatus=="agency")
    {
        renderComponent=<AgencyMain/>
    }
else  if(this.state.loginStatus=="client")
    {
        renderComponent=<ClientMain/>
    }
        return(<div>
           {renderComponent}
            </div>)
    }
}
export default connect(state => (
   // alert("state"+JSON.stringify(state.agencyReducer))
    {
        
        //login: state.agencyReducer.login,
    }
))(InitialRender);




ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
        <div>
            <Route path="/" component={Nav}/>
            <Route exact path="/" component={Home}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/create" component={CreateProject}/>
            
        </div>
    </BrowserRouter>
</Provider>, document.getElementById("container"));

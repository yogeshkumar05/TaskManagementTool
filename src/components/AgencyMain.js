import React from 'react';
import ReactDOM from 'react-dom';
import '../../styles/index.scss';
import {BrowserRouter, Route} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Dashboard from './Dashboard';
import CreateProject from './CreateProject';
import store from '../store';
import {Provider} from 'react-redux';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import LogoutModal from './LogoutModal';
export default function AgencyMain(props)
{
return(<Provider store={store}>
    <BrowserRouter>
        <div>
            <Route path="/" component={Nav}/>
            <Route exact path="/" component={Home}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/create" component={CreateProject}/>
            
        </div>
    </BrowserRouter>
</Provider>);
}

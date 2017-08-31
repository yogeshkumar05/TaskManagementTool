import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/index.scss';
import {BrowserRouter, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import store from './store';
import {Provider} from 'react-redux';


ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
        <div>
            <Route path="/" component={Nav}/>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={ContactUs}/>
        </div>
    </BrowserRouter>
</Provider>, document.getElementById("container"));

import './App.css'
import React from 'react';
import Content from '../components/Content';
import Menu from '../components/Menu';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';

const App = props => (
    <div className = "App">
        <Router>
            <Menu/>
            <Content/>
        </Router>

    
    </div>
)

export default App;
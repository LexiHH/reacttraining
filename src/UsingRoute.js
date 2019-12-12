import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class HomePage extends React.Component{
    render(){
        return <h1>This is the homepage</h1>
    }
}

class LexiPage extends React.Component{
    render(){
        return <h1>This is Lexi's Page</h1>
    }
}

class AboutUsPage extends React.Component{
    render(){
        return <h1>This is the 'About Us' Page</h1>
    }
}

class HiMatthew extends React.Component{
    render(){
        return <h1>Hello Matthew</h1>
    }
}

class App extends React.Component{
    render(){
        return(
            <div>
                <HiMatthew/>
                <Router>
                    <Link to='/home'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/home/Lexi'>Lexi</Link>
                    <div>
                        <Route exact path='/home' component={HomePage}/>
                        <Route exact path='/about' component={AboutUsPage}/>
                        <Route exact path='/home/Lexi' component={LexiPage}/>
                    </div>
                </Router>
            </div>
        )
    }
}
export default App
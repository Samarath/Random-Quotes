import React from 'react';

class ErrorProtect extends React.Component{
    constructor(props){
        super(props);
        this.state = {hasError: false}
    }

    componentDidCatch(){
        this.setState({hasError: true});
    }

    render(){
        if(this.state.hasError){
            return (<div id="quote-box">
                <h1 id="text">Make Sure you have Proper internet connection</h1>
                <div className="btn">
                    <button><a id="tweet-quote">Twitter</a></button>
                    <button id="insta">Instagram</button>
                    <button id="new-quote">Next Quote</button>
                </div>
                    
             </div>)
        }
          return this.props.children;
    }
}

export default ErrorProtect;
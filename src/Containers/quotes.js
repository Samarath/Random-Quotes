import React from 'react';
import ErrorProtect from '../Components/ErrorProtect';
import '../Containers/quote.css'

class RandomQuotes extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            random: '',
            author: '',
            storage: '',
            firstTime: true
        }
        this.generateRandomQuote = this.generateRandomQuote.bind(this);
    }

    getNumber = () => {
        let finalNumber = 0;
        for(let num in this.state.storage.quotes){
            finalNumber = num
        }
        return finalNumber;
    }

    generateRandomQuote(){
        const valueForRandom = this.getNumber();
        const random = Math.floor(Math.random()* valueForRandom);
        const randomQuote = this.state.storage.quotes[random].quote;
        const authorOfQuotes = this.state.storage.quotes[random].author;
        this.setState({
            random: randomQuote,
            author: authorOfQuotes,
            firstTime: false
        })
    }

    checkFunction = () => {
        console.log('work');
    }
    componentDidMount(){
        // https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json ---------------- This URL is taken from FreeCodeCamp project

        fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
        .then(response => response.json())
        .then(quotes => this.setState({storage: quotes})); 
    }

    render(){
        if(typeof this.state.storage === 'string'){
           return (
            <div id="quote-box">
               <h1 id="text">Please wait..</h1>
               <div className="btn">
                   <button><a id="tweet-quote" href="twitter.com/intent/tweet">Twitter</a></button>
                   <button id="insta">Instagram</button>
                   <button id="new-quote" onClick={this.generateRandomQuote}>Next Quote</button>
               </div>
                   
            </div>   
           )
        }else{
            const intialFunctionForQuote = () => {
                const intialQuotelength = this.state.storage.quotes.length;
                const random = Math.floor(Math.random()* intialQuotelength);
                const randomQuote = this.state.storage.quotes[random].quote;
                return randomQuote;
            }

            const intialFunctionForQuote1 = () => {
                const intialQuotelength = this.state.storage.quotes.length;
                const random = Math.floor(Math.random()* intialQuotelength);
                const authorOfQuotes = this.state.storage.quotes[random].author;
                return authorOfQuotes;
            }
            
            return(
             <ErrorProtect>
               <div id="quote-box">
                 <h1 id="text">"{this.state.firstTime? intialFunctionForQuote(): this.state.random}"</h1>
                 <p id="author">--{this.state.firstTime?intialFunctionForQuote1(): this.state.author}</p>
                 <div className="btn">
                     <button><a id="tweet-quote" href="twitter.com/intent/tweet">Twitter</a></button>
                     <button id="insta">Instagram</button>
                     <button id="new-quote" onClick={this.generateRandomQuote}>Next Quote</button>
                 </div>
                    
                </div> 
             </ErrorProtect>   
              
          )
        }
        
    }
}

export default RandomQuotes;
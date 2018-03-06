import React from 'react';
import axios from 'axios';

export class GetQuote extends React.Component{
  constructor(props){
    super(props);
    // The free API only accepts 10 requests per day. Save quote of the day after each successful call
    // https://quotes.rest/#/qod
    this.state = {
      defaultQuote: "We hold ourselves back in ways both big and small, by lacking self-confidence, by not raising our hands, and by pulling back when we should be leaning in.",
      defaultAuthor: "Sheryl Sandberg"
    }
  }
  componentDidMount(){
    axios.get("https://quotes.rest/qod?category=inspire", {
  "Accept": "application/json"})
      .then(res => {
        const quote = res['data']['contents']['quotes'][0]['quote'];
        const author = res['data']['contents']['quotes'][0]['author'];
       
        this.setState({
          defaultQuote: quote,
          defaultAuthor: author
        })
      })
      .catch((error) =>{
        console.log("Quote API Error", error.message);
      });
  }

  render(){
    return(
      <div className="quote-block">
        <h3>"{this.state.defaultQuote}"</h3>
        <p>- {this.state.defaultAuthor}</p>
      </div>
    ) 
  }
}

export default GetQuote;
import React, { Component } from 'react';

export default class WikiAPI extends Component {
    state = {
        wikiUrl: "https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*",
        result: [],
        userLookup: "",
        userResult: []
    }

    componentDidMount() {
        
        fetch(this.state.wikiUrl)//request call
            .then((result) => result.json())//response from API and extract its JSON part
                .then((result) => {
                this.setState({
                    result: result
                })
        });
        
    }
    
    handleChange = (event) => {
        const {name, value} = event.target
      
        this.setState({
          [name]: value
        });
    }

    lookUpWiki = () => {
        const wikiStartUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=";
        const userText = this.state.userLookup.replace(" ", "+");
        const wikiEndUrl = "&format=json&origin=*";

        console.log("user converted text:", userText);

        fetch(wikiStartUrl+userText+wikiEndUrl)//request call
            .then((response) => response.json())//response from API and extract its JSON part
                .then((response) => {
                this.setState({
                    userResult: response
                });
        });
    }

    render() {

        const { result, userLookup, userResult } = this.state;

        let whatToShowAutoFetch = <li>Loading...</li>
        let whatToShowUserFetch = <li>Waiting for user lookup input..</li>

        if (result.length > 0) {
            whatToShowAutoFetch = result.map((entry, index) => {
                return <li key={"auto"+index}>{entry}</li>
              })
        }

        if (userResult.length > 0) {
            whatToShowUserFetch = userResult.map((entry, index) => {
                return <li key={"user"+index}>{entry}</li>
              })
        }

        return (
            <div>
                <h4>componentDidMount</h4>
                <ol>
                    {whatToShowAutoFetch}
                </ol>

                <h4>Wikipedia lookup</h4>
                <input type="text" name="userLookup" value={userLookup} onChange={this.handleChange} />
                <button onClick={this.lookUpWiki}>Lookup</button>
                <ol>
                    {whatToShowUserFetch}
                </ol>
            </div>
            
        );
    }
}
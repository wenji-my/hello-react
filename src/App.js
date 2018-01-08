import React, { Component } from 'react';
import Header from "./components/Header";
import Home from "./components/Home";

class App extends Component {
    constructor() {
        super();
        this.state = {
            headerLink: "HeaderLink"
        }
    }

    //age是从Home组件传过来的
    onGreet(age) {
        alert(age);
    }

    //父组件改变headerLink（然后把headerLink传给Header组件）
    onChangeLink(newName) {
        this.setState({
            headerLink: newName
        })
    }

  render() {
      const user = {
          name : "Bob",
          hobbies: ["Reading","Sports"]
      };
    return (
      <div className={"container"}>
          <div className="row">
              <div className="col-xs-11 col-xs-offset-11">
                  <Header headerLink={this.state.headerLink}/>
              </div>
          </div>
          <div className="row">
              <div className="col-xs-11 col-xs-offset-11">
                  <h1>hello react!</h1>
              </div>
          </div>
          <div className="row">
              <div className="col-xs-11 col-xs-offset-11">
                  <Home name={"Max"} age={12} user={user} greet={this.onGreet}
                        changeLink={this.onChangeLink.bind(this)}>
                      <p>I am child!</p>
                  </Home>
              </div>
          </div>
      </div>
    );
  }
}

export default App;

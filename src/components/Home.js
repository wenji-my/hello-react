import React, { Component } from 'react';

import PropTypes from 'prop-types';

export default class Home extends Component {
    constructor(props){
        super(props);
        //把状态存储在组件的state中
        this.state = {
            age: this.props.age,
            homeLink: "I am HomeLink"
        }
    }

    //改变age的值（通过this.setState()改变this.state中的age）
    onMakeOlder(){
        this.setState({
            age: this.state.age + 1
        });
        console.log(this);
    }

    //调用父组件的函数，把age传过去
    handleGreet() {
        this.props.greet(this.state.age);
    }

    changeLink() {
        this.props.changeLink(this.state.homeLink);
    }

    render() {
        return (
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-xs-11 col-xs-offset-11"}>
                        <div>your name is {this.props.name}, your age is {this.state.age}</div>
                        <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Button</button>
                        {/*<button onClick={() => {this.onMakeOlder()}} className="btn btn-primary">Button</button>*/}
                        <hr/>
                        <button onClick={this.handleGreet.bind(this)} className="btn btn-primary">Greet</button>
                        <hr/>
                        <button onClick={this.changeLink.bind(this)} className="btn btn-primary">Change Link</button>
                        <div>
                            <h4>Hobbies</h4>
                            <ul>
                                {this.props.user.hobbies.map((hobby,i) => <li key={i}>{hobby}</li>)}
                            </ul>
                        </div>
                            <div>{this.props.children}</div>
                    </div>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    user: PropTypes.object,
    children: PropTypes.element.isRequired
};


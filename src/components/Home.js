import React, { Component } from 'react';

import PropTypes from 'prop-types';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            age: this.props.age
        }
    }

    onMakeOlder(){
        this.setState({
            age: this.state.age + 1
        });
        console.log(this);
    }

    render() {
        return (
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-xs-11 col-xs-offset-11"}>
                        <div>your name is {this.props.name}, your age is {this.state.age}</div>
                        <button onClick={() => {this.onMakeOlder()}} className="btn btn-primary">Button</button>
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


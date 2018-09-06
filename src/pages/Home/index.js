import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchQuestions } from "../../store/actions/index";

import BarChart from "../../components/BarChart";

class Home extends Component {
    componentDidMount() {
        this.props.fetchQuestions();
    }

    render() {
        let form = <li>No Questions</li>;
        if(this.props.questions && this.props.questions.length) {
            console.log(this.props.questions);
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p>Hi User, I am home Component</p>
                        <ul>
                            {form}
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <BarChart />
                    </div>
                </div>
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        questions: state.quizData.questions
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchQuestions: () => dispatch(fetchQuestions())
    };
};

export default  connect(mapStateToProps, mapDispatchToProps)(Home);
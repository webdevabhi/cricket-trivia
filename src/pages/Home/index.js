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
            form = this.props.questions.map((ques, idx) => {
                return (
                    <div key={idx} className="form-group">
                        <label>{ques.q}</label>
                        <select className="form-control">
                            <option value="">Select One</option>
                            {
                                Object.keys(ques.options).map((key, idx) => {
                                    return (
                                        <option key={idx} value={key}>{ques.options[key]}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                )
            })
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p>Hi User, I am home Component</p>
                        <form>
                            {form}
                        </form>
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
import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchQuestions } from "../../store/actions/index";

import BarChart from "../../components/BarChart";
import Select from "../../components/Select";
import Button from "../../components/Button";

class Home extends Component {
    componentDidMount() {
        this.props.fetchQuestions();
    }

    inputChangeHandler(event, id) {
        console.log(event.target.value, id);
    }

    submitForm(e) {
        e.preventDefault();

        console.log("submitForm");
    }

    clearForm(e) {
        e.preventDefault();
        console.log("Clear Form");
    }

    render() {
        let form = <li>No Questions</li>;
        if(this.props.questions && this.props.questions.length) {
            form = this.props.questions.map((ques, idx) => {
                return (
                    <Select key={idx} id={idx} ques={ques} changed={this.inputChangeHandler} />
                )
            })
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={this.submitForm}>
                            {form}

                            <div className="row">
                                <div className="col-md-6">
                                    <Button className="btn btn-default btn-block" type="submit">Submit</Button>
                                </div>
                                <div className="col-md-6">
                                    <Button className="btn btn-default btn-block" onClick={this.clearForm}>Clear</Button>
                                </div>
                            </div>
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
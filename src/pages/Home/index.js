import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchQuestions, submitForm } from "../../store/actions/index";

import BarChart from "../../components/BarChart";
import Select from "../../components/Select";
import Button from "../../components/Button";

class Home extends Component {

    state={
        ansData: [],
        disableSubmitBtn: false
    };

    componentDidMount() {
        this.props.fetchQuestions();
    }

    inputChangeHandler(event, id) {
        const updatedForm = {
            ...this.state.ansData
        };
        const updatedFormQuestion = {
            ...this.props.questions[id]
        };
        updatedFormQuestion.ansSelected = event.target.value;
        updatedForm[id] = updatedFormQuestion;

        this.setState({ansData: updatedForm});
    }

    submitForm(e) {
        e.preventDefault();
        this.setState({disableSubmitBtn: true});
        this.props.submitForm(this.state.ansData);
    }

    clearForm(e) {
        e.preventDefault();
        this.props.fetchQuestions();
        document.getElementById("quizForm").reset();
        this.setState({disableSubmitBtn: false});
    }

    render() {
        let form = <li>No Questions</li>;
        if(this.props.questions && this.props.questions.length) {
            form = this.props.questions.map((ques, idx) => {
                return (
                    <Select key={idx} id={idx} ques={ques} changed={(e) => this.inputChangeHandler(e, idx)} required/>
                )
            })
        }
        const graphData = {
            labels: ['Correct', 'Incorrect'],
            datasets: [
              {
                label: ["Corect", "Incorrect"],
                backgroundColor: [
                    'rgba(2, 117, 5, 0.3)',
                    'rgba(255, 0, 0, 0.3)',
                ],
                borderColor: [
                    'rgba(2, 117, 5, 1)',
                    'rgba(255, 0, 0, 1)',
                ],
                borderWidth: 1,
                hoverBackgroundColor: [
                    'rgba(2, 117, 5, 0.6)',
                    'rgba(255, 0, 0, 0.6)',
                ],
                hoverBorderColor: [
                    'rgba(2, 117, 5, 0.3)',
                    'rgba(255, 0, 0, 1)',
                ],
                data: [this.props.correct, this.props.incorrect]
              }
            ]
        };
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form id="quizForm" onSubmit={(e) => this.submitForm(e)}>
                            {form}

                            <div className="row">
                                <div className="col-xs-6 col-md-6">
                                    <Button className="btn btn-default btn-block" type="submit" disabled={this.state.disableSubmitBtn}>Submit</Button>
                                </div>
                                <div className="col-xs-6 col-md-6">
                                    <Button className="btn btn-default btn-block" onClick={this.clearForm.bind(this)}>Clear</Button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <BarChart data={graphData} />
                    </div>
                </div>
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        questions: state.quizData.questions,
        correct: state.quizData.correct,
        incorrect: state.quizData.incorrect,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchQuestions: () => dispatch(fetchQuestions()),
        submitForm: (data) => dispatch(submitForm(data))
    };
};

export default  connect(mapStateToProps, mapDispatchToProps)(Home);
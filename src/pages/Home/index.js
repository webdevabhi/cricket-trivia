import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchQuestions } from "../../store/actions/index";

import BarChart from "../../components/BarChart";
import Select from "../../components/Select";
import Button from "../../components/Button";

class Home extends Component {

    state={
        ansData: []
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
        console.log(this.state.ansData);
        // this.props.submitForm(this.state.ansData);
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
                    <Select key={idx} id={idx} ques={ques} changed={(e) => this.inputChangeHandler(e, idx)} required/>
                )
            })
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={(e) => this.submitForm(e)}>
                            {form}

                            <div className="row">
                                <div className="col-xs-6 col-md-6">
                                    <Button className="btn btn-default btn-block" type="submit">Submit</Button>
                                </div>
                                <div className="col-xs-6 col-md-6">
                                    <Button className="btn btn-default btn-block" onClick={this.clearForm.bind(this)}>Clear</Button>
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
        fetchQuestions: () => dispatch(fetchQuestions()),
        // submitForm: (data) => dispatch(submitForm(data))
    };
};

export default  connect(mapStateToProps, mapDispatchToProps)(Home);
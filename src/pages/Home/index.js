import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchQuestions } from "../../store/actions/index";

import BarChart from "../../components/BarChart";
import Select from "../../components/Select";

class Home extends Component {
    componentDidMount() {
        this.props.fetchQuestions();
    }

    render() {
        let form = <li>No Questions</li>;
        if(this.props.questions && this.props.questions.length) {
            form = this.props.questions.map((ques, idx) => {
                return (
                    <Select key={idx} ques={ques} />
                )
            })
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
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
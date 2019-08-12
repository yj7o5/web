import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';

import './courses.scss';

import CGSearchForm from './form/CGSearchForm';
import CGCourseResults from './results/CGCourseResults';

class Courses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selection: []
        };
    }

    handleQuery(selection) {
        console.log('query handled: ',selection)
        this.setState({
            selection: selection.slice()
        })
    }

    render() {
        return (
        <Container>
            <div>
                <h2>Course search</h2>
                <p>
                    Type in the name of the course you're interested in and press <em>Add to selection</em>.
                    This will generate a graph of the average GPA of past classes over time, identified by the instructor.
                    An interactive table will also be generated that shows more detailed information, such as the section number of the class, the number of As, Bs, Cs, and withdraws.
                </p>
            </div>
            <CGSearchForm onQuery={(val) => this.handleQuery(val)}/>
            <CGCourseResults selection={this.state.selection} firebase={this.props.firebase} db={this.props.db} />
        </Container>
        );
    }
}

export default Courses;
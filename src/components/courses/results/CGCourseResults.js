import React from 'react';
import PropTypes from 'prop-types';

import CGCourseItem from './CGCourseItem';

class CGCourseResults extends React.Component {
    render() {
        return (
        <div className="cg-content">
            <div className="accordion" id="accordion">
                {this.props.selection.map(elem => {
                    return (
                        <CGCourseItem key={btoa(elem)} course={elem} parent="#accordion" selection={this.props.selection} />
                    )
                })}
            </div>
        </div>
        );
    }
}

CGCourseResults.propTypes = {
    selection: PropTypes.array.isRequired
};

export default CGCourseResults;

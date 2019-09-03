import React from 'react';
import PropTypes from 'prop-types';


function TitleBar(props) {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    )
}

TitleBar.propTypes = {
    title: PropTypes.string
};

TitleBar.defaultProps = {
    title: 'Score Keep'
};

export default TitleBar

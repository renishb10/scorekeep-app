import React from 'react';
import PropTypes from 'prop-types';


function TitleBar(props) {
    return (
        <div className="title-bar">
            <div className="wrapper">
                <h1>{props.title}</h1>
                <h2 className="title-bar__subtitle">{props.subtitle}</h2>
            </div>
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

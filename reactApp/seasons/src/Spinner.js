import React from 'react';

const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">
                {props.message}
            </div>
        </div>
    );
};

// We can use defaultProps in case we forget to define the props
Spinner.defaultProps = {

};


export default Spinner;
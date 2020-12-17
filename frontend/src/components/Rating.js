import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ value, text, color }) => {
    return (
        <div>
            <span style={{ margin: 3 }}>
                <i
                    style={{ color: color }}
                    className={
                        value >= 1
                            ? 'fas fa-star'
                            : value >= 0.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'
                    }
                ></i>
            </span>
            <span style={{ margin: 3 }}>
                <i
                    style={{ color: color }}
                    className={
                        value >= 2
                            ? 'fas fa-star'
                            : value >= 1.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'
                    }
                ></i>
            </span>
            <span style={{ margin: 3 }}>
                <i
                    style={{ color: color }}
                    className={
                        value >= 3
                            ? 'fas fa-star'
                            : value >= 2.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'
                    }
                ></i>
            </span>
            <span style={{ margin: 3 }}>
                <i
                    style={{ color: color }}
                    className={
                        value >= 4
                            ? 'fas fa-star'
                            : value >= 3.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'
                    }
                ></i>
            </span>
            <span style={{ margin: 3 }}>
                <i
                    style={{ color: color }}
                    className={
                        value >= 5
                            ? 'fas fa-star'
                            : value >= 4.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'
                    }
                ></i>
            </span>
            <span style={{ marginLeft: 3 }}>{text && text}</span>
            {/* this is the same thing with text ? text : ''
                but we don't want to add empty string*/}
        </div>
    );
};

Rating.defaultProps = {
    color: '#f8e825',
};

Rating.propTypes = {
    value: PropTypes.number,
    text: PropTypes.string,
    color: PropTypes.string,
};

export default Rating;

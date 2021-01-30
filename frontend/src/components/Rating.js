import React from 'react';

const Rating = (props) => {
    return (
        <div className='rating'>
            <span>
                <i
                    style={{ color: props.color }}
                    className={
                        props.value >= 1
                            ? 'fas fa-star'
                            : props.value >= 0.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'
                    }
                />
                {/*fas fa-star ->Full start, fas fa-star-half-alt -> half start, far fa-star -> empty star */}
                {/*With the style={{}} we can type inline css in react */}
            </span>
            <span>
                <i
                    style={{ color: props.color }}
                    className={
                        props.value >= 2
                            ? 'fas fa-star'
                            : props.value >= 1.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'
                    }
                />
                {/*fas fa-star ->Full start, fas fa-star-half-alt -> half start, far fa-star -> empty star */}
                {/*With the style={{}} we can type inline css in react */}
            </span>
            <span>
                <i
                    style={{ color: props.color }}
                    className={
                        props.value >= 3
                            ? 'fas fa-star'
                            : props.value >= 2.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'
                    }
                />
                {/*fas fa-star ->Full start, fas fa-star-half-alt -> half start, far fa-star -> empty star */}
                {/*With the style={{}} we can type inline css in react */}
            </span>
            <span>
                <i
                    style={{ color: props.color }}
                    className={
                        props.value >= 4
                            ? 'fas fa-star'
                            : props.value >= 3.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'
                    }
                />
                {/*fas fa-star ->Full start, fas fa-star-half-alt -> half start, far fa-star -> empty star */}
                {/*With the style={{}} we can type inline css in react */}
            </span>
            <span>
                <i
                    style={{ color: props.color }}
                    className={
                        props.value >= 5
                            ? 'fas fa-star'
                            : props.value >= 4.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'
                    }
                />
                {/*fas fa-star ->Full start, fas fa-star-half-alt -> half start, far fa-star -> empty star */}
                {/*With the style={{}} we can type inline css in react */}
            </span>
            <span>
                {props.numReviews && ' ' + props.numReviews + ' reviews'}
            </span>
        </div>
    );
};

Rating.defaultProps = {
    color: '#f8e825', //this is yellow
    //whit the help of this. If we've not pass a color prop to component its default value is yellow
};

export default Rating;

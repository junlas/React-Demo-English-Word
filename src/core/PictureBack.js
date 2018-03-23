
import React from 'react';
import '../css/PictureBack.css';

export default class PictureBack extends React.Component {

    render() {
        return (
            <div className='picture-back'>
                <div className='picture-back-up'></div>
                <div className='picture-back-down'></div>
            </div>
        );
    }
}
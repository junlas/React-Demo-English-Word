import React, {Component} from 'react';

import { Transition } from 'react-transition-group';

import PictureImageItem from './PictureImageItem';

const defaultStyle = {
    transition:`left 500ms ease-in-out`,
    left:0
};

export default class PictureImage extends Component {
    

    render() {
        /**@type {[]} */
        let imgsUrls = this.props.imgs;
        let imgIndex = this.props.index;

        if(!imgsUrls){
            return null;
        }

        let changeLeft= 0;
        // eslint-disable-next-line
        switch(imgIndex) {
            case 0:
            changeLeft = `0px`;
            break;
            case 1:
            changeLeft = `-380px`;
            break;
            case 2:
            changeLeft = `-750px`;
            break;
        }
        console.log("changeLeft:",changeLeft);
        let enteredStyle = {entered:{left:changeLeft}};

        let items = imgsUrls.map((item,index)=>{
            return <PictureImageItem key={index} url={item} imageClickCallback={this.props.imageClickCallback} />
        });

        return (
            <Transition in timeout={0}>
                {(state)=>{
                    return (
                        <div  className='pic-top-show-items' style={{...defaultStyle,...enteredStyle[state]}}>
                            {items}
                        </div>
                    );
                }}
            </Transition>
        );
    }

}
import React, {Component} from 'react';

import {Link} from 'react-router-dom';

import ImageLineItem from './ImageLineItem';

export default class ThreeImageLine extends Component {

    _currMaxIndex = 0;

    render() {
        /**@type {[]} */
        let imgsUrls = this.props.imgs;
        let imgIndex = this.props.index;
        let isLast = this.props.isLast;

        if(this._currMaxIndex <= imgIndex) {
            this._currMaxIndex = imgIndex;
        }

        if(!imgsUrls) {
            return <div></div>;
        }

        let imgsItems = imgsUrls.map((url,index)=>{
            return <ImageLineItem key={index} index={index} url={url} show={index<=this._currMaxIndex} showBorder={imgIndex===index} imageClickCallback={this.props.imageClickCallback} />;
        });

        let imgBtn;
        if(isLast) {
            imgBtn = (
                <Link to={{pathname:'/about',search:'?test=1',hash:'#the-hash',state:{fromHome:true}}} >
                    <img src="./images/book/record/btn_read_record.png" alt="" className='pic-bottom-show-btn-img'/>
                </Link>
            );
        }else {
            imgBtn = <img src="./images/book/record/btn_read_record.png" alt="" className='pic-bottom-show-btn-img'/>;
        }

        return (
            <div>
                <div className='pic-bottom-show-imgs'>
                    {imgsItems}
                </div>
                <div className='pic-bottom-show-btn' onClick={this.onContinueClick.bind(this)}>
                    {imgBtn}
                </div>
            </div>
            
        );
    }

    onContinueClick(e) {
        e.preventDefault();

        let isLast = this.props.isLast;
        if(isLast) {
            console.log("最后一个!");
            return;
        }

        let imgIndex = this.props.index;
        
        this.props.continueClickCallback.call(null,imgIndex+1);
    }

}
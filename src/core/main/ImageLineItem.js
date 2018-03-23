import React, {Component} from 'react';


export default class ImageLineItem extends Component {

    render() {
        let isShow = this.props.show;
        let style = {};
        if(!isShow) {
            style = {visibility:'hidden'};
        }

        let showBorder = this.props.showBorder;
        if(showBorder) {
            style.border = 'solid 5px cornflowerblue';
        }else {
            style.border = 'solid 0 cornflowerblue';
        }
        
        return (
            <div className='pic-bottom-show-imgs-item' style={style} onClick={e=>{this.props.imageClickCallback(this.props.index)}}>
                <img className='pic-bottom-show-imgs-item-img' src={this.props.url} alt="加载中.."/>
            </div>
        );
    }
}
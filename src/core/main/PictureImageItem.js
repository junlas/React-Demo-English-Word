import React,{Component} from 'react';

export default class PictureImageItem extends Component {

    render() {
        return (
            <button type='button' className='pic-top-show-button' onClick={this.onPicImgClick.bind(this)}>
                <img src={this.props.url} alt="加载中..." className="pic-top-show-img"/>
            </button>
        );
    }

    onPicImgClick(e) {
        e.preventDefault();

        this.props.imageClickCallback.call();
    }
}
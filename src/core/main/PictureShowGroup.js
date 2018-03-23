import React from 'react';
import "../../css/PictureShowGroup.css";

import PictureImage from './PictureImage';
import VoiceSpeakerMovie from './VoiceSpeakerMovie';
import ThreeImageLine from './ThreeImageLine';

export default class PictureShowGroup extends React.Component {
    Max_Index = 2;

    /**@type {VoiceSpeakerMovie} */
    _voiceSpeakerMovie = null;


    constructor(props) {
        super(props);

        this.state = {index:0};
    }

    render() {
        return (
            <div>
                <div className='pic-top-show'>
                    <PictureImage index={this.state.index} imgs={this.props.data.getPics()} imageClickCallback={()=>{this._voiceSpeakerMovie.playVoice();}} />
                </div>
                <div className='pic-bottom-show'>
                    <VoiceSpeakerMovie ref={myself=>{this._voiceSpeakerMovie = myself;}} word={this.props.data.getWord()} sound={this.props.data.getSound()} />
                    <ThreeImageLine index={this.state.index} imgs={this.props.data.getPics()} isLast={this.state.index===this.Max_Index} imageClickCallback={this.onImageClickCallback.bind(this)} continueClickCallback={this.onContinueClickCallback.bind(this)} />
                </div>
            </div>
        );
    }

    onImageClickCallback(index) {
        this.setState({index});
        this._voiceSpeakerMovie.playVoice();
    }
    
    onContinueClickCallback(index) {
        if(index > this.Max_Index) {
            console.log("当前3个单词结束.");
            return;
        }
        this.setState({index});
        this._voiceSpeakerMovie.playVoice();
    }


}
import React from 'react';


export default class VoiceSpeakerMovie extends React.Component {
    /**@type {Audio} */
    _audio = null;

    render() {
        let soundUrl = this.props.sound;

        return (
            <div>
                <div className='pic-bottom-show-content'>{this.props.word}</div>
                <div className='voice-speaker'>
                    <img src="./images/book/record/img_voicebg.png" alt="" className='voice-speaker-img'/>
                    <audio ref={myself=>{this._audio = myself;}} src={soundUrl} preload="metadata" controls autoPlay style={{display:'none'}} />
                </div>
            </div>
        );
    }

    playVoice() {
        this._audio.load();
        //this._audio.play();
    }
}
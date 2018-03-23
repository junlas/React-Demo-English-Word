import React from 'react';

export default class CustomTextInput extends React.Component {
    textinput = null;

    constructor(props){
        super(props);

        this.onFocus = this.onFocus.bind(this);
    }

    componentDidMount() {
        this.onFocus();
    }

    onFocus() {
        this.textinput.focus();
    }

    focusTextInput() {
        this.onFocus();
    }

    render() {
        console.log("3");
        return (
            <div>
                <input type="text" ref={(myself)=>{this.textinput = myself;}} />
                {/* <input type="button" value="Focus the text input" onClick={this.onFocus}/> */}
            </div>
        );
    }
}
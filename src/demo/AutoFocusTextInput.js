import React from 'react';
//import CustomTextInput from './CustomTextInput';

export default class AutoFocusTextInput extends React.Component {

    componentDidMount() {
        //this.customTextInput.focusTextInput();
    }

    MyFunctionalComponent() {
        return <input type="text" value="test" onChange={()=>{}}/>;
    }

    render() {
        let A = this.MyFunctionalComponent;

        return (
            //<CustomTextInput ref={myself=>{this.customTextInput = myself;}} />
            <A  />
        );

    }
}
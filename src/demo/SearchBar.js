import React from 'react';

export default class SearchBar extends React.Component {
    
    render() {
        console.log(this.props);
        console.log(this.props.test);
        return (
            <form>
                <input type="text" placeholder="Seacher..." value={this.props.filterText} onChange={(e)=>{this.props.onFilterTextInput(e.target.value);}} />
                <p>
                    <input type="checkbox" checked={this.props.inStockOnly} onChange={(e)=>{this.props.onInStockInput(e.target.checked)}} />
                    {' '}Only show products in stock
                </p>
                
            </form>
        );
    }
}
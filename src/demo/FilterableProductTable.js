import React from 'react';
import ProductTable from './ProductTable'
import SearchBar from './SearchBar';

export default class FilterableProductTable extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            filterText:'',
            inStockOnly:false
        };

        this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
        this.handleInStockInput = this.handleInStockInput.bind(this);
    }

    handleFilterTextInput(filterText) {
        this.setState({
            filterText
        });
    }

    handleInStockInput(inStockOnly){
        this.setState({
            inStockOnly
        });
    }

    render() {
        const test={"test":123};
        return (
            <div>
                
                <SearchBar 
                filterText={this.state.filterText}
                inStockOnly={this.state.inStockOnly}
                onFilterTextInput={this.handleFilterTextInput}
                onInStockInput={this.handleInStockInput}
                {...test}
                />
                <ProductTable 
                products={this.props.products}
                filterText={this.state.filterText}
                inStockOnly={this.state.inStockOnly}
                />
            </div>
        );
    }
    
}
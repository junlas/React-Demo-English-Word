import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

export default class ProductTable extends React.Component {

    render() {
        /**@type {[]} */
        let rows = [];
        let lastCategory = null;
        /**@type {[]} */
        let products = this.props.products;
        products.forEach((product,index)=>{
            if(product.name.indexOf(this.props.filterText) === -1){
                return;
            }
            if(this.props.inStockOnly && !product.stocked) {
                return;
            }
            console.log("index:",index);
            if(product.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category}/>);
            }
            rows.push(<ProductRow product={product} key={product.name}/>);
            lastCategory = product.category;
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}
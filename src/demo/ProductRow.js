import React from 'react';

export default class ProductRow extends React.Component {
    render() {
        let name = this.props.product.stocked?this.props.product.name:<span style={{color:'red'}}>{this.props.product.name}</span>
        return (
            <tr>
                <td>{name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        );
    }
}
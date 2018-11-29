import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import CartItem from './../../components/element/CartItem';
import TotalTable from './../../components/element/TotalTable';
import './index.css';

export default (props) => {
    const { cartList } = props;
    const product = {
        image: "https://cdn.storelammoc.vn/files/fcc3ff6de17fc391b2abdf1b7d2c0ccf.jpg?size=thumb",
        quantity: 3,
    }
    return (
        <div className="cart-container">
            <h3>GIỎ HÀNG CỦA BẠN</h3>
            <Grid container lg={12}>
                <Grid item md={8} xs={12} style={{paddingRight: '8px', marginBottom: '10px'}}>
                    <Paper>
                        <CartItem product={product} />
                        <CartItem product={product} />
                        <CartItem product={product} />
                    </Paper>
                </Grid>
                <Grid item md={3} xs={12}>
                    <TotalTable/>
                </Grid>
            </Grid>
        </div>
    )
}
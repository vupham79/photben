import React from 'react';
import { Grid, FormControl, Select, MenuItem, FormHelperText, Typography, Button } from '@material-ui/core';
import { Clear } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import './index.css';

class CartItem extends React.Component {
    state = {
        ...this.props.product,
    }
    handleChangeQuantity = (event) => {
        this.setState({ quantity: event.target.value })
    }

    render() {
        return (
            <Grid container justify={"space-between"} style={{ padding: '10px', borderBottom: '1px solid #f0f0f0' }}>
                <Grid item md={2} xs={2} className="cart-item-image-container">
                    <Link to="/">
                        <div className="cart-item-image" style={{ backgroundImage: `url(${this.state.image})` }}></div>
                    </Link>
                </Grid>
                <Grid item md={6} xs={6}>
                    <Typography variant="body1" align="left">
                        Veniam consectetur cupidatat excepteur ipsum minim mollit aliqua ipsum non anim cillum id et aute.
                    </Typography>
                    <Typography variant="body1" gutterBottom align="left">
                        Velit labore laborum et commodo reprehenderit veniam irure velit voluptate ullamco.
                    </Typography>
                    <Typography variant="caption" gutterBottom align="left">
                        Velit sunt tempor culpa amet adipisicing ea incididunt sunt sunt mollit qui ad irure.
                    </Typography>
                </Grid>
                <Grid item md={2} xs={2}>
                    <FormControl>
                        <FormHelperText>Số lượng</FormHelperText>
                        <Select
                            onChange={this.handleChangeQuantity}
                            value={this.state.quantity}
                            name="quantity"
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                        </Select>
                        <FormHelperText>Chỉ còn lại 4 sản phẩm</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item container md={2} xs={2} alignItems={"flex-end"} direction={"column"}>
                    <Grid item>
                        <Button>
                            <Clear />
                        </Button>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" gutterBottom align="right">
                            11,258,000đ
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        )
    };
}

export default CartItem;
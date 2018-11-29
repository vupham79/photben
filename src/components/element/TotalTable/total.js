import React from 'react';
import { Grid, Button, Typography, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';

class TotalTable extends React.Component {
    state = {
        ...this.props.product,
    }
    handleChangeQuantity = (event) => {
        this.setState({ quantity: event.target.value })
    }

    render() {
        return (
            <div>
                <Paper style={{ marginBottom: '10px' }}>
                    <Grid container justify={"space-between"} style={{ padding: '10px' }}>
                        <Grid item container md={12} xs={12} justify={"space-between"} style={{ borderBottom: '1px solid #f0f0f0' }}>
                            <Grid item>
                                <Typography variant="body1" align="left">
                                    Tổng cộng:
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" gutterBottom align="right">
                                    20,000,000đ
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container md={12} xs={12} justify={"space-between"} style={{ borderBottom: '1px solid #f0f0f0' }}>
                            <Grid item>
                                <Typography variant="body1" gutterBottom align="left">
                                    Thành tiền *
                                </Typography>
                                <Typography variant="caption" gutterBottom align="left">
                                    Đã bao gồm VAT
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" gutterBottom align="right">
                                    20,000,000đ
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid >
                </Paper>
                <Link to='/checkout' style={{textDecoration: 'none'}}>
                    <Button variant="contained" color="primary" style={{ width: '100%' }}>
                        TIẾN HÀNH ĐẶT HÀNG
                    </Button>
                </Link>
                <Typography variant="caption" gutterBottom align="left">
                    * Chưa bao gồm phí vận chuyển
                </Typography>
            </div>
        )
    };
}

export default TotalTable;
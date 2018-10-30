import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Grid, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText } from '@material-ui/core';
import Cart from './../element/Cart/cart';

const styles = theme => ({
    container: {
        display: "flex",
        flexWrap: "wrap"
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit
    },
    dense: {
        marginTop: 16
    },
    menu: {
        width: 200
    },
    notchedOutline: {
        borderColor: "#000000"
    }
});

class Header extends React.Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;
        return (
            <Grid
                container spacing={24} direction="row"
                justify="center"
                alignItems="center"
                style={{ backgroundColor: '#455a64' }}
            >
                <Grid item>
                    <img src='https://storelammoc.vn/static/media/logo-full.e96991ca.png' alt='Logo' width={200} />
                </Grid>
                <Grid item lg={6}>
                    <TextField
                        id="outlined-search"
                        label="Search"
                        type="search"
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        InputProps={{
                            classes: {
                                notchedOutline: classes.notchedOutline,
                            }
                        }}
                    />
                </Grid>
                <Grid item>
                    <Cart />
                </Grid>
                <Grid item>
                    <Button onClick={this.handleClickOpen}>Sign In</Button>
                    <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">{"Sign in"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                <TextField
                                    id="outlined-email-input"
                                    label="Email"
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    margin="normal"
                                    variant="outlined"
                                    fullWidth
                                />
                                <TextField
                                    id="outlined-password-input"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    margin="normal"
                                    variant="outlined"
                                    fullWidth
                                />
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions >
                            <Button onClick={this.handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={this.handleClose} color="primary" autoFocus>
                                Log In
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(Header);
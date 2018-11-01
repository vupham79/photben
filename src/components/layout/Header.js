import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Dehaze } from '@material-ui/icons';
import { Grid, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText } from '@material-ui/core';
import Cart from './../element/Cart/cart';
import Slick from './../element/SlickSlider/slick';
import './header.css';

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
        openSignin: false,
    };

    handleClickOpenSignin = () => {
        this.setState({ openSignin: true });
    };

    handleCloseSignin = () => {
        this.setState({ openSignin: false });
    };

    render() {
        const { classes } = this.props;
        const header_slider_image = [
            {
                link: 'https://wallpaperplay.com/walls/full/7/3/1/124360.jpg',
            },
            {
                link: 'https://www.setaswall.com/wp-content/uploads/2018/03/MSI-Wallpaper-27-1920x1080.jpg',
            },
            {
                link: 'https://asset.msi.com/global/picture/wallpaper/nb_intel_7th.jpg',
            }
        ]
        const logo = "http://media.msi.com/main.php?g2_view=downloadlink.OfferDownload&g2_itemId=166679";
        return (
            <Grid
                container spacing={24} direction="row"
                justify="space-evenly"
                alignItems="center"
                style={{ backgroundColor: '#f1f4f9' }}
            >
                <Grid item>
                    <img src={logo} alt='Logo' width={200} />
                </Grid>
                <Grid item lg={8}>
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
                    <Button onClick={this.handleClickOpenSignin}>Sign In</Button>
                    <Dialog
                        open={this.state.openSignin}
                        onClose={this.handleCloseSignin}
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
                            <Button onClick={this.handleCloseSignin} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={this.handleCloseSignin} color="primary" autoFocus>
                                Log In
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Grid>
                <Grid item container lg={12} style={{ backgroundColor: '#e9e9e9', padding: 0, minHeight: '50px' }}>
                    <Grid item lg={2}>
                        <Button
                            aria-haspopup="true"
                            style={{ backgroundColor: 'rgba(0, 0, 0, 0.12)', height: '100%', width: '100%' }}
                        >
                            <Dehaze />
                            &nbsp;	&nbsp;
                            Danh mục sản phẩm
                        </Button>
                    </Grid>
                </Grid >
                <Grid item container lg={12} justify={'space-between'} style={{ padding: '0' }}>
                    <Grid item container lg={2} style={{ backgroundColor: '#e9e9e9' }}>
                        <Grid item lg={12} style={{ height: '400px' }}>

                        </Grid>
                        <Grid item lg={12}>
                            <div>
                                <div style={{ backgroundImage: 'url("https://www.setaswall.com/wp-content/uploads/2018/03/MSI-Wallpaper-08-1920x1080.jpg")', minHeight: '200px', backgroundSize: 'contain' }}>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item container lg={8}>
                        <Grid item lg={12}>
                            <Slick image={header_slider_image}/>
                        </Grid>
                        <Grid item lg={6}>
                            <div>
                                <div style={{ backgroundImage: 'url("https://wallpaperaccess.com/full/316002.jpg")', minHeight: '200px', backgroundSize: 'contain' }}>
                                </div>
                            </div>
                        </Grid>
                        <Grid item lg={6}>
                            <div>
                                <div style={{ backgroundImage: 'url("https://www.desktopbackground.org/p/2012/06/18/407355_hd-msi-wallpapers_1920x1080_h.jpg")', minHeight: '200px', backgroundSize: 'contain' }}>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item lg={2}>
                        <Grid item lg={12}>
                            <div>
                                <div style={{ backgroundImage: 'url("https://easylife-online.com/wp-content/uploads/data/2018/1/6/streaming-engine-part-PIC-WSW20512876.jpg")', minHeight: '200px', backgroundSize: 'contain' }}>
                                </div>
                            </div>
                        </Grid>
                        <Grid item lg={12}>
                            <div>
                                <div style={{ backgroundImage: 'url("https://stmed.net/sites/default/files/msi-wallpapers-30729-4847704.jpg")', minHeight: '200px', backgroundSize: 'contain' }}>
                                </div>
                            </div>
                        </Grid>
                        <Grid item lg={12}>
                            <div>
                                <div style={{ backgroundImage: 'url("http://wallpaper-gallery.net/images/wallpaper-msi/wallpaper-msi-9.jpg")', minHeight: '200px', backgroundSize: 'contain' }}>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid >
        )
    }
}

export default withStyles(styles)(Header);
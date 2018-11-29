import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Dehaze } from '@material-ui/icons';
import { Grid, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText } from '@material-ui/core';
import { MenuList, MenuItem } from '@material-ui/core';
import Cart from '../../element/Cart/cart';
import { Link } from 'react-router-dom';
import { login } from './../../../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

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

const Header = withRouter(
    class extends React.Component {
        state = {
            openSignin: false,
            openMenu: false,
            username: '',
            fullname: '',
            password: '',
        };

        onChangeUsername = (e) => {
            this.setState({ username: e.target.value });
        }

        onChangePassword = (e) => {
            this.setState({ password: e.target.value });
        }

        handleSubmit = () => {
            this.props.login({
                data: {
                    username: this.state.username,
                    password: this.state.password,
                },
                response: {
                    success: async () => {
                        this.props.history.push('/');
                    },
                    failure: async (mess = 'Đăng nhập không thành công') => {
                    },
                },
            });
            this.handleCloseSignin();
        }

        handleClickOpenSignin = () => {
            this.setState({ openSignin: true });
        };

        handleCloseSignin = () => {
            this.setState({ openSignin: false });
        };

        handleOpenMenu = () => {
            this.setState({ openMenu: !this.state.openMenu });
        }

        render() {
            const { classes } = this.props;
            const logo = "http://media.msi.com/main.php?g2_view=downloadlink.OfferDownload&g2_itemId=166679";
            const categories = [
                {
                    title: "Thông tin",
                    link: '#',
                },
                {
                    title: "Đăng nhập",
                    link: '#',
                },
                {
                    title: "Đăng xuất",
                    link: '#',
                },
                {
                    title: "Thông tin",
                    link: '#',
                },
                {
                    title: "Đăng nhập",
                    link: '#',
                },
                {
                    title: "Đăng xuất",
                    link: '#',
                },
            ];
            return (
                <div className='header'>
                    <div style={{ backgroundColor: '#f1f4f9', margin: '0 auto' }}>
                        <Grid
                            container direction="row"
                            justify="space-evenly"
                            alignItems="center"
                            style={{ maxWidth: '1280px', margin: '0 auto' }}
                        >
                            <Grid item>
                                <Link to='/'><img src={logo} alt='Logo' width={200} /></Link>
                            </Grid>
                            <Grid item md={6} xs={6}>
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
                                <Button onClick={this.handleClickOpenSignin} style={{ margin: '0 auto' }}>{this.props.user.isAuth ? this.props.user.info.fullname : 'Đăng nhập'}</Button>
                                <Dialog
                                    open={this.state.openSignin}
                                    onClose={this.handleCloseSignin}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                >
                                    <DialogTitle id="alert-dialog-title">{"Đăng nhập"}</DialogTitle>
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
                                                onChange={this.onChangeUsername}
                                                fullWidth
                                                InputProps={{
                                                    classes: {
                                                        notchedOutline: classes.notchedOutline,
                                                    }
                                                }}
                                            />
                                            <TextField
                                                id="outlined-password-input"
                                                label="Mật khẩu"
                                                type="password"
                                                autoComplete="current-password"
                                                margin="normal"
                                                variant="outlined"
                                                onChange={this.onChangePassword}
                                                fullWidth
                                                InputProps={{
                                                    classes: {
                                                        notchedOutline: classes.notchedOutline,
                                                    }
                                                }}
                                            />
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions >
                                        <Button onClick={this.handleCloseSignin} color="primary">
                                            Hủy bỏ
                            </Button>
                                        <Button onClick={this.handleSubmit} color="primary" autoFocus>
                                            Đăng nhập
                            </Button>
                                    </DialogActions>
                                </Dialog>
                            </Grid>
                        </Grid>
                    </div>
                    <div className='menu-button-container'>
                        <Grid container lg={12} style={{ maxWidth: '1280px', margin: '0 auto' }}>
                            <Grid item container md={2} xs={12}>
                                <ul className="menu-button">
                                    <li>
                                        <Button
                                            aria-haspopup="true"
                                            style={{ backgroundColor: 'rgba(0, 0, 0, 0.12)', height: '100%', width: '100%' }}
                                            onClick={this.handleOpenMenu}
                                            className="button"
                                        >
                                            <Grid item container justify={'center'}>
                                                <Grid item>
                                                    <Dehaze />
                                                </Grid>
                                                <Grid item style={{ alignSelf: 'center' }}>
                                                    Danh mục sản phẩm
                                            </Grid>
                                            </Grid>
                                        </Button>
                                        <Grid container lg={2} xs={2} className="menu" style={{ display: this.state.openMenu ? 'block' : 'none' }}>
                                            <MenuList>
                                                {categories.map(category => {
                                                    return (
                                                        <Link to={category.link} style={{ textDecoration: 'none' }}>
                                                            <MenuItem>
                                                                {category.title}
                                                                <MenuList>
                                                                    <MenuItem>
                                                                        {category.title}
                                                                    </MenuItem>
                                                                    <MenuItem>
                                                                        {category.title}
                                                                    </MenuItem>
                                                                    <MenuItem>
                                                                        {category.title}
                                                                    </MenuItem>
                                                                    <MenuItem>
                                                                        {category.title}
                                                                    </MenuItem>
                                                                    <MenuItem>
                                                                        {category.title}
                                                                    </MenuItem>
                                                                </MenuList>
                                                            </MenuItem>
                                                        </Link>
                                                    )
                                                })}
                                            </MenuList>
                                        </Grid>
                                    </li>
                                </ul>
                            </Grid>
                        </Grid >
                    </div >
                </div >
            )
        }
    }
)

const mapStateToProps = state => ({
    user: state.user,
});

const mapDispatchToProps = {
    login,
};


export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Header));
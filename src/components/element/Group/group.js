import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import { TableRow, TableCell, TableBody } from '@material-ui/core';
import { Grid, Paper } from '@material-ui/core';
import Card from '../Card/card';
import './../Slider/slider.css';
import './../Slider/slider.js';
import prevSVG from './../Slider/back.svg';
import nextSVG from './../Slider/next.svg';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
    },
    table: {
        minWidth: '70%',
    },
});

function SimpleTable(props) {
    const { classes } = props;
    const products = [
        {
            image: 'https://cdn.nguyenkimmall.com/images/detailed/60/BOSCH-GSB-16-RE-C-I-TI-N.jpg',
            title: 'Máy khoan động lực, đục bê tông pin Dewalt DCH253P2-KR',
            category: 'Khoan pin có búa',
            price: '7,300,000đ',
        },
        {
            image: 'http://thietbimakita.com/wp-content/uploads/2016/08/may-khoan-cam-tay-mt810-600x600.png',
            title: 'Máy vặn bù lon cầm tay Dewalt DW293',
            category: 'Bắn bù lon dây',
            price: '4,021,000đ',
        },
        {
            image: 'http://www.makita.net.vn/data/bt10/may-khoan-bua-maktec-mt814.jpg',
            title: '13mm Máy khoan 500W DCA AZJ02-13 ',
            category: 'Khoan tường dây',
            price: '635,000đ',
        },
        {
            image: 'https://www.sieuthithietbi.com/products/13mm-may-khoan-dong-luc-cam-tay-850w-total-tg109136e.jpg',
            title: 'Máy khoan động lực, đục bê tông pin Dewalt DCH253P2-KR',
            category: 'Khoan pin có búa ',
            price: '7,300,000đ',
        },
        {
            image: 'http://dailymaykhoan.com/netviet/filesupload/dailymaykhoan/20150622122746_MAKTEC-MT606.jpg',
            title: 'Máy khoan động lực, đục bê tông pin Dewalt DCH253P2-KR',
            category: 'Khoan pin có búa ',
            price: '7,300,000đ',
        },
        {
            image: 'https://cuahangbosch.com/wp-content/uploads/2017/10/may-khoan-goc-canh-dung-pin-bosch-GWB-12-V-LI-5.jpg',
            title: 'Máy khoan động lực, đục bê tông pin Dewalt DCH253P2-KR',
            category: 'Khoan pin có búa ',
            price: '7,300,000đ',
        },
    ]
    const sponsors = [
        {
            image: 'https://firebasestorage.googleapis.com/v0/b/shop-lammoc-vn/o/banners%2F57bdd9e38b96d0303fb1e68a-brand-1%2Fbanner?alt=media&token=ff794a11-144e-4a31-bb89-188634609a78',
        },
        {
            image: 'https://firebasestorage.googleapis.com/v0/b/shop-lammoc-vn/o/banners%2F57bdd9e38b96d0303fb1e68a-brand-1%2Fbanner?alt=media&token=ff794a11-144e-4a31-bb89-188634609a78',
        },
        {
            image: 'https://firebasestorage.googleapis.com/v0/b/shop-lammoc-vn/o/banners%2F57bdd9e38b96d0303fb1e68a-brand-1%2Fbanner?alt=media&token=ff794a11-144e-4a31-bb89-188634609a78',
        },
        {
            image: 'https://firebasestorage.googleapis.com/v0/b/shop-lammoc-vn/o/banners%2F57bdd9e38b96d0303fb1e68a-brand-1%2Fbanner?alt=media&token=ff794a11-144e-4a31-bb89-188634609a78',
        },
        {
            image: 'https://firebasestorage.googleapis.com/v0/b/shop-lammoc-vn/o/banners%2F57bdd9e38b96d0303fb1e68a-brand-1%2Fbanner?alt=media&token=ff794a11-144e-4a31-bb89-188634609a78',
        },
    ]
    const subcategories = [
        {
            title: 'Sữa chữa điện',
            link: '#'
        },
        {
            title: 'Sữa chữa cơ khí',
            link: '#'
        },
        {
            title: 'Sữa xếp bảo quản',
            link: '#'
        },
        {
            title: 'Sữa chữa nước',
            link: '#'
        },
        {
            title: 'Làm vườn và mô hình',
            link: '#'
        },
        {
            title: 'Hóa chất bảo trì',
            link: '#'
        },
        {
            title: 'Sữa chữa điện',
            link: '#'
        },
    ]
    const category = {
        title: 'SỮA CHỮA - LÀM VƯỜN',
    }
    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableBody>
                    <TableRow >
                        <TableCell style={{ backgroundColor: '#455a64', color: 'white', minWidth: '160px'}}>
                        <span>{category.title}</span>
                        </TableCell>
                        <TableCell>
                            <Table>
                                <TableBody>

                                    <Grid container justify={"space-evenly"}>
                                        {subcategories.map(subcategory => {
                                            return (
                                                <Grid item ><a href={subcategory.link} style={{ textDecoration: 'none' }}>{subcategory.title}</a></Grid>
                                            )
                                        })}
                                    </Grid>
                                    {/* <TableRow>
                                                <TableCell style={{ border: '0' }}><a href='#' style={{ textDecoration: 'none' }}>Sữa chữa điện</a></TableCell>
                                                <TableCell style={{ border: '0' }}><a href='#' style={{ textDecoration: 'none' }}>Sữa chữa cơ khí</a></TableCell>
                                                <TableCell style={{ border: '0' }}><a href='#' style={{ textDecoration: 'none' }}>Sữa xếp bảo quản</a></TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell style={{ border: '0' }}><a href='#' style={{ textDecoration: 'none' }}>Sữa chữa nước</a></TableCell>
                                                <TableCell style={{ border: '0' }}><a href='#' style={{ textDecoration: 'none' }}>Làm vườn và mô hình</a></TableCell>
                                                <TableCell style={{ border: '0' }}><a href='#' style={{ textDecoration: 'none' }}>Hóa chất bảo trì</a></TableCell>
                                            </TableRow> */}
                                </TableBody>
                            </Table>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{ height: '10px', backgroundSize: 'cover', backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/shop-lammoc-vn/o/banners%2Ffeatured-57bdd9e38b96d0303fb1e68a%2Fbanner?alt=media&token=719c720c-f0f3-4934-893a-aabd2c9827c7")' }} />
                        <TableCell>
                            <Table style={{ tableLayout: 'fixed' }}>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                            <div id="slider">
                                                <a href class="control_next"><img alt='>' src={nextSVG} /></a>
                                                <a href class="control_prev"><img alt='<' src={prevSVG} /></a>
                                                <ul>
                                                    {products.map(product => {
                                                        return (
                                                            <li>
                                                                <Card product={product} />
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow style={{ width: '70%', height: 'auto' }}>
                                        <Grid container justify={"space-evenly"} style={{ flexWrap: "nowrap", overflow: 'hidden' }}>
                                            {sponsors.map(sponsor => {
                                                return (
                                                    <Grid item>
                                                        <img style={{ width: '140px' }} alt='Sponsor' src={sponsor.image} />
                                                    </Grid>
                                                )
                                            })}
                                        </Grid>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table >
        </Paper >
    );
}

export default withStyles(styles)(SimpleTable);

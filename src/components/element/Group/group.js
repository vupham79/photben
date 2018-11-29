import React from 'react';
import { Grid } from '@material-ui/core';
import Card from '../Card/card';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'

function SimpleTable(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    const data = {
        products: [
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
        ],
        sponsors: [
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
        ],
        subcategories: [
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
        ],
        category: {
            title: 'SỮA CHỮA - LÀM VƯỜN',
        },
        banner: {
            link: 'http://media.msi.com/main.php?g2_view=core.DownloadItem&g2_itemId=158637&g2_serialNumber=1',
        }
    }
    return (
        <div className='group-container'>
            <Grid container className='group' spacing={16} style={{ border: '2px solid #40403f', maxWidth: '1280px', margin: '0 auto' }}>
                <Grid item container md={12} xs={12} justify="space-between" style={{ borderBottom: '2px solid #40403f', height: '80px' }}>
                    <Grid item md={2} xs={4} className='head-left'>
                        <a href="#" style={{ textDecoration: 'none', fontWeight: 'bold' }}>{data.category.title}</a>
                    </Grid>
                    <Grid item container md={10} xs={8} className='head-right-container' justify='flex-end'>
                        <Grid item md={2} xs={2} className='head-right'>
                            {data.subcategories.map(subcategory => {
                                return (
                                    <a href={subcategory.link} style={{ textDecoration: 'none' }}>{subcategory.title}</a>
                                )
                            })}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container md={2} xs={4} style={{ borderRight: '2px solid #40403f' }}>
                    <div className="body-left">
                        <img src={data.banner.link} alt={data.category.title} style={{ width: '100%' }} />
                    </div>
                </Grid>
                <Grid item container md={10} xs={8}>
                    <Grid item md={12} xs={12} style={{ borderBottom: '2px solid #40403f' }}>
                        <Slider {...settings}>
                            {data.products.map(product => {
                                return (
                                    <Card style={{height: '100%'}} product={product} />
                                )
                            })}
                        </Slider>
                    </Grid>
                    <Grid item container md={12} xs={12} justify={"space-evenly"} style={{ flexWrap: "nowrap", overflow: 'hidden' }}>
                        {data.sponsors.map(sponsor => {
                            return (
                                <Grid item>
                                    <img style={{ maxWidth: '140px' }} alt='Sponsor' src={sponsor.image} />
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>
            </Grid >
        </div>
    )
};

export default SimpleTable;

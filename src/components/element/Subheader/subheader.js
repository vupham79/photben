import React from 'react';
import { Grid} from '@material-ui/core';
import Slick from './../SlickSlider';
import './index.css';

export default (props) => (
    <div className="subheader">
        <Grid item container md={12} xs={12} justify={'space-between'} style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <Grid item md={2} xs={12} className='menu-list' style={{ height: '400px', backgroundColor: '#e9e9e9' }}>
                {/* FOR MENU LIST */}
            </Grid>
            <Grid item md={8} xs={8}>
                <Slick image={props.subheader_slider_image} />
            </Grid>
            <Grid item container md={2} xs={4}>
                <Grid item md={12} xs={12}>
                    <div>
                        <div style={{ backgroundImage: 'url("http://designsbysarahbryan.com/wp-content/uploads/2010/01/dbs_blinkie-size-200X200.jpg")', height: '200px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                        </div>
                    </div>
                </Grid>
                <Grid item md={12} xs={12}>
                    <div>
                        <div style={{ backgroundImage: 'url("http://designsbysarahbryan.com/wp-content/uploads/2010/01/dbs_blinkie-size-200X200.jpg")', height: '200px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Grid>
        <Grid container md={12} xs={12} justify={'space-between'} style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <Grid item md={2} className='below-menu-list'>
                <div>
                    <div style={{ backgroundImage: 'url("http://designsbysarahbryan.com/wp-content/uploads/2010/01/dbs_blinkie-size-200X200.jpg")', height: '200px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                    </div>
                </div>
            </Grid>
            <Grid item container md={8} xs={8}>
                <Grid item md={6} xs={6}>
                    <div>
                        <div style={{ backgroundImage: 'url("https://www.desktopbackground.org/p/2012/06/18/407355_hd-msi-wallpapers_1920x1080_h.jpg")', height: '200px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                        </div>
                    </div>
                </Grid>
                <Grid item md={6} xs={6}>
                    <div>
                        <div style={{ backgroundImage: 'url("http://wallpaper-gallery.net/images/wallpaper-msi/wallpaper-msi-9.jpg")', height: '200px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <Grid item md={2} xs={4}>
                <div>
                    <div style={{ backgroundImage: 'url("http://designsbysarahbryan.com/wp-content/uploads/2010/01/dbs_blinkie-size-200X200.jpg")', height: '200px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                    </div>
                </div>
            </Grid>
        </Grid>
    </div>
)
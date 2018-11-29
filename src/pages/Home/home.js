import React from 'react';
import Subheader from '../../components/element/Subheader';
import Group from '../../components/element/Group';
import './index.css';

const subheader_slider_image = [
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
const subheader_image = [
    {
        link: 'https://wallpaperplay.com/walls/full/7/3/1/124360.jpg',
    },
    {
        link: 'https://www.setaswall.com/wp-content/uploads/2018/03/MSI-Wallpaper-27-1920x1080.jpg',
    },
    {
        link: 'https://asset.msi.com/global/picture/wallpaper/nb_intel_7th.jpg',
    },
    {
        link: 'https://wallpaperplay.com/walls/full/7/3/1/124360.jpg',
    },
    {
        link: 'https://www.setaswall.com/wp-content/uploads/2018/03/MSI-Wallpaper-27-1920x1080.jpg',
    },
    {
        link: 'https://asset.msi.com/global/picture/wallpaper/nb_intel_7th.jpg',
    },
]

export default () => {
    return (
        <div>
            <Subheader subheader_slider_image={subheader_slider_image} subheader_image={subheader_image} />
            <Group />
            <Group />
        </div>
    )
}
import React, { Component } from 'react';
import config from '../config';
import Breadcrumbs from '../partials/breadcrumbs';
import Tablecontent from '../partials/tablecontent';

export default class Home extends Component {
    
    render() {
        return (
            <div className="home-wrapper component-wrapper">
                <Breadcrumbs title={config.page.home.title} color={config.page.home.color} bgcolor={config.page.home.bgcolor} />
            <div className="home-content block-content">
                <Tablecontent home={config.page.home} />    
            </div>
            </div>
        );
    }
}
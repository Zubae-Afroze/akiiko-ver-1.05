import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Sidebar.css';

export default class Sidebar extends Component {
    state = {
        growBagsDiv: false,
        growHomeDiv: false,
        growLifestyleDiv: false,
        growGiftDiv: false,
        growStorageDiv: false,
        growAccessoriesDiv: false,
    }

    toggleGrowBagsDiv = () => {
        const grows = this.state.growBagsDiv;
        this.setState({growHomeDiv: false});
        this.setState({growLifestyleDiv: false});
        this.setState({growGiftDiv: false});
        this.setState({growStorageDiv: false});
        this.setState({growAccessoriesDiv: false});
        this.setState({growBagsDiv: !grows});
    }

    

    render() {
        return (
            <>
                <Container className='sidebar-wrapper'>
                    <div className='sidebar-main'>
                        <ul>
                            <li>
                                <Link to='/bags/all_products'>Bags</Link></li>
                                {/* {
                                    this.state.growBagsDiv ?
                                    <div>
                                    <ul>
                                        <li>
                                        <a href='root'><img src='/images/nav_drop/home_drop/laundry.png' alt='img_alt'/>
                                        Women</a></li>
                                        <li>
                                        <a href='root'><img src='/images/nav_drop/home_drop/mat.png' alt='img_alt'/>
                                        TOTE</a></li>
                                        <li>
                                        <a href='root'><img src='/images/nav_drop/home_drop/mat.png' alt='img_alt'/>
                                        OFFICE</a></li>
                                        <li>
                                        <a href='root'><img src='/images/nav_drop/home_drop/mat.png' alt='img_alt'/>
                                        TRAVEL</a></li>
                                    </ul>
                                    </div> : null
                                } */}
                            <li>
                                <Link to='/home/all_products'>Home</Link></li>
                            <li>
                                <Link to='/lifestyle/workout'>Lifestyle</Link></li>
                            <li>
                                <Link to='/gift/all_products'>Gift</Link></li>
                            <li>
                                <Link to='/storage/all_products'>Storage</Link></li>
                            <li>
                                <Link to='/accessories/all_products'>Accessories</Link></li>
                        </ul>
                    </div>
                </Container>       
            </>
        )
    }
}

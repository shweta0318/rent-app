import React from 'react'
import Header from '../Header'
import Carousel from '../Carousel'
import Main from '../Main'
import RecentlyAdded from '../RecentlyAdded'
import Footer from '../Footer'
import Navigation from '../Navigation'
export default function MainPageContainer()
{
    return (
        <React.Fragment>
            <Header/>
            <Navigation/>
            <Carousel/>
            <RecentlyAdded/>
            <Main/>
            
            <Footer/>
        </React.Fragment>
    )
}
import React, { Component } from 'react'
import ImageSlider from './ImageSlider'
import { SliderData } from './SliderData'

export default class Carousel extends Component {
    render() {
        return (
            <ImageSlider slides={SliderData}></ImageSlider>
        )
    }
}

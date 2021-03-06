import React from 'react'
import {Card, Carousel} from 'antd'
import './index.less'

export default class Carousels extends React.Component {
  render() {
    return (
      <div className="content-wrapper">
        <Card title="图片背景轮播">
        <Carousel
          autoplay
        >
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>
        </Card>
        <Card title="图片轮播" className="content-wrapper">
          <Carousel autoplay effect="fade">
            <div>
              <img src="/carousel-img/carousel-1.jpg" alt=""/>
            </div>
            <div>
              <img src="/carousel-img/carousel-2.jpg" alt="" />
            </div>
            <div>
              <img src="/carousel-img/carousel-3.jpg" alt="" />
            </div>
          </Carousel>
        </Card>
      </div>
    )
  }
}
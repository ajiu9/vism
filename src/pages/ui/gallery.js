import React from 'react'
import {Card, Row, Col, Modal} from 'antd'

export default class Gallery extends React.Component {
  state = {
    visible: false
  }
  openGallery(item) {
    this.setState({
      imageUrl: `/gallery/${item}`,
      visible: true
    })
  }
  render() {
    const imgs = [
      ['1.png', '2.png', '3.png', '4.png'],
      ['5.png', '6.png', '7.png', '8.png'],
      ['9.png', '10.png', '11.png', '12.png'],
      ['13.png', '14.png', '15.png','16.png'],
      ['17.png', '18.png', '19.png', '20.png'],
      ['21.png', '22.png', '23.png', '24.png', '25.png']
    ]
    const imgList = imgs.map((list) => list.map((item) => 
      <Card cover={<img alt="example" src={`/gallery/${item}`} style={{marginBottom: 16}} onClick={()=>this.openGallery(item)} />}>
        <Card.Meta
          title="Card title"
          description="This is the description"
        />
      </Card>
    ))
    return (
      <div className="content-wrapper">
        <Row gutter="16">
         {imgs.map((item, index) =>
          <Col md={4} sm={24}>
          {imgList[index]}
          </Col>
        )}
        </Row>
        <Modal
          visible={this.state.visible}
          onCancel={() => {
            this.setState({
              visible: false
            })
          }}
          footer={null}
          title="图片画廊"
        >
          <img src={this.state.imageUrl} style={{width:'100%'}}/>
        </Modal>
      </div>
    )
  }
}
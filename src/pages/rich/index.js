import React from 'react'
import {Button,Card,Modal} from 'antd'
import {Editor} from 'react-draft-wysiwyg'
import draftjs from 'draftjs-to-html'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

export default class Rich extends React.Component {
  state = {
    showRichText:false,
    editorContent: '',
    editorState: '',
  }
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState
    })
  }
  handleClearContent = ()=>{
    this.setState({
      editorState:''
    })
  }
  handleGetText = ()=>{
    this.setState({
      showRichText:true
    })
  }
  handleGetText = ()=>{
    this.setState({
      showRichText:true
    })
  }
  onEditorChange = (editorContent) => {
    console.log(editorContent
    )
    this.setState({
      editorContent,
    })
  }
  render() {
    const { editorState } = this.state
    return (
      <div style={{margin: 20}}>
        <Card style={{marginTop:10}}>
            <Button type="primary" onClick={this.handleClearContent}>清空内容</Button>
            <Button type="primary" onClick={this.handleGetText}>获取HTML文本</Button>
        </Card>
        <Card title="富文本编辑器">
        <Editor
          editorState={editorState}
          onContentStateChange={this.onEditorChange}
          onEditorStateChange={this.onEditorStateChange}
        />
        </Card>
        <Modal
          title="富文本"
          visible={this.state.showRichText}
          onCancel={()=>{
              this.setState({
                  showRichText:false
              })
          }}
          footer={null}
        >
          {draftjs(this.state.editorContent)}
        </Modal>
      </div>
    )
  }
}
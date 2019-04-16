import React ,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import "antd/dist/antd.css";
import { Input } from 'antd';
const { TextArea } = Input;
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
import './green.css';
import './githubTheme.css';


import showdown from 'showdown';

class AnkiIndex extends React.Component{
  constructor(props){
    super(props);
    this.state={
      mdText: ""
    }

    this.handleMdText = this.handleMdText.bind(this);
    this.tabCallback = this.tabCallback.bind(this);
  }

  handleMdText(e){

    let converter = new showdown.Converter();
    let md_text = e.target.value;
    let html_text = converter.makeHtml(md_text);

    this.setState({
      html_text
    })

    this.setState({
      md_text
    })
  }

  tabCallback(key){
    console.log(key);
  }




  componentDidMount(){

    
  }


  render(){
    return(
    <div className="index">
      <div style={{color :"#009689",textAlign: "center"}}>
        {/* <div style={{fontSize: "calc(50rem / 1400)"}}>
          Markdown转换Anki可用的Html
        </div> */}
      </div>

      <div style={{display: "flex"}}>
        <div style={{flex: "1 1 auto"}}></div>
        <div style={{flex:"10 1 auto"}}>
          <TextArea rows={10} value={this.state.md_text} onChange={this.handleMdText}/>
        </div>
        <div style={{flex: "1 1 auto"}}></div>
        <div style={{flex: "10 1 auto"}}>
          <Tabs defaultActiveKey="1" onChange={this.state.tabCallback}>
            <TabPane tab="绿色主题" key="1">
            <Input value={this.state.html_text}></Input>
            <div className="green-md" dangerouslySetInnerHTML={{__html:this.state.html_text}}></div></TabPane>
            <TabPane tab="黑白主题" key="2">
            <div className="github-theme" dangerouslySetInnerHTML={{__html:this.state.html_text}}></div></TabPane>
          </Tabs>
        </div>
        <div style={{flex: "1 1 auto"}}></div>
      </div>



    </div>)
  }
}

export default AnkiIndex;



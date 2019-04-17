import React ,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import "antd/dist/antd.css";
import { Input } from 'antd';
const { TextArea } = Input;
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;


class ThemeBlackWhite extends React.Component{


  constructor(props){
    super(props);
    this.state={

    }

  }

  componentDidMount(){
    console.log("黑白主题");
  }


  render(){
    let theme_black_white_style = `
<style>

  .theme-black_white{
    font-size: 16px;

  }
    

h1,h2,h3,h4,h5,h6{font-family: "PT Sans","SF UI Display", ".PingFang SC","PingFang SC", "Neue Haas Grotesk Text Pro", "Arial Nova", "Segoe UI", "Microsoft YaHei", "Microsoft JhengHei", "Helvetica Neue", "Source Han Sans SC", "Noto Sans CJK SC", "Source Han Sans CN", "Noto Sans SC", "Source Han Sans TC", "Noto Sans CJK TC", "Hiragino Sans GB", sans-serif;
text-rendering:optimizelegibility;margin-bottom:1em;font-weight:bold; line-height: 18px;

}
h1,h2{position:relative;padding-top:16px;padding-bottom:4px;margin-bottom: 16px;background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAABCAYAAACsXeyTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAFUlEQVQIHWNIS0sr/v//PwMMDzY+ADqMahlW4J91AAAAAElFTkSuQmCC') bottom left repeat-x;}
h2{padding-top:16px;padding-bottom:2px;}
h1{ font-size: 24px;}
h2{ font-size: 20px;}
h3{ font-size: 18px;}
h4{ font-size: 16px;}
h5{ font-size: 10px;}
h6{ font-size: 9px;}

table{border-collapse:collapse;border-spacing:0;
  margin-top: 8px;
  margin-bottom: 4px;
}
tr{  background-color: #fff;
  border-top: 1px solid #ccc;}
th,td{padding: 5px 14px;
  border: 1px solid #ddd;}

blockquote{font-style:italic;font-size:1.1em;line-height:1.5em;padding-left:1em; border-left:4px solid #D5D5D5;    margin-left: 0;
    margin-right: 0;
    margin-bottom: 15px; }

a{color:#1863a1}

pre,code,p code,li code{font-family:Menlo,Monaco,"Andale Mono","lucida console","Courier New",monospace}

pre{-webkit-border-radius:0.4em;-moz-border-radius:0.4em;-ms-border-radius:0.4em;-o-border-radius:0.4em;border-radius:0.4em;border:1px solid #e7dec3;line-height:1.45em;font-size:9px;margin-bottom:2.1em;padding:.8em 1em;color:#586e75;overflow:auto; background-color:#fdf6e3;}

p code,li code{display:inline-block;white-space:no-wrap;background:#fff;font-size:9px;line-height:1.5em;color:#555;border:1px solid #ddd;-webkit-border-radius:0.4em;-moz-border-radius:0.4em;-ms-border-radius:0.4em;-o-border-radius:0.4em;border-radius:0.4em;padding:0 .3em;margin:-1px 4px;}
p pre code,li pre code{font-size:1em !important;background:none;border:none}

img{max-width:100%;-webkit-border-radius:0.3em;-moz-border-radius:0.3em;-ms-border-radius:0.3em;-o-border-radius:0.3em;border-radius:0.3em;-webkit-box-shadow:rgba(0,0,0,0.15) 0 1px 4px;-moz-box-shadow:rgba(0,0,0,0.15) 0 1px 4px;box-shadow:rgba(0,0,0,0.15) 0 1px 4px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border:#fff 0.5em solid}


hr {
  height: 0;
  margin: 15px 0;
  overflow: hidden;
  background: transparent;
  border: 0;
  border-bottom: 1px solid #ddd;
}


/*

Orginal Style from ethanschoonover.com/solarized (c) Jeremy Hull <sourdrums@gmail.com>

*/

.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  background: #fdf6e3;
  color: #657b83;
  -webkit-text-size-adjust: none;
}

.hljs-comment,
.diff .hljs-header,
.hljs-doctype,
.hljs-pi,
.lisp .hljs-string {
  color: #93a1a1;
}

/* Solarized Green */
.hljs-keyword,
.hljs-winutils,
.method,
.hljs-addition,
.css .hljs-tag,
.hljs-request,
.hljs-status,
.nginx .hljs-title {
  color: #859900;
}

/* Solarized Cyan */
.hljs-number,
.hljs-command,
.hljs-string,
.hljs-tag .hljs-value,
.hljs-rule .hljs-value,
.hljs-doctag,
.tex .hljs-formula,
.hljs-regexp,
.hljs-hexcolor,
.hljs-link_url {
  color: #2aa198;
}

/* Solarized Blue */
.hljs-title,
.hljs-localvars,
.hljs-chunk,
.hljs-decorator,
.hljs-built_in,
.hljs-identifier,
.vhdl .hljs-literal,
.hljs-id,
.css .hljs-function,
.hljs-name {
  color: #268bd2;
}

/* Solarized Yellow */
.hljs-attribute,
.hljs-variable,
.lisp .hljs-body,
.smalltalk .hljs-number,
.hljs-constant,
.hljs-class .hljs-title,
.hljs-parent,
.hljs-type,
.hljs-link_reference {
  color: #b58900;
}

/* Solarized Orange */
.hljs-preprocessor,
.hljs-preprocessor .hljs-keyword,
.hljs-pragma,
.hljs-shebang,
.hljs-symbol,
.hljs-symbol .hljs-string,
.diff .hljs-change,
.hljs-special,
.hljs-attr_selector,
.hljs-subst,
.hljs-cdata,
.css .hljs-pseudo,
.hljs-header {
  color: #cb4b16;
}

/* Solarized Red */
.hljs-deletion,
.hljs-important {
  color: #dc322f;
}

/* Solarized Violet */
.hljs-link_label {
  color: #6c71c4;
}

.tex .hljs-formula {
  background: #eee8d5;
}
</style>
    `;

    return(
      <div id="theme-black_white">
        <Input value={this.props.html_text+theme_black_white_style} id="my-html"></Input>
        <div className="black_white" dangerouslySetInnerHTML={{__html:this.props.html_text+theme_black_white_style}}></div>
      </div>
    )


  }





}

export default ThemeBlackWhite;
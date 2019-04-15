import React ,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import './AnkiIndex.scss'

class AnkiIndex extends React.Component{
  constructor(props){
    super(props);
    this.state={
    }
  }
  componentDidMount(){
    
  }


  render(){
    return(
    <div className="index" style={{backgroundColor: "#F6F7F9"}}>
      <div style={{fontSize: "calc(30rem / 1400)"}}>
        
      </div>
    </div>)
  }
}

export default AnkiIndex;
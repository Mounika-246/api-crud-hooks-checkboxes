import React from 'react'

class Chat extends React.Component {
    constructor(props) {
        super(props)
         this.state = {
            isChat:false,
            isIcon:true,
            button:true
        }
    }
    openChatBox=()=>{
        this.setState({isChat:true,isIcon:false})
    }
    closeChatBox=()=>{
        this.setState({isChat:false,isIcon:true})
    }
    send=()=>{
        this.setState({button:false})
    }
    render() {
        return (
            <div className="container">
                {this.state.isChat?<div className="card shadow col-sm-4 my-5">
                    <header>
                    {this.state.button?
                    <button type="button" className= "btn btn-success  btn-block my-3" style={{ fontSize: '20px', display: 'flex', justifyContent: 'end', color: 'black', fontWeight: '400', fontFamily: 'sans-serif' }} >Chat</button>
                    :<button type="button" className= "btn btn-danger  btn-block my-3" style={{ fontSize: '20px', display: 'flex', justifyContent: 'end', color: 'black', fontWeight: '400', fontFamily: 'sans-serif' }} >Chat</button>}
                    </header>
                    <label className='mx-1' style={{ fontFamily: 'fantasy', textAlign: 'left' }}>Message</label>
                    <div className="form-group">
                        <textarea className="form-control rounded-0" rows="5" placeholder="Type message..." style={{ backgroundColor: '#ddd', height: '40vh' }}></textarea>
                    </div>
                    <button type="button" className="btn btn btn-success btn btn-block " style={{ lineHeight: 2, fontSize: '19PX' }} onClick={this.send}>Send</button>
                    <button type="button" className="btn btn btn-danger btn btn-block " style={{ lineHeight: 2, fontSize: '19PX' }} onClick={this.closeChatBox}>Close</button>



                </div>:null}
                {this.state.isIcon?<i className="fa fa-message icon-sty" onClick={this.openChatBox}></i>:null}
            </div>
        )
    }
}
export default Chat;




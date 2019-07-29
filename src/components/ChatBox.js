import React, { Component } from 'react';
// import RTCMultiConnection from 'rtcmulticonnection';
// import socketURL from 'socket.io';

class ChatBox extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "mounika",
            messageArr: [],
            message: "",
            isChat: false,
            isIcon: true,
            button: true
        }
    }



    sendMessage = (e) => {
        
        e.preventDefault()
        this.state.messageArr.push(this.state.message)
        this.setState({ isChat: true, messageArr: this.state.messageArr })
        console.log(this.state.messageArr);
    }
  
    handleChange = (e) => {
        this.setState({ message: e.target.value })
    }
    openChatBox = () => {
        this.setState({ isChat: true, isIcon: false })
    }
    closeChatBox = () => {
        this.setState({ isChat: false, isIcon: true })
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-offse-2 col-md-4">

                        {this.state.isChat ? <div className="card cardSty">
                            <div className="card-header">
                                <label className="nameleft">{this.state.username}</label>
                                <i className="fa fa-close nameright" onClcik={this.closeChatBox}></i>
                            </div>
                            <div className="card-body">
                                {this.state.isChat ? this.state.messageArr.map((v, k) => (
                                    <ul key={k}>
                                        <li className="chatSty">{v}</li>
                                    </ul>
                                )

                                ) : null}
                            </div>
                            <div className="card-footer">
                                <form onSubmit={this.sendMessage}>
                                    <div class="form-group  col-md-12 send-msg  padding-none margin-none">
                                        <div class="input-container">
                                            <input type="text" class="form-control input-field"
                                                placeholder="Type a message" onChange={this.handleChange} />
                                            <button ><i class="fa fa-send-o send-ico-sty" ></i></button>
                                        </div>
                                    </div>

                                </form>

                            </div>
                        </div> : null}
                    </div>
                    {this.state.isIcon ? <i className="fa fa-message icon-sty" onClick={this.openChatBox}></i> : null}
                </div>
            </div>
        )
    }
}

export default ChatBox;







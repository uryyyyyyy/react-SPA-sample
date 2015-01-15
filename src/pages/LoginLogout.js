/** @jsx React.DOM */
'use strict';
import React  from 'react';
import AsyncUtil  from '../util/AsyncUtil';
import MessageUtil  from '../util/MessageUtil';

export default React.createClass({
    getInitialState: function () {
        return {
            userId:null,
            userName:null
        };
    },
    login: function (res) {
        this.setState({userId:res.userId, userName:res.userName});
    },
    logout: function () {
        this.setState({userId:null, userName:null});
    },
    componentDidMount : function() {
        var promise = AsyncUtil.getAjaxAsync('webAPI/checkLogin');
        promise.then(this.checkLogin, MessageUtil.showServerError);
    },
    checkLogin : function(res) {
        if(res.userId){
            this.setState({userId: res.userId, userName:res.userName});
        }
    },
    render: function() {
        if(this.state.userId){
            return (<LogoutForm logout={this.logout}
                userName={this.state.userName} />);
        }else{
            return (<LoginForm login={this.login} />);
        }
    }
});

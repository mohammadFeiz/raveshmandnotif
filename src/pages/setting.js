import React,{Component} from "react";
import RVD from './../npm/react-virtual-dom/react-virtual-dom';
import AIOButton from './../npm/aio-button/aio-button';
import Table from './../npm/aio-table/aio-table';
import AppContext from "../app-context";
import {Icon} from "@mdi/react";
import { mdiPencil } from "@mdi/js";

export default class Setting extends Component{
    static contextType = AppContext;
    constructor(props){
        super(props);
        this.state = {tab:'sms'}
    }
    tabs_layout(){
        let {tab} = this.state;
        return {
            html:(
                <AIOButton
                    type='tabs'
                    value={tab}
                    options={[
                        {text:'SMS',value:'sms'},
                        {text:'Email',value:'email'},
                        {text:'Push Notification',value:'push'},
                        {text:'Profile',value:'profile'}, 
                    ]}
                    onChange={(tab)=>this.setState({tab})}
                />
            )
        }
    }
    change(prop,key,value,row){
        let {changeProvider} = this.context;
        row[prop] = value;
        changeProvider(key,row)
    }
    table(key){
        let model = this.context[key + '_providers'];
        return (
            <Table
                templates={{
                    edit:(row)=><Icon path={mdiPencil} size={0.8}/>
                }}
                style={{width:'100%'}}
                key={key}
                model={model}
                columns={[
                    {
                        title:'public_service_name',field:'row.public_service_name',width:200,
                        inlineEdit:{onChange:(row,value)=>this.change('public_service_name',key,value,row)}
                    },
                    {
                        title:'type',field:'row.type',width:200,
                        inlineEdit:{onChange:(row,value)=>this.change('type',key,value,row)}
                    },
                    {
                        title:'number',field:'row.number',width:200,
                        inlineEdit:{onChange:(row,value)=>this.change('number',key,value,row)}
                    },
                    {
                        title:'username',field:'row.username',width:200,
                        inlineEdit:{onChange:(row,value)=>this.change('username',key,value,row)}
                    },
                    {
                        title:'password',field:'row.password',width:200,
                        inlineEdit:{onChange:(row,value)=>this.change('password',key,value,row)}
                    },
                    {
                        title:'secretKey',field:'row.secretKey',width:200,
                        inlineEdit:{onChange:(row,value)=>this.change('secretKey',key,value,row)}
                    },
                    {
                        title:'apiKey',field:'row.apiKey',width:200,
                        inlineEdit:{onChange:(row,value)=>this.change('apiKey',key,value,row)}
                    },
                    {
                        title:'domain',field:'row.domain',width:200,
                        inlineEdit:{onChange:(row,value)=>this.change('domain',key,value,row)}
                    },
                    {
                        title:'sender',field:'row.sender',width:200,
                        inlineEdit:{onChange:(row,value)=>this.change('sender',key,value,row)}
                    },
                    {
                        title:'baseUrl',field:'row.baseUrl',width:200,
                        inlineEdit:{onChange:(row,value)=>this.change('baseUrl',key,value,row)}
                    },
                    {
                        title:'a',template:'edit',minWidth:48
                    }
                ]}
            />
        )
    }
    content_layout(){
        let {tab} = this.state;
        return this[tab + '_layout']()
    }
    sms_layout(){
        return {
            flex:1,
            html:this.table('sms')
        }
    }
    email_layout(){
        return {
            flex:1,
            html:this.table('email')
        }
    }
    push_layout(){
        return {
            flex:1,
            html:this.table('push')
        }
    }
    profile_layout(){
        return {
            flex:1,
            html:'profile'
        }
    }
    render(){
        return (
            <RVD
                layout={{
                    column:[
                        this.tabs_layout(),
                        this.content_layout()
                    ]
                }}
            />
        )
    }
}
import React,{Component} from "react";
import Form from './../npm/aio-form-react/aio-form-react';
import AppContext from "../app-context";
export default class Push extends Component{
    static contextType = AppContext;
    render(){
        let {push,changePush,push_services} = this.context;
        return (
            <Form
                model={{push}}
                inputs={[
                    {type:'select',label:'Push Notification',options:push_services,field:'model.push'},
                ]}
                onChange={(model)=>changePush(model.push)}
            />
        )
    }
}
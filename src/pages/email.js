import React,{Component} from "react";
import Form from './../npm/aio-form-react/aio-form-react';
import AppContext from "../app-context";
export default class Email extends Component{
    static contextType = AppContext;
    render(){
        let {email,changeSms,email_services} = this.context;
        return (
            <Form
                model={email}
                inputs={[
                    {type:'select',label:'سرویس خدماتی',options:email_services,field:'model.khadamati'},
                    {type:'select',label:'سرویس تبلیغاتی',options:email_services,field:'model.tablighati'},
                    {type:'select',label:'سرویس پشتیبانی',options:email_services,field:'model.poshtibani'}
                ]}
                onChange={(model)=>changeSms(model)}
            />
        )
    }
}
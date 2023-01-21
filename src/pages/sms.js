import React,{Component} from "react";
import Form from './../npm/aio-form-react/aio-form-react';
import AppContext from "../app-context";
export default class SMS extends Component{
    static contextType = AppContext;
    render(){
        let {sms,changeSms,sms_services} = this.context;
        return (
            <Form
                model={sms}
                inputs={[
                    {type:'select',label:'سرویس خدماتی',options:sms_services,field:'model.khadamati'},
                    {type:'select',label:'سرویس تبلیغاتی',options:sms_services,field:'model.tablighati'},
                    {type:'select',label:'سرویس OTP',options:sms_services,field:'model.otp'}
                ]}
                onChange={(model)=>changeSms(model)}
            />
        )
    }
}
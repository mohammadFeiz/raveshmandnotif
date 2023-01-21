import Axios from 'axios';
export default function apis({getState}){
    return {
        async sms_services(){
            return [
                {text:'سرویس 1',value:'1'},
                {text:'سرویس 2',value:'2'},
                {text:'سرویس 3',value:'3'},
                {text:'سرویس 4',value:'4'},
                {text:'سرویس 5',value:'5'},
                {text:'سرویس 6',value:'6'},
                {text:'سرویس 7',value:'7'}
              ]
        },
        async email_services(){
            return [
                {text:'سرویس 1',value:'1'},
                {text:'سرویس 2',value:'2'},
                {text:'سرویس 3',value:'3'},
                {text:'سرویس 4',value:'4'},
                {text:'سرویس 5',value:'5'},
                {text:'سرویس 6',value:'6'},
                {text:'سرویس 7',value:'7'}
              ]
        },
        async push_services(){
            return [
                {text:'سرویس 1',value:'1'},
                {text:'سرویس 2',value:'2'},
                {text:'سرویس 3',value:'3'},
                {text:'سرویس 4',value:'4'},
                {text:'سرویس 5',value:'5'},
                {text:'سرویس 6',value:'6'},
                {text:'سرویس 7',value:'7'}
              ]
        },
        async sms_config(){
            return {
                khadamati:'1',
                tablighati:'2',
                otp:'3'
              }
        },
        async email_config(){
            return {
                khadamati:'1',
                tablighati:'2',
                poshtibani:'3'
              }
        },
        async push_config(){
            return '3'
        },
        async sms_providers(){
            return [
                {
                  id:'1',
                  public_service_name:'sms public',
                  type:'1',
                  number:'0912345678',
                  username:'msf1364',
                  password:'123456',
                  secretKey:'1231234',
                  apiKey:'124567',
                  domain:'my domain',
                  sender:'msf',
                  baseUrl:'www.google.com'
                },
                {
                  id:'2',
                  public_service_name:'sms public',
                  type:'1',
                  number:'0912345678',
                  username:'msf1364',
                  password:'123456',
                  secretKey:'1231234',
                  apiKey:'124567',
                  domain:'my domain',
                  sender:'msf',
                  baseUrl:'www.google.com'
                },
                {
                  id:'3',
                  public_service_name:'sms public',
                  type:'1',
                  number:'0912345678',
                  username:'msf1364',
                  password:'123456',
                  secretKey:'1231234',
                  apiKey:'124567',
                  domain:'my domain',
                  sender:'msf',
                  baseUrl:'www.google.com'
                }
        
            ]
        },
        async email_providers(){
            return [
                {
                  id:'1',
                  public_service_name:'sms public',
                  type:'1',
                  number:'0912345678',
                  username:'msf1364',
                  password:'123456',
                  secretKey:'1231234',
                  apiKey:'124567',
                  domain:'my domain',
                  sender:'msf',
                  baseUrl:'www.google.com'
                },
                {
                  id:'2',
                  public_service_name:'sms public',
                  type:'1',
                  number:'0912345678',
                  username:'msf1364',
                  password:'123456',
                  secretKey:'1231234',
                  apiKey:'124567',
                  domain:'my domain',
                  sender:'msf',
                  baseUrl:'www.google.com'
                },
                {
                  id:'3',
                  public_service_name:'sms public',
                  type:'1',
                  number:'0912345678',
                  username:'msf1364',
                  password:'123456',
                  secretKey:'1231234',
                  apiKey:'124567',
                  domain:'my domain',
                  sender:'msf',
                  baseUrl:'www.google.com'
                }
        
              ]
        },
        async push_providers(){
            return [
                {
                  id:'1',
                  public_service_name:'sms public',
                  type:'1',
                  number:'0912345678',
                  username:'msf1364',
                  password:'123456',
                  secretKey:'1231234',
                  apiKey:'124567',
                  domain:'my domain',
                  sender:'msf',
                  baseUrl:'www.google.com'
                },
                {
                  id:'2',
                  public_service_name:'sms public',
                  type:'1',
                  number:'0912345678',
                  username:'msf1364',
                  password:'123456',
                  secretKey:'1231234',
                  apiKey:'124567',
                  domain:'my domain',
                  sender:'msf',
                  baseUrl:'www.google.com'
                },
                {
                  id:'3',
                  public_service_name:'sms public',
                  type:'1',
                  number:'0912345678',
                  username:'msf1364',
                  password:'123456',
                  secretKey:'1231234',
                  apiKey:'124567',
                  domain:'my domain',
                  sender:'msf',
                  baseUrl:'www.google.com'
                }
        
              ]
        }
    }
}
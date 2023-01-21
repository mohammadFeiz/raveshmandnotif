import React,{Component} from 'react';
import RSA from './npm/react-super-app/react-super-app';
import SMS from './pages/sms';
import Email from './pages/email';
import Push from './pages/push';
import Setting from './pages/setting';
import {Icon} from '@mdi/react';
import {mdiBell,mdiComment,mdiEmail,mdiCog} from '@mdi/js';
import AIOService from './npm/aio-service/aio-service';
import APIS from './apis';
import AppContext from './app-context';
import './App.css';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      sms_services:[],
      email_services:[],
      push_services:[],
      sms:{},
      email:{},
      push:'',
      sms_providers:[],
      email_providers:[],
      push_providers:[]
    }
    let apis = AIOService({getState:()=>this.state,apis:APIS})
    this.state.apis = apis;
  }
  async componentDidMount(){
    let {apis} = this.state;
    let sms_services = await apis({api:'sms_services'});
    let email_services = await apis({api:'email_services'});
    let push_services = await apis({api:'push_services'});
    let sms = await apis({api:'sms_config'});
    let email = await apis({api:'email_config'});
    let push = await apis({api:'push_config'});
    let sms_providers = await apis({api:'sms_providers'});
    let email_providers = await apis({api:'email_providers'});
    let push_providers = await apis({api:'push_providers'});
    this.setState({sms_services,email_services,push_services,sms,email,push,sms_providers,email_providers,push_providers})
    
  }
  changeSms(sms){
    this.setState({sms})
  }
  changeEmail(email){
    this.setState({email})
  }
  changePush(push){
    this.setState({push})
  }
  changeProvider(type,provider){
    let providers = this.state[type + '_providers'];
    providers = providers.map((o)=>{
      if(o.id === provider.id){return provider}
      return o
    })
    this.setState({[type+'_providers']:providers});
  }
  addProvider(type,provider){
    let providers = this.state[type + '_providers'];
    providers = providers.concat(provider);
    this.setState({[type + '_providers']:providers})
  }
  getContext(){
    return {
      ...this.state,
      changeSms:this.changeSms.bind(this),
      changeEmail:this.changeEmail.bind(this),
      changePush:this.changePush.bind(this),
      changeProvider:this.changeProvider.bind(this),
      addProvider:this.addProvider.bind(this)
    }
  }
  render(){
    return (
      <AppContext.Provider value={this.getContext()}>
        <RSA
          navs={[
            {text:'SMS',id:'sms',icon:()=><Icon path={mdiComment} size={1}/>},
            {text:'E-Mail',id:'email',icon:()=><Icon path={mdiEmail} size={1}/>},
            {text:'Push Notification',id:'push',icon:()=><Icon path={mdiBell} size={1}/>},
            {text:'تنظیمات',id:'setting',icon:()=><Icon path={mdiCog} size={1}/>}
          ]}
          body={({navId})=>{
            if(navId === 'sms'){return <SMS/>}
            if(navId === 'email'){return <Email/>}
            if(navId === 'push'){return <Push/>}
            if(navId === 'setting'){return <Setting/>}
          }}
        />
      </AppContext.Provider>
    )
  }
}
/*
  name@公共方法
  data@2018/04/08
  author@344822559@qq.com
*/

// import MD5 from "md5";
var MD5 = require('md5.js');
import Axios from 'axios';
import AxiosConfig from '../api/axiosConfig'
import CommonParams from '../api/commonParams'
import qs from 'qs';

const functions={

  setStore: (name, content)=>{
    if (!name) return;
    if (typeof content !== 'string') {
      content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
  },

  getStore : name => {
    if (!name) return false;
    return window.localStorage.getItem(name);
  },


  removeStore : name => {
    if (!name) return;
    window.localStorage.removeItem(name);
  },


  setsessionStore : (name, content) => {
    if (!name) return;
    if (typeof content !== 'string') {
      content = JSON.stringify(content);
    }
    window.sessionStorage.setItem(name, content);
  },

  getsessionStore : name => {
    if (!name) return;
    return window.sessionStorage.getItem(name);
  },

  removesessionStore : name => {
    if (!name) return;
    window.sessionStorage.removeItem(name);
  },

  checkEmail : str => {
    let reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    return reg.test(str);
  },

  checkPass : pass => {
    let reg = /^[A-Za-z0-9]{6,40}$/;
    return reg.test(pass);
  },

  createdMd5 : args => {
    args = args.toString(); /*转字符串*/
    let md5stream = new MD5();
    return md5stream.update(args).digest('hex');
  },

  /*数据序列化*/
  serializationData:obj=>{
    return qs.stringify(obj)
  },

  /*axios*/
   requestHttpMethods:async(url,data,commonParam=true,HttpMethod='post',config=AxiosConfig)=>{
    let formatDate=commonParam?Object.assign({},CommonParams,data):data;
    let formatHttp=HttpMethod.toLowerCase();
    let HttpSendType=formatHttp=='post'?Axios.post:Axios.get;
    return HttpSendType(url, formatDate,config).then(res=>{
      return Promise.resolve(res.data)
    })
  }
}

export default functions;

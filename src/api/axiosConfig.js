/*axios配置*/
const axiosConfig = {
  baseURL: 'http://localhost/sto_test/Api/',
  retry: 4,
  retryDelay: 1000,
  timeout: 20000,
  // transformRequest: [function (data, header) {
  //   //data.appkey = 'appkey';
  //   // data.appSecret = 'appSecret';
  //   // data.siteId = userinfo.siteId;
  //   // data.customerCode = userinfo.customerCode;
  //   //return qs.stringify(data)
  // }],
};
export default axiosConfig


exports.keys = "nefelibata";

// exports.graphql = {
//   router: '/graphql',
//   // 是否加载到 app 上，默认开启
//   app: true,
//   // 是否加载到 agent 上，默认关闭
//   agent: false
// };  

// exports.middleware = [ 'graphql' ];

// exports.security = {
//   csrf: {
//     // 判断是否需要 ignore 的方法，请求上下文 context 作为第一个参数
//     enable: false
//   },
// }

module.exports = () => {
  const config = {
    middleware: ['graphql'],
    security: {
      csrf: {
        ignore: () => true,
      },
    },
  };

  // should change to your own
  config.keys = 'egg-graphql';

  return config;
};
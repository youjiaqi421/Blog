/*
 * @Author: youjiaqi421 2430284055@qq.com
 * @Date: 2022-08-22 11:42:26
 * @LastEditors: youjiaqi421 2430284055@qq.com
 * @LastEditTime: 2022-08-22 11:42:28
 * @FilePath: /ss/src/setProxy.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const proxySettings = {
  '/api/': {
    target: 'http://192.168.1.49:5000',
    changeOrigin: true
  },
  '/socket': {
    target: 'http://192.168.1.49:5000',
    ws: true,
    changeOrigin: true,
    pathRewrite: {
      '^/socket': '/'
    }
  },
  '/sentry/': {
    target: 'http://router.anban.cloud:31005',
    ws: false,
    changeOrigin: true,
    pathRewrite: {
      '^/sentry': '/'
    }
  }
}

module.exports = proxySettings
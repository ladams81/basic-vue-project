// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

window.addEventListener('load', async function () {
  if (window.ethereum) {
    try {
      const address = await window.ethereum.enable()
      console.log('connected to Metamask at address ' + address)
      const obj = {
        connectedStatus: true,
        status: '',
        address: address
      }
      return obj
    } catch (error) {
      console.log('Connect to Metamask using the button on the top right')
      // return {
      //   connectedStatus: false,
      //   status: '🦊 Connect to Metamask using the button on the top right.'
      // }
    }
  } else {
    return {
      connectedStatus: false,
      status: '🦊 You must install Metamask into your browser: https://metamask.io/download.html'
    }
  }

  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
  })
})


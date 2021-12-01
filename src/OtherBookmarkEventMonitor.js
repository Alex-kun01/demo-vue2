/*
 * @Description: 
 * @Version: 1.0
 * @Autor: hasaiki
 * @Date: 2021-09-07 11:42:31
 * @LastEditors: hasaiki
 * @LastEditTime: 2021-09-07 13:08:55
 */

import Vue from 'vue';

// 重写setItem
let orignalSetItem = window.localStorage.setItem;
localStorage.setItem = function(key,newValue){
  let setItemEvent = new Event("setItemEvent");  
  setItemEvent.key = key;                        
  setItemEvent.newValue = newValue;              
  window.dispatchEvent(setItemEvent);
  orignalSetItem.apply(this, arguments);
}

/**
 * 浏览器其他页签的监听
 * @param {*} target 需要监听的storage key值
 * @param {*} callback 监听到事件的回调函数
 */
Vue.prototype.$monitor = (target, callback) =>{
  window.addEventListener('storage', (e) => {
    const newVal = e.newValue;
    const key = e.key;
    if(key === target && callback) callback(newVal);
  });
}
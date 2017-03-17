/*
* @Author: Administrator
* @Date:   2017-03-16 15:07:33
* @Last Modified by:   Administrator
* @Last Modified time: 2017-03-17 16:14:24
*/
import Vue from 'vue'
import Vuex from 'vuex'
import  router  from '../router'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)
Vue.config.debug = debug

export default new Vuex.Store({

   state:{
      title:'',
      path:'',
      dialogVisible:false,
      currentData:[]
   },
   actions: {
     setNewTitle({commit},msg){
         commit('NEW_TITLE',msg)
     },
     setRouter({commit},path){
         commit('ROUT_PATH',path)
     },
     route_back({commit}){
         commit('GO_BACK')
     },
     close_dialog({commit}){
         commit('CLOSE_DIALOG',dialogVisible)
     },
     open_dialog({commit}){
         commit('OPEN_DIALOG',dialogVisible)
     },
     setTableData({commit},arr){
         commit('SET_TABLE',arr)
     }
   },
   mutations:{
     NEW_TITLE(state,msg){
        state.title= msg;
        console.log(msg)
     },
     ROUT_PATH(state,path){
        router.push(path)
        state.path = path;
     },
     GO_BACK(state){
        router.go(-1);
     },
     GET_CURRENTROUTER(state,path){
         state.path = path;
     },
     CLOSE_DIALOG(state,dialogVisible){
         state.dialogVisible = false;
     },
     OPEN_DIALOG(state,dialogVisible){
         state.dialogVisible = true;
     },
     SET_TABLE(state,dataArr){
         state.currentData = dataArr
         console.log(state.currentData);
     }
   },
    strict:debug
})

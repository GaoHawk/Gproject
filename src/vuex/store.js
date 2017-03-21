/*
* @Author: Administrator
* @Date:   2017-03-16 15:07:33
* @Last Modified by:   Administrator
* @Last Modified time: 2017-03-21 11:13:28
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
      currentData:[],
      userData:[],
      userList:[],
      userId:'',
      tabId:'1'
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
     },
     setUserTable({commit},arr){
        commit('SET_USER',arr)
     },
     setUserId({commit},userId){
        commit('SET_UID',userId)
     },
     setUserList({commit},arr){
         commit('SET_LIST',arr)
     },
     deleteUserByID({commit},uid){
         commit('DELETE_USER',uid)
     },
     deleteUserData({commit}){
         commit('DELETE_USERDATA')
     },
     setTabId({commit},tId){
         commit('SET_TABID',tId)
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
     },
     SET_USER(state,dataArr){
        state.userData = dataArr
        console.log(state.userData)
     },
     DELETE_USERDATA(state){
         for(let key in state.userData){
             state.userData[key] = ''
         }
         console.log(state.userData);
     },
     SET_LIST(state,dataArr){
        state.userList = dataArr
     },
     DELETE_USER(state,uid){
        state.userList = state.userList.filter(function(item){
            return item.cId !== uid
        })
         console.log(state.userList);
     },
     SET_UID(state,userId){
        state.userId = userId
     },
     SET_TABID(state,tId){
        state.tabId = tId
        console.log(state.tabId)
     }
   },
    strict:debug
})

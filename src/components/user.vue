<template>
<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
<el-col :span="12" >
  <el-form-item label="角色id:" class="custom-bottom">
    <el-input v-model="formLabelAlign.name" :disabled="true" icon="plus"
     :on-icon-click="handleIconClick"></el-input>
  </el-form-item>
  <el-form-item label="用户国家:" class="custom-bottom">
    <el-input v-model="formLabelAlign.region"></el-input>
  </el-form-item>
  <el-form-item label="账号:" class="custom-bottom">
    <el-input v-model="formLabelAlign.type"></el-input>
  </el-form-item>
  <el-form-item label="设备ID:" class="custom-bottom">
    <el-input v-model="formLabelAlign.type"></el-input>
  </el-form-item>
  <el-form-item label="最后登陆:" class="custom-bottom">
    <el-input v-model="formLabelAlign.type"></el-input>
  </el-form-item>
  <el-form-item label="状态:" class="custom-bottom">
    <el-input v-model="formLabelAlign.type"></el-input>
  </el-form-item>
  </el-col>
  <el-col :span="11" :offset="1">
     <el-form-item label="平台:" class="custom-bottom">
       <el-input v-model="formLabelAlign.type"></el-input>
     </el-form-item>
     <el-form-item label="" class="custom-bottom">
       <el-input v-model="formLabelAlign.type"></el-input>
     </el-form-item>
     <el-form-item label="绑定账号:" class="custom-bottom">
       <el-input v-model="formLabelAlign.type"></el-input>
     </el-form-item>
     <el-form-item label="注册时间:" class="custom-bottom">
       <el-input v-model="formLabelAlign.type"></el-input>
     </el-form-item>
     <el-form-item label="累计登陆:" class="custom-bottom">
       <el-input v-model="formLabelAlign.type"></el-input>
     </el-form-item>
     <el-form-item label="IP:" class="custom-bottom">
       <el-input v-model="formLabelAlign.type"></el-input>
     </el-form-item>
  </el-col>
  <el-form-item class="custom-buttonGroup">

    <el-button  @click="openDialog('修改密码')" size="small">修改密码</el-button>
    <el-button @click="openDialog('设置状态')" size="small">设置状态</el-button>
    <el-button @click="openDialog('绑定账号')" size="small">绑定账号</el-button>
    <el-button size="small" @click="openDialog('删除账号')">删除账号</el-button>
  </el-form-item>
</el-form>

</template>
<style>
  .custom-buttonGroup{
     text-align: right;
  }
</style>
<script>
import Dialog from './Dialog.vue'
  export default {
    name: 'app',
    data(){
      return{
          activeName2:'first',
          labelPosition:'left',
          formLabelAlign: {
             name: '',
             region: '',
             type: ''
           },
           right:{
               mariginLeft:"20px"
           },
           dialogFormVisible: false,
        }
    },
    components:{

    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClick(tab,event){
         console.log(tab,event);
      },
      handleIconClick(ev){
         console.log(ev)
      },
      // 对话框控制方法
      openDialog:function(msg){
          this.$store.commit('OPEN_DIALOG');
          this.$store.commit('NEW_TITLE',msg);
      }
    }
  }
</script>

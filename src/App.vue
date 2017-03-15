<template>
  <div id="app">

    <el-row class="tac" :gutter="10">
      <el-col :span="4">
        <h5>带 icon</h5>
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
          router
          unique-opened>
          <el-submenu index="1" >
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
          <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
          <el-submenu index="4" >
            <template slot="title"><i class="el-icon-message"></i>导航四</template>

              <!-- <template slot="title">分组一</template> -->
              <el-menu-item index="4-1">选项1</el-menu-item>
              <el-menu-item index="4-2">选项2</el-menu-item>

          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="20">
          <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
            <el-tab-pane label="用户管理" name="first">

               <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
               <el-col :span="12" >
                 <el-form-item label="角色id:" class="custom-bottom">
                   <el-input v-model="formLabelAlign.name" :disabled="true" icon="plus"
                    :on-icon-click="handleIconClick"></el-input>
                 </el-form-item>
                 <el-form-item label="活动区域" class="custom-bottom">
                   <el-input v-model="formLabelAlign.region"></el-input>
                 </el-form-item>
                 <el-form-item label="活动形式" class="custom-bottom">
                   <el-input v-model="formLabelAlign.type"></el-input>
                 </el-form-item>
                 </el-col>
                 <el-col :span="11" :offset="1">
                    <el-form-item label="活动形式" class="custom-bottom">
                      <el-input v-model="formLabelAlign.type"></el-input>
                    </el-form-item>
                 </el-col>
               </el-form>


            </el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
          </el-tabs>
      </el-col>
    </el-row>




  </div>
</template>

<script>
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
         }
      }
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
    }
  }
}
</script>

<style>
.custom-bottom{
   margin-bottom: 6px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.tabs{
   width:66%;
   display: flex;
   position: fixed;
   left: 34%;
   top: 81px;
}
.nav{
  display: inline;
}
</style>

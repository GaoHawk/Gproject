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

            <userComponent></userComponent>

            </el-tab-pane>
            <el-tab-pane label="角色管理" name="second">
            <character></character>
            </el-tab-pane>
            <el-tab-pane label="阵容" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
          </el-tabs>
      </el-col>
    </el-row>
    <secondCom ></secondCom>
  </div>
</template>

<script>
import userComponent from './components/user.vue'
import secondCom from './components/Dialog.vue'
import character from './components/character.vue'
import Table from './components/table.vue'
export default {
  name: 'app',
  data(){
    return{
        activeName2:'second',
        labelPosition:'left',
        formLabelAlign: {
           name: '',
           region: '',
           type: ''
         },
         right:{
             mariginLeft:"20px"
         },
         dialogVisible: false
      }
  },
  components:{userComponent,secondCom,character,Table},

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
  margin:0 28px;
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

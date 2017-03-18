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
              <template slot="title">账号搜索</template>
              <div class="custom-radio">
                <el-radio class="radio" v-model="radio" label="1">账号UID</el-radio>
                 <el-radio class="radio" v-model="radio" label="2">玩家ID</el-radio>
              </div>

               <el-input
                 placeholder="请输入账号或者玩家昵称"
                 icon="search"
                 v-model="input2"
                 :on-icon-click="handleIconClick2">
               </el-input>

                  <el-table
                    :data="Datajson"
                    border
                    style="width: 100%">
                    <el-table-column
                      prop="zone"
                      label="所在区"
                      width="80">
                    </el-table-column>
                    <el-table-column
                      label="名字"
                      width="90">
                      <template scope="scope">
                          <span style="color:#ff0000;text-decoration:underline;cursor:pointer;" @click="getUserData(scope.$index,scope.row)"> {{ scope.row.nickname }} </span>
                      </template>
                    </el-table-column>
                    <el-table-column
                      prop="level"
                      label="级别"
                      width="85">
                    </el-table-column>
                  </el-table>
                  <!-- <h3 v-show="nodata">没有找到数据</h3> -->
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
          <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
          <el-submenu index="4">
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
            <el-tab-pane label="阵容" name="third">
              <div class="custom-select">
                  <el-select v-model="value"  size="mini" @change="selectChange">
                    <el-option
                      v-for="item in options"
                      :key="item.id"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
              </div>
              <TTable></TTable>
            </el-tab-pane>
            <el-tab-pane label="武将" name="fourth">
               <div class="custom-style">
                 <el-button size="small">赠送武将</el-button>
               </div>
               <TTable></TTable>
            </el-tab-pane>
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
import TTable from './components/table.vue'


export default {
  beforeCreate(){
      // this.$http.get("http://localhost:8081/character/findCharacters",   {
      //   params: {
      //         keyType: 0,
      //         keyValue:2
      //       }
      // }).then(response => {
      //       console.log(response)
      //       console.log(this._data)
      //       // this.$store.commit('SET_TABLE',response.data.data)
      // }, response =>{
      //    console.log(response)
      // })
  },
  name: 'app',
  data(){
    return{
        Datajson:[],
        activeName2:'third',
        labelPosition:'left',
        formLabelAlign: {
           name: '',
           region: '',
           type: ''
         },
         right:{
             mariginLeft:"20px"
         },
         dialogVisible: false,
         options:[{
            id:1,
            value:'选项1',
            label:'PVE阵容'
         },{
            id:2,
            value:'选项2',
            label:'PVP攻击阵容'
         },{
             id:3,
             value:'选项3',
             label:'PVE防御阵容'
         }],
         value:'选项1',
         radio:'1',
         input2:'',
         nodata:false
      }
  },
  components:{userComponent,secondCom,character,TTable},

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClick(tab,event){
       // console.log(tab,event);
       if(tab.label == '武将'){
         console.log(tab)
         this.$http.get("api/table2").then(response => {
               this.$store.commit('SET_TABLE',response.data.data)
         }, response =>{
            console.log(response)
         })
       }
    },
    handleIconClick(ev){
       console.log(ev)
    },
    handleIconClick2(ev){
      console.log(this.radio)
      console.log(this.input2)
      this.$http.get("http://localhost:8081/character/findCharacters",   {
        params: {
              keyType: this.radio-1,
              keyValue:this.input2
            }
      }).then(response => {
            console.log(response)
            console.log(this._data)
            this.Datajson= response.data
            // this.$store.commit('SET_TABLE',response.data.data)
      }, response =>{
         console.log(response)
      })
    },
    getUserData(index,row){
       console.log(index,row)
       this.$http.get("http://localhost:8081/character/getUserInfo",   {
         params: {
               id: row.cId
             }
       }).then(response => {
             console.log(response)
             console.log(this._data)
             // this.Datajson= response.data
             // this.$store.commit('SET_TABLE',response.data.data)
       }, response =>{
          console.log(response)
       })
    },
    selectChange(val){
       if(val == '选项2'){
          this.$http.get("api/table2").then(response => {
                this.$store.commit('SET_TABLE',response.data.data)
          }, response =>{
             console.log(response)
          })
       }else{

       }
    }

  }
}
</script>

<style>
.custom-radio{
    text-align: left;
    padding-left: 5px;
}
.custom-style{
    text-align: right;
}
.custom-select{
  text-align: right;
  margin-bottom: 3px;
}
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

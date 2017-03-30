<template>
<el-form :label-position="labelPosition" label-width="85px" :model="emailForm" :rules="rules" ref="emailForm">
<el-col :span="14" >
  <el-form-item label="选区:" class="custom-bottom" prop="characters" style="min-height:170px;">
    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange"
    style="float:left;">全选</el-checkbox>
    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange"
      style="text-align:left;">
      <el-checkbox v-for="city in cities" :label="city"
      style="maring-left:0;">
      {{city}}</el-checkbox>
    </el-checkbox-group>
    <div style="clear:both;"></div>
  </el-form-item>
  <el-form-item label="有效期限:" class="custom-bottom"  style="height:50px;" prop="date1">
    <el-date-picker
      v-model="emailForm.date1"
      type="datetimerange"
      placeholder="选择时间范围"
      style="width:100%;">
    </el-date-picker>

  </el-form-item>
  <el-form-item label="间隔时间:"  class="custom-bottom" prop="space" style="height:50px;text-align:left;">
    <el-input  v-model.number="emailForm.space" placeholder="请设置消息发送间隔" style="width:50%;"></el-input><span>单位:秒</span>
  </el-form-item>
  <el-form-item label="内容:"   class="custom-bottom" prop="content">
    <el-input  type="textarea" resize="none" v-model="emailForm.content" ></el-input>
  </el-form-item>

  <el-form-item class="custom-buttonGroup1">
    <el-button  @click="sendEmail('emailForm')" size="small">发送</el-button>
  </el-form-item>
  </el-col>
</el-form>
</template>
<style>
  .custom-buttonGroup1{
     text-align: center;
  }
  .el-textarea__inner{
      height:80px;
  }
</style>
<script>
import EDialog from './EmailDialog.vue'
import { mapState } from 'vuex'
const cityOptions = ['上海','北京','广州','深圳']

  export default {
    name: 'app',
    computed:{
       ...mapState({

       })
    },
    data(){
      var checkCharFomat = (rule,value,callback) =>{
         if(value === ''){
            callback(new Error('请输入收件人'));
         } else if(value.length > 0 ){
            for(let j=0;j<value.length;j++){
                 console.log(value.charCodeAt(j))
                if(value.charCodeAt(j) > 65248 || value.charCodeAt(j)==12288){
                    callback(new Error('有全角字符格式不正确,请输入半角字符'))
                    return;
                }
            }
            var strArr = value.split(',');
            var bl = true;
            for(let i=0;i<strArr.length;i++){
               if(strArr[i].trim() == ''){
                  bl = false;
               }
            }
            if(!bl){
              callback(new Error('请输入正确的格式,以逗号分割用户'));
            }
         }
         callback();
      };
      var validateCheck = (rule,value,callback) =>{
        if (value[0] === null || value[1] === null) {
          callback(new Error('请输入正确的时间范围'));
        } else {
        
          callback();
        }
      };
      var checkItemFomat = (rule,value,callback) =>{
         if(value === ''){
            callback(new Error('请输入要赠送的物品'));
         } else if(value.length > 0){
          for(let j=0;j<value.length;j++){
               console.log(value.charCodeAt(j))
              if(value.charCodeAt(j) > 65248 || value.charCodeAt(j)==12288){
                  callback(new Error('有全角字符格式不正确,请输入半角字符'))
                  return;
              }
          }
            var sArr = value.split(",");
            var b = true;
            for(let i=0;i<sArr.length;i++){
               if(sArr[i].trim() == ''){
                  b = false;
               }else {
                   if(sArr[i].trim().indexOf('-') < 0){
                       b = false;
                   }
               }
            }
            if(!b){
                callback(new Error('请输入正确的格式:物品id加"-"物品数量,不同物品以逗号间隔'));
            }
         }
         callback();
      };
      return{
          checkAll:true,
          checkedCities: ['上海', '北京'],
          cities: cityOptions,
          isIndeterminate: true,
          emailForm:{
            characters:'',
            g_cash:'',
            m_cash:'',
            title:'',
            content:'',
            items:'',
            date1:'',
            date2:'',
            space:''
          },
          rules:{
            title:{
               required:true, message:'请输入标题', trigger:'change'
            },
            content:[
              { required:true,message:'请输入邮件内容',trigger:'change' }
            ],
            date1:[
              { validator: validateCheck, trigger: 'change'  }
            ],
            characters:{
               validator:checkCharFomat, trigger:'blur'
            },
            items:{
               validator:checkItemFomat, trigger:'blur'
            },
            space:[
              { required:true,message:'不能为空'},
              { type:'number',message:'时间间隔必须是数字'}
            ]
          },
          labelPosition:'right',
          dialogFormVisible: false,
        }
    },
    components:{
        EDialog
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
      sendEmail:function(formName){
         console.log(this.$refs[formName])
         console.log(this.emailForm)
         this.$refs[formName].validate((valid) => {
            if(valid) {
                  this.$http.get("/pkmOperate/operate/sendMail",   {
                       params:{
                       characters:this.emailForm.characters,
                       g_cash:this.emailForm.g_cash,
                       m_cash:this.emailForm.m_cash,
                       title:this.emailForm.title,
                       content:this.emailForm.content,
                       items:this.emailForm.items
                       }
                  }).then(response => {
                        console.log(response)

                        // this.$store.commit('SET_USER',response.data)
                        this.$store.commit('SET_RESPONSE',response.data)
                        this.$store.commit('OPEN_DIALOG1');
                  }, response =>{
                     this.$store.commit('OPEN_DIALOG1');
                     this.$store.commit('SET_RESPONSE',response.data?response.data:'提交失败');
                     console.log(response)
                  })

            }else{
               console.log('error submit!!');
               return false;
            }
         })
      },
      handleCheckAllChange(event) {
        this.checkedCities = event.target.checked ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }
    }
  }
</script>

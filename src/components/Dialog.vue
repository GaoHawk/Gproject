<template>

<el-dialog :title="title" v-model="dialogVisible" size="tiny"
 :show-close=false
 :close-on-press-escape=false
 :close-on-click-modal =false
 >
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="close_dialog">取 消</el-button>
    <el-button type="primary" @click="close_dialog">确 定</el-button>
  </span>
</el-dialog>
</template>
<script>
    import { mapState, mapActions } from 'vuex'
    export default {
      data() {
        return {

        }
      },
      computed:{
          ...mapState({
             title:state => state.title,
             dialogVisible:state => state.dialogVisible
          })
      },
      methods:{
          close_dialog:function(){
             this.$store.commit('CLOSE_DIALOG');
          }
      },
      destroyed(){
          console.log(this.$store);
      }
    };
</script>

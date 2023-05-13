<template>
  <div class="footer" v-show="todoLength">
    <div ><input type="checkbox" v-model="isAll"> 已完成{{completedNumbers}} / 全部{{todoLength}}</div>
    <button class="clearBtn" @click="clearList">清除已完成任务</button>
  </div>
</template>

<script>
export default {
    name: "MyFooter",
    props:['todoList'],
    computed:{
        todoLength(){
            return this.todoList.length
        }
        ,
        completedNumbers(){
            // let count = 0
            // this.todoList.forEach(todo =>  todo.completed && count++ )
            // return count
            return this.todoList.reduce((pre,todo) => pre + (todo.completed ? 1 : 0)  , 0)
        },
        isAll:{
            get(){
                return this.completedNumbers === this.todoLength && this.todoLength > 0
            },
            set(value){
                // 子组件中触发父组件的自定义事件，并传数据
                this.$emit('todoListCheckedAll',value)
            }
        }
    },
    methods:{
        clearList(){
            this.$emit('clearAlCompleted')
        }
    }

  
}
</script>

<style scoped>
.footer{
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 100%;
    font-size: 16px;
    color: #444;
    padding: 8px 0;
    height: 30px;
}
input{
    margin-right: 20px;
}
.clearBtn{
    background-color: rgb(229, 88, 67);
    color: #fff;
    margin-right: 5px;
    border: none;
    height: 25px;
}
.clearBtn:hover{
    background-color: rgba(128, 9, 9, 0.578);
    cursor:pointer
}
</style>
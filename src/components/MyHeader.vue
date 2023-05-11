<template>
 <div class="inputBox">
    <input   type="text" placeholder="请输入您的待办事项" v-model="content" @keyup.enter="add" >
 </div>
</template>

<script>
export default {
    name: "MyHeader",
    data(){
        return{
            content:'',
            isChecked : false
        }
    },
    props:['addToList', 'todoList'],
    methods:{
        add(){
            // 数据校验
            if(!this.content.trim()) return alert("输入内容不能为空")

            // 将输入框的内容包装为对象
            const todoObj = {
                id: this.todoList.length,
                content: this.content,
                completed: false
            }
            // 添加数据
            this.addToList(todoObj)
            // 清空输入框
            this.content = ''

        }
    }
}
</script>

<style scoped>

.inputBox input{
    width: 90%;
    margin:5px 20px;
    height: 30px;
    border-radius: 30px;
    text-indent: 1em;
    border: 1px solid black;
}
</style>
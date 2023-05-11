<template>
  <div class="ItemBox">
    <div class="input">
      <input 
        :checked="todo.completed"  
        type="checkbox" 
        @change="handleCheck(todo.id)"
        >
        {{todo.content}}
      </div>
    <button class="btn" @click="deleteTodo(todo.id)">删除</button>
  </div>
</template>

<script>
export default {
    name: "MyItem",
    props:['todo','changeCompleted','deleteToDoFromList'],
    methods:{
      // 处理checkbox按钮
      handleCheck(id){
        this.changeCompleted(id)
      },

      // 处理删除事件
      deleteTodo(id){
        this.deleteToDoFromList(id)
      }
    }
}
</script>

<style scoped>
.ItemBox{
    display: flex;
    height: 20px;
    text-align: center;
    justify-content: space-between;
    font-size: 13px;
    color: #222;
    border: 1px solid #e4e0e0;
    padding: 5px 0;
    
}
.ItemBox:hover{
  background-color: #e4e0e05e;

}

.ItemBox:hover button{
  display: block;
}
.input{
    display: flex;
    align-items: center;
    line-height: 100%;
    
}

.ItemBox button{
    display: none;
    border-radius: 10%;
    background-color: rgb(229, 88, 67);
    color: rgb(240, 208, 172);
    margin-right: 5px;
    border: none;
    cursor: pointer;
}
</style>
<template>
 <div class="inputBox">
    <input type="text" placeholder="请输入您的待办事项" >
 </div>
</template>

<script>
export default {
    name: "MyHeader"
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
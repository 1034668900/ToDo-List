<template>
  <div class="ItemBox">
    <div class="input"><input  type="checkbox">敲代码</div>
    <button>删除</button>
  </div>
</template>

<script>
export default {
    name: "MyItem"
}
</script>

<style scoped>
.ItemBox{
    display: flex;
    text-align: center;
    justify-content: space-between;
    font-size: 13px;
    color: #222;
    border: 1px solid #e4e0e0;
    padding: 5px 0;
    
}
.input{
    display: flex;
    align-items: center;
    line-height: 100%;
    
}
.ItemBox button{
    border-radius: 10%;
    background-color: rgb(229, 88, 67);
    color: rgb(240, 208, 172);
    margin-right: 5px;
    border: none;
}
</style>
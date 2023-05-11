<template>
  <div class="footer">
    <input type="checkbox"> 已完成0 / 全部3
  </div>
</template>

<script>
export default {
    name: "MyFooter"
}
</script>

<style scoped>
.footer{
    display: flex;
    align-items: center;
    line-height: 100%;
    font-size: 16px;
    color: #444;
    padding: 8px 0;
}
input{
    margin-right: 20px;
}
</style>
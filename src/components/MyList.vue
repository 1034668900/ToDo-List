<template>
  <div>
    <MyItem v-for="todo in todoList" :todo="todo"/>

  </div>
</template>

<script>
import MyItem from './MyItem.vue'
export default {
    name: "MyList",
    components:{
        MyItem
    },
    props:['todoList']
}
</script>


<template>
  <div>
    <MyItem :deleteToDoFromList="deleteToDoFromList" :changeCompleted="changeCompleted" v-for="todo in todoList" :todo="todo"/>

  </div>
</template>

<script>
import MyItem from './MyItem.vue'
export default {
    name: "MyList",
    components:{
        MyItem
    },
    props:['todoList','changeCompleted','deleteToDoFromList']
}
</script>


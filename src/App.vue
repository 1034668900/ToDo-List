<script>
import MyFooter from "./components/MyFooter.vue";
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";
export default{
    components:{
        MyFooter,
        MyHeader,
        MyList
    }
}

</script>

<template>
   <div class="container">
    <MyHeader/>
    <MyList/>
    <MyFooter/> 
   </div>
 
</template>

<style scoped>
.container{
    border: 1px solid black;
    width: 60%;
    margin: 0 auto;
}
</style>

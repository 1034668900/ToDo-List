<script>
import MyFooter from "./components/MyFooter.vue";
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";
export default {
  components: {
    MyFooter,
    MyHeader,
    MyList,
  },
  data() {
    return {
      // 初识时浏览器本地没有todoList，此时得到的是null，后续功能使用的一些方法就会出错
      todoList: JSON.parse(localStorage.getItem("todoList")) || [],
    };
  },
  methods: {
    // 向todoList中添加数据
    addToList(todoObj) {
      this.todoList.unshift(todoObj);
    },

    // 改变todoList中指定任务的完成状态completed
    changeCompleted(id) {
      this.todoList.forEach((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
      });
    },

    // 删除指定任务
    deleteToDoFromList(id) {
      if (confirm("是否确认删除？")) {
        this.todoList = this.todoList.filter((todo) => todo.id !== id);
      }
    },

    // 全选或全不选任务
    todoListCheckedAll(flag) {
      if (flag) {
        this.todoList.forEach((todo) => (todo.completed = true));
      } else {
        this.todoList.forEach((todo) => (todo.completed = false));
      }
    },

    // 清空任务
    clearAlCompleted() {
      if (confirm("是否确认清除已完成任务？")) {
        this.todoList = this.todoList.filter((todo) => !todo.completed);
      }
    },

    // 修改每个todoItem项的isEdit状态
    setTodoIsEdit(id) {
      this.todoList.forEach((todo) => {
        if (todo.id === id) {
          todo.isEdit = !todo.isEdit;
        }
      });
    },

    // 修改每个todoItem项的内容
    resetTodoContent(todo, newValue) {
      this.todoList.forEach((item) => {
        if (item.id === todo.id) {
          item.content = newValue;
        }
      });
    },

    // 关闭所有的编辑状态
    closeIsEdit() {
      this.todoList.forEach((todo) => (todo.isEdit = false));
    },
  },
  watch: {
    // 监视todoList的变化，一变化就往浏览器储存 此时简写时，修改对象内部属性时监视不到
    /*todoList(value){
            localStorage.setItem("todoList",JSON.stringify(value))
        }  */

    // 应该使用完整写法，开启深度监视，从而监视每个对象内部属性的变化
    todoList: {
      // 开启深度监视
      deep: true,
      handler(value) {
        localStorage.setItem("todoList", JSON.stringify(value));
      },
    },
  },
  mounted() {
    this.$bus.$on("changeCompleted", this.changeCompleted);
    this.$bus.$on("deleteToDoFromList", this.deleteToDoFromList);
    this.$bus.$on("setTodoIsEdit", this.setTodoIsEdit);
    this.$bus.$on("resetTodoContent", this.resetTodoContent);
    this.$bus.$on("closeIsEdit", this.closeIsEdit);
  },
  beforeDestroy() {
    this.$bus.$off([
      "changeCompleted",
      "deleteToDoFromList",
      "setTodoIsEdit",
      "resetTodoContent",
      "closeIsEdit",
    ]);
  },
};
</script>

<template>
  <div class="container">
    <MyHeader :todoList="todoList" @addToList="addToList" />

    <MyList :todoList="todoList" />

    <MyFooter
      @clearAlCompleted="clearAlCompleted"
      @todoListCheckedAll="todoListCheckedAll"
      :todoList="todoList"
    />
  </div>
</template>

<style scoped>
.container {
  border: 1px solid black;
  width: 500px;
  margin: 0 auto;
}
</style>

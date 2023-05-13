<template>
  <div class="ItemBox">
    <div class="input">
      <input
        :checked="todo.completed"
        type="checkbox"
        @change="handleCheck(todo.id)"
      />
      <span v-show="!todo.isEdit">{{ todo.content }}</span>
      <input
        type="text"
        v-show="todo.isEdit"
        :value="todo.content"
        @keyup.enter="subEdit(todo, $event)"
        ref="autoFocus"
        @blur="handleBlur(todo, $event)"
      />
    </div>
    <div class="btn">
      <button @click="handleEdit(todo)">编辑</button>
      <button @click="deleteTodo(todo.id)">删除</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyItem",
  props: ["todo"],
  methods: {
    // 处理checkbox按钮
    handleCheck(id) {
      this.$bus.$emit("changeCompleted", id);
    },

    // 处理删除事件
    deleteTodo(id) {
      this.$bus.$emit("deleteToDoFromList", id);
    },

    // 处理编辑事件
    handleEdit(todo) {
      // 修改todo的编辑状态(isEdit)
      this.$bus.$emit("setTodoIsEdit", todo.id);
      if (todo.isEdit) {
        /* 
        Vue的DOM操作是异步的，如果处理自动聚焦的函数不写在nextTick中，则聚焦操作不会触发DOM更新
        $nextTick --> 下一次DOM更新结束后再执行内部回调
      */
        // 处理自动聚焦
        this.$nextTick(() => {
          this.$refs.autoFocus.focus();
        });
      }
    },

    // 处理编辑输入框内容修改
    subEdit(todo, e) {
      // 关闭编辑状态
      todo.isEdit = false;
      // 判断修改内容
      if (!e.target.value.trim()) return alert('修改内容不能为空');
      // 修改内容
      this.$bus.$emit("resetTodoContent", todo, e.target.value);
    },

    // 处理输入框失去焦点执行的事件
    handleBlur(todo, e) {
      // 关闭编辑状态
      todo.isEdit = false;
      // 判断修改内容
      if (!e.target.value.trim()) return alert('修改内容不能为空');
      // 修改内容
      this.$bus.$emit("resetTodoContent", todo, e.target.value);
    },
  },
};
</script>

<style scoped>
.ItemBox {
  display: flex;
  height: 20px;
  text-align: center;
  justify-content: space-between;
  font-size: 13px;
  color: #222;
  border: 1px solid #e4e0e0;
  padding: 5px 0;
}
.ItemBox:hover {
  background-color: #e4e0e05e;
}

.ItemBox:hover button {
  display: block;
}
.input {
  display: flex;
  align-items: center;
  line-height: 100%;
}

.ItemBox button {
  display: none;
  border-radius: 10%;
  background-color: rgb(229, 88, 67);
  color: rgb(240, 208, 172);
  margin-right: 5px;
  border: none;
  cursor: pointer;
}

.btn {
  display: flex;
}
</style>
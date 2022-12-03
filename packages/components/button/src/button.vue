<template>
  <el-button :type="type" @click="handlerClick">Primary</el-button>
</template>

<script lang="ts">
import { ElButton } from "element-plus";
import { defineComponent } from "vue";
import { buttonProps } from "./button";

export default defineComponent({
  name: "AButton",
  props:buttonProps,
  components: {
    ElButton,
  },
  setup() {
    const handlerClick = () => {
      alert("1111");
    };

    return {
      handlerClick,
    };
  },
});
</script>

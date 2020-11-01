<template>
  <div class="UiBtn" @click="$emit('click')">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "UiBtn",
};
</script>

<style lang="scss">
.UiBtn {
  padding: 15px;
  background: #5977ea;
  color: #ffffff;
  border-radius: 5px;
  width: 100%;
  text-align: center;
  cursor: pointer;
  border: solid 1px #f3f3f3;

  &:hover {
    background: #6e83d6;
  }

  &__outline {
    background: none;
    border: solid 3px #b38b3a;
    color: #b38b3a;

    &:hover {
      background: rgba(185, 147, 55, 0.3);
    }
  }
}
</style>

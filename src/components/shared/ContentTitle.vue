<template>
  <div class="d-flex align-items-end my-3 font-weight-bold">
    <h4 ref="h4Ref" class="header">{{ title }}</h4>
    <div ref="borderRef" class="ml-auto onlyborder"></div>
  </div>
</template>

<script>
export default {
  props: { title: String },
  mounted() {
    const { borderRef, h4Ref } = this.$refs;
    borderRef.style.width = `calc(100% - ${h4Ref.offsetWidth + 5}px)`;
  },
};
</script>

<style lang="scss" scoped>
.my-3 {
  padding: 0 2.2rem;
  h4.header {
    margin-bottom: -0.5rem;
  }
  .onlyborder {
    border-bottom: 1px solid #969696;
    margin-bottom: -1px;
  }
}
</style>
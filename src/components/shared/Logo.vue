<template>
  <div class="col-8 col-lg-4 d-flex align-items-center">
    <img class="img-fluid" :src="src" :class="classes" alt="logo" />
  </div>
</template>
<script>
export default {
  props: ["src", "classes"],
};
</script>
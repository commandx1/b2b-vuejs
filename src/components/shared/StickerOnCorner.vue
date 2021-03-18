<template>
  <div
    class="position-absolute important"
    :style="{
      width: stickerWidth + 'rem',
      height: stickerWidth + 'rem',
    }"
  >
    <div class="position-relative w-100 h-100">
      <div
        class="position-absolute"
        :style="
          customStyle
            ? customStyle
            : {
                fontSize: stickerWidth - 1 + 'rem',
              }
        "
      >
        {{ stickerTitle }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    stickerTitle: String,
    stickerWidth: Number,
    customStyle: Object,
  },
};
</script>

<style lang="scss">
@import "../../variables.scss";

.position-absolute.important {
  clip-path: polygon(0 0, 0% 100%, 100% 0);
  background: $b2b-red;
  top: 0.5rem;
  left: 0.75rem;
  color: white;

  .position-absolute {
    font-weight: 900;
    top: 25%;
    left: 25%;
    transform: translate(-45%, -45%);
  }
}
</style>
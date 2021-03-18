<template>
  <Carousel
    :margin="margin"
    :responsive="responsive"
    class="position-relative carousel"
    :items="items"
    :nav="false"
    :dots="false"
  >
    <template slot="prev"
      ><i class="slideNav fas fa-chevron-left"></i
    ></template>
    <slot></slot>
    <template slot="next"
      ><i class="slideNav fas fa-chevron-right"></i
    ></template>
  </Carousel>
</template>

<script>
import Carousel from "vue-owl-carousel";

export default {
  components: { Carousel },
  props: {
    margin: { type: Number, default: 10 },
    items: { type: Number, default: 4 },
    responsive: {
      type: Object,
      default() {
        return {
          0: { items: 1 },
          575: { items: 2 },
          768: { items: 3 },
          1200: { items: 4 },
        };
      },
    },
  },
};
</script>

<style lang="scss">
.carousel {
  padding: 0 2.2rem;
  .slideNav {
    position: absolute;
    z-index: 3;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 0.8rem;
    font-size: 2em;
    color: #d4d4d4;
    cursor: pointer;
    transition: 300ms;
  }

  .fa-chevron-right {
    left: calc(100% - 0.8rem);
  }

  .owl-stage {
    display: flex;
  }

  &:hover {
    .slideNav {
      color: hsl(0, 0%, 33%);
    }
  }
}
</style>
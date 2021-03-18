<template>
  <div class="my-3 border-top border-bottom brands">
    <Slider :items="8" :responsive="responsive">
      <img v-for="img in brands" :src="img.img" :key="img.id" />
    </Slider>
  </div>
</template>

<script>
import Slider from "../../shared/Slider.vue";
import { brands } from "../images";
export default {
  components: { Slider },
  data() {
    return {
      brands,
      responsive: {
        0: { items: 4 },
        575: { items: 6 },
        768: { items: 8 },
      },
    };
  },
};
</script>


<style lang="scss">
@import "../../../variables.scss";
.brands {
  border-color: $b2b-grey !important;
}
</style>
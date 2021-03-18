<template>
  <div>
    <div class="container mt-2">
      <div class="topSlide p-2 contentlayout rounded">
        <div class="row mx-0">
          <SideMenu v-if="getwebsite !== 'main'" />
          <Carousel />
          <ProductSlide v-if="getwebsite !== 'main'" />
        </div>
      </div>
      <Slogan />
      <Reklam />
      <ProductOnSale />
    </div>
    <OpportunityProduct />
    <div class="container">
      <NewProducts />
      <Slogan />
      <Brands />
    </div>
  </div>
</template>

<script>
import { components } from "./components";
import { mapGetters } from "vuex";

export default {
  components,
  props: ["site"],
  computed: {
    ...mapGetters({
      getwebsite: "getwebsite",
    }),
  },
};
</script>
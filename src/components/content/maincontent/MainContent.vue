<template>
  <div>
    <div class="container mt-2">
      <div class="topSlide p-2 contentlayout rounded">
        <div class="row mx-0">
          <SideMenu v-if="getwebsite == 'firma1'" />
          <Carousel />
          <ProductSlide v-if="getwebsite == 'firma1'" />
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
  computed: {
    ...mapGetters({
      getwebsite: "getwebsite",
    }),
  },
};
</script>
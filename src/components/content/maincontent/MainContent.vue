<template>
  <div>
    <div class="container mt-2">
      {{ site }}
      <div class="topSlide p-2 contentlayout rounded">
        <div class="row mx-0">
          <SideMenu />
          <Carousel />
          <ProductSlide />
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

export default {
  components,
  props: ["site"],
};
</script>
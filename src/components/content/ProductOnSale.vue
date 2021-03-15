<template>
  <div class="contentlayout productsOnSale mt-3 p-2 position-relative">
    <ContentTitle :title="'İndirimli Ürünler'" />
    <Slider>
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :imgSrc="product.src"
      />
    </Slider>
    <StickerOnCorner :stickerWidth="2.5" :stickerTitle="'%'" />
  </div>
</template>

<script>
import StickerOnCorner from "../shared/StickerOnCorner";
import ContentTitle from "../shared/ContentTitle";
import ProductCard from "../card/ProductCard";
import { products } from "./images";
import Slider from "../shared/Slider.vue";
export default {
  components: {
    StickerOnCorner,
    ProductCard,
    ContentTitle,
    Slider,
  },
  data() {
    return {
      products,
    };
  },
};
</script>
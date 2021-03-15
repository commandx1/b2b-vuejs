<template>
  <div class="contentlayout productsOnSale mt-3 p-2 position-relative">
    <ContentTitle :title="'Yeni Ürünler'" />
    <Slider>
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :imgSrc="product.src"
      />
    </Slider>
    <StickerOnCorner
      :stickerWidth="3"
      :customStyle="{
        fontSize: '1rem',
        transform: 'translate(-45%, -45%) rotate(-45deg)',
        top: '30%',
        left: '33%',
      }"
      :stickerTitle="'Yeni'"
    />
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
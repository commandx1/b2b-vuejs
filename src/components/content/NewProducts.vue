<template>
  <div class="contentlayout productsOnSale mt-3 p-2 position-relative">
    <ContentTitle :title="'Yeni Ürünler'" />
    <Slider v-if="getsiteData.products">
      <ProductCard
        v-for="product in getsiteData.products"
        :key="product.id"
        :product="product"
      />
    </Slider>
    <Loader v-else />
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
import Loader from "../shared/Loader";
import { mapGetters } from "vuex";
export default {
  components: {
    StickerOnCorner,
    ProductCard,
    ContentTitle,
    Loader,
    Slider,
  },
  data() {
    return {
      products,
    };
  },
  computed: {
    ...mapGetters({
      getsiteData: "getsiteData",
    }),
  },
};
</script>
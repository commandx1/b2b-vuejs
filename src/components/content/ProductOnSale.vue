<template>
  <div class="contentlayout productsOnSale mt-3 p-2 position-relative">
    <ContentTitle :title="'İndirimli Ürünler'" />
    <Slider v-if="getsiteData.products">
      <ProductCard
        v-for="product in getsiteData.products"
        :key="product.id"
        :product="product"
      />
    </Slider>
    <Loader v-else></Loader>
    <StickerOnCorner :stickerWidth="2.5" :stickerTitle="'%'" />
  </div>
</template>

<script>
import StickerOnCorner from "../shared/StickerOnCorner";
import ContentTitle from "../shared/ContentTitle";
import ProductCard from "../card/ProductCard";
import { mapGetters } from "vuex";
import Slider from "../shared/Slider.vue";
import Loader from "../shared/Loader.vue";
export default {
  components: {
    StickerOnCorner,
    ProductCard,
    ContentTitle,
    Slider,
    Loader,
  },
  computed: {
    ...mapGetters({
      getsiteData: "getsiteData",
    }),
  },
};
</script>
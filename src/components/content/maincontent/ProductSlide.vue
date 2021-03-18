<template>
  <div
    class="col-lg-6 col-sm-12 col-24 order-2 order-lg-3 carousel productSlide mt-2 mt-sm-0"
  >
    <div class="bg-white h-100">
      <h5 class="font-weight-bold text-center title">Günün Fırsatları</h5>
      <StickerOnCorner :stickerTitle="'!'" :stickerWidth="3.5" />
      <Slider :items="1" :responsive="{ items: 1 }" v-if="getsiteData.products">
        <ProductCard
          :sticker="true"
          :title="true"
          v-for="product in getsiteData.products"
          :key="product.id"
          :product="product"
        />
      </Slider>
      <Loader v-else></Loader>
    </div>
  </div>
</template>

<script>
import ProductCard from "../../card/ProductCard";
import Slider from "../../shared/Slider.vue";
import StickerOnCorner from "../../shared/StickerOnCorner.vue";
import { mapGetters } from "vuex";
import Loader from "../../shared/Loader.vue";
export default {
  components: { ProductCard, Slider, StickerOnCorner, Loader },
  computed: {
    ...mapGetters({
      getsiteData: "getsiteData",
    }),
  },
};
</script>

<style lang="scss">
.productSlide {
  h5.title {
    padding-top: 2.5rem;
  }
  .productcard {
    padding: 0 0 1rem !important;
  }
  .carousel {
    .slideNav {
      left: 1rem;
    }

    .fa-chevron-right {
      left: calc(100% - 1rem);
    }

    .owl-item {
      height: auto !important;
    }
  }
}
</style>
<template>
  <div
    class="mt-3 opportunitywrapper"
    v-if="getwebsite == 'firma1' || getwebsite == 'firma3'"
  >
    <div class="container py-2">
      <div class="contentlayout p-2 position-relative">
        <ContentTitle :title="'Fırsat Ürünleri'" />
        <Slider
          :margin="30"
          :items="1"
          :responsive="{ items: 1 }"
          v-if="getsiteData.products"
        >
          <div
            class="row h-100"
            v-for="(product, i) in products"
            :key="product.id"
          >
            <div class="col-lg-12 p-1 mb-2 mb-lg-0" v-if="product.length > 2">
              <ProductCard :bigCard="true" :product="product[0]" />
            </div>
            <div
              class="px-1"
              :class="[
                { 'col-24': product.length < 3 },
                { 'col-lg-12': product.length > 2 },
              ]"
            >
              <div class="row mx-0 h-100">
                <div
                  class="col-md-12 p-1"
                  style="max-height: 500px"
                  :class="[
                    { 'col-xl-6': product.length < 3 },
                    { 'mb-0': i >= 3 },
                  ]"
                  v-for="p in product.length < 3 ? product : product.slice(1)"
                  :key="p.id"
                >
                  <ProductCard :product="p" />
                </div>
              </div>
            </div>
          </div>
        </Slider>
        <Loader v-else></Loader>
        <StickerOnCorner :stickerWidth="2.5" :stickerTitle="'!'" />
      </div>
    </div>
  </div>
</template>

<script>
import StickerOnCorner from "../shared/StickerOnCorner";
import ContentTitle from "../shared/ContentTitle";
import ProductCard from "../card/ProductCard";
import { mapGetters } from "vuex";
import Slider from "../shared/Slider";
import Loader from "../shared/Loader.vue";

export default {
  components: { StickerOnCorner, ContentTitle, ProductCard, Slider, Loader },
  data() {
    return {
      products: [],
    };
  },
  watch: {
    getsiteData() {
      for (let i = 0; i < this.getsiteData.products.length; i += 5) {
        const test1 = this.getsiteData.products.slice(i, i + 5);
        this.products.push(test1);
      }
    },
  },
  computed: {
    ...mapGetters({ getsiteData: "getsiteData", getwebsite: "getwebsite" }),
  },
};
</script>

<style lang="scss" scoped>
.opportunitywrapper {
  background: hsl(0, 0%, 90%);
}
</style>
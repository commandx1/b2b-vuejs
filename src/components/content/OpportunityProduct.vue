<template>
  <div class="mt-3 opportunitywrapper">
    <div class="container py-2">
      <div class="contentlayout p-2 position-relative">
        <ContentTitle :title="'Fırsat Ürünleri'" />
        <Slider :margin="30" :items="1" :responsive="{ items: 1 }">
          <div
            class="row h-100"
            v-for="(product, i) in products"
            :key="product.id"
          >
            <div class="col-lg-12 p-1 mb-2 mb-lg-0" v-if="product.length > 2">
              <ProductCard :bigCard="true" :imgSrc="product[0].src" />
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
                  <ProductCard :imgSrc="p.src" />
                </div>
              </div>
            </div>
          </div>
        </Slider>
        <StickerOnCorner :stickerWidth="2.5" :stickerTitle="'!'" />
      </div>
    </div>
  </div>
</template>

<script>
import StickerOnCorner from "../shared/StickerOnCorner";
import ContentTitle from "../shared/ContentTitle";
import ProductCard from "../card/ProductCard";
import { products } from "./images";
import Slider from "../shared/Slider";
export default {
  components: { StickerOnCorner, ContentTitle, ProductCard, Slider },
  data() {
    return {
      products: [],
    };
  },
  beforeMount() {
    for (let i = 0; i < products.length; i += 5) {
      const test1 = products.slice(i, i + 5);
      this.products.push(test1);
    }
  },
};
</script>

<style lang="scss" scoped>
.opportunitywrapper {
  background: hsl(0, 0%, 90%);
}
</style>
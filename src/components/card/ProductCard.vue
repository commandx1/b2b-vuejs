<template>
  <div
    :class="{ bigCard }"
    class="productcard bg-white h-100 rounded d-flex flex-column justify-content-between"
  >
    <div
      class="imageBox w-100 border flex-center p-4 mb-2"
      :style="{ height: bigCard ? '300px' : '150px' }"
    >
      <img :src="product.src" class="w-100 h-100" />
    </div>
    <div class="producttitle font-weight-bolder mb-2">
      {{ product.title }}
    </div>
    <div class="mb-2"><span class="font-weight-bold">OEM</span> 3578965</div>
    <div v-if="getwebsite == 'firma1' || getwebsite == 'firma2'">
      <div class="d-flex flex-wrap align-items-end justify-content-between">
        <h4 class="newPrice">2,750 TL</h4>
        <div class="oldPrice mb-2">
          <div class="inner">3,000 TL</div>
        </div>
      </div>
      <button class="d-flex align-items-center w-100">
        <div class="img d-sm-none d-lg-block">
          <i class="fas fa-tractor"></i>
        </div>
        <div class="text">Sepete Ekle</div>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: [
    "sticker",
    "title",
    "stickerTitle",
    "stickerWidth",
    "bigCard",
    "imgSrc",
    "product",
  ],
  computed: {
    ...mapGetters({
      getwebsite: "getwebsite",
    }),
  },
};
</script>

<style lang="scss" scoped>
.productcard {
  padding: 2.5rem 2rem 2rem;
  .imageBox {
    border-radius: 0.5rem;
    img {
      object-fit: contain;
      object-position: center;
    }
  }

  .newPrice {
    color: #d10c0c;
    font-weight: 700;
  }

  .oldPrice {
    color: red;
    text-decoration: line-through;
    .inner {
      color: initial;
    }
  }

  button.d-flex {
    border-radius: 0.3rem;
    outline: none;
    border: 1px solid #d3d3d3;
    background: white;
    cursor: pointer;
    transition: 300ms;
    * {
      transition: 300ms;
    }

    &:hover {
      border-color: hsl(0, 0%, 33%);
      * {
        color: hsl(0, 0%, 33%) !important;
        text-shadow: none !important;
      }
    }

    :is(.img, .text) {
      padding: 0.4rem 0.75rem;
    }

    .img {
      width: 30%;
      img {
        width: 80%;
      }

      .fa-tractor {
        color: #d4d4d4;
      }
    }

    .text {
      border-radius: 0.3rem;
      background: #f7ad0e;
      color: white;
      width: 71%;
      @media (min-width: 575px) and (max-width: 991px) {
        width: 100%;
      }
      font-weight: 600;
      text-shadow: 0 0.05rem 0.05rem rgba($color: #000000, $alpha: 0.7);
    }
  }
}
@media (min-width: 768px) {
  .bigCard {
    .producttitle {
      font-size: 2.5rem;

      & + .mb-2 {
        font-size: 2rem;
      }
    }
    .newPrice {
      font-size: 3.5rem;
    }
    .oldPrice {
      font-size: 2rem;
    }

    button {
      :is(.img, .text) {
        padding: 1.6rem !important;
      }
    }
  }
}
</style>
<template>
  <div
    class="position-relative"
    :class="[
      { 'col-24': this.getwebsite !== 'firma1' },
      {
        'col-lg-12 order-3 order-lg-2 mt-2 mt-lg-0':
          this.getwebsite == 'firma1',
      },
    ]"
  >
    <div class="p-2 bg-white rounded h-100">
      <Carousel
        class="h-100"
        :items="1"
        :nav="false"
        :autoplay="true"
        :loop="true"
        :margin="10"
        @changed="slideChanged"
      >
        <img
          v-for="i in slideImages"
          :key="i.id"
          :src="i.img"
          alt=""
          class="owl-images"
        />
      </Carousel>
    </div>
    <div class="position-absolute owl-squares d-flex">
      <div
        v-for="(sq, i) in squares"
        :key="i"
        @click="squareNavHandler(i)"
        class="mr-1 rounded cursor-pointer"
        :class="{ active: sq }"
      ></div>
    </div>
  </div>
</template>

<script>
import Carousel from "vue-owl-carousel";
import { slideImages } from "../images";
import { mapGetters } from "vuex";
import $ from "jquery";

export default {
  components: {
    Carousel,
  },
  data() {
    return {
      slideImages,
      squares: [true, false, false, false, false],
    };
  },
  methods: {
    slideChanged() {
      $(".owl-dots .owl-dot").each((i, d) => {
        if (d.classList.contains("active")) {
          $(".mr-1.rounded").each((index, item) => {
            if (index == i) {
              item.classList.add("active");
            } else item.classList.remove("active");
          });
        }
      });
    },
    squareNavHandler(i) {
      $(".owl-dots .owl-dot").each((index, d) => {
        if (i == index) {
          d.click();
        }
      });
    },
  },
  computed: {
    ...mapGetters({
      getwebsite: "getwebsite",
    }),
  },
};
</script>

<style lang="scss">
.topSlide {
  .col-lg-12,
  .col-lg-6 {
    padding: 0 0.25rem !important;
  }

  .sideMenuItem {
    padding: 0.38rem 0;
  }

  .owl-carousel.owl-theme {
    height: 100%;
    button {
      outline: none;
    }
    .owl-stage-outer {
      position: relative;
      height: 96%;

      .owl-stage {
        height: 100%;
      }

      .owl-item {
        height: 100%;
      }

      .owl-images {
        display: block;
        width: 100%;
        object-fit: cover;
        height: 100%;
        object-position: center;
      }
    }

    .owl-dots {
      margin-top: 5px;
    }
  }
}

.owl-squares {
  bottom: 2.2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 50;
  .mr-1 {
    width: 25px;
    height: 25px;
    background: #d6d6d6;
    z-index: 3;
  }
  .mr-1.active {
    background: #869791;
  }
}
</style>
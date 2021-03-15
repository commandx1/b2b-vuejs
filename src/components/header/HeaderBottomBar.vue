<template>
  <div
    class="headerbottombar bg-white"
    :class="[{ footer }, { 'border-bottom': !footer }, { overflow: footer }]"
  >
    <div :class="{ container: !footer }">
      <div
        class="row py-1 justify-content-center mx-0 d-lg-block"
        :class="{ 'd-none': !footer }"
      >
        <div class="col-xl-20 col-24">
          <div
            class="navigation row justify-content-center mx-auto"
            :class="{ 'flex-nowrap': footer }"
          >
            <a
              href="#"
              class="col py-2 d-block list-unstyled text-center position-relative"
              :class="{ ' border-left': i !== 0 }"
              v-for="(item, i) in menu"
              :key="item.id"
            >
              {{ item.title }} <span v-html="item.sticker"></span
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { menu } from "./menu";
export default {
  props: ["footer"],
  data() {
    return {
      menu,
    };
  },
};
</script>

<style lang="scss">
@import "../../variables.scss";

.overflow {
  overflow-x: auto;
}

.headerbottombar.footer {
  background: transparent !important;
  * {
    color: white !important;
  }

  @media (max-width: 1199px) and (min-width: 992px) {
    a.col {
      font-size: 90% !important;
    }
  }

  a {
    font-size: 68% !important;
    min-width: 100px;
    &:hover {
      font-weight: 500;
    }
  }

  .col-24 {
    max-width: 100% !important;
  }

  .bg {
    border-width: 10px !important;
  }
  .text {
    font-size: 8px !important;
    top: 2px !important;
    left: 0 !important;
  }

  .navigation {
    justify-content: flex-start !important;
  }
}

.headerbottombar {
  a {
    transition: 200ms;

    &:hover {
      color: black !important;
      transform: scale(1.05);
      font-weight: 600;
    }
  }

  .navigation {
    .position-absolute.bg {
      top: 0;
      left: 0;
      border-bottom: 15px solid transparent;
      border-right: 15px solid transparent;
    }

    .position-absolute.bg.blue {
      border-left: 15px solid blue;
      border-top: 15px solid blue;
    }
    .position-absolute.bg.red {
      border-left: 15px solid $b2b-red;
      border-top: 15px solid $b2b-red;
    }

    .position-absolute.text {
      left: 1px;
      top: 0;
      color: white;
      font-size: 10px;
      z-index: 2;
    }
    a {
      color: $b2b-black;
      font-size: 80%;
    }
  }
}
</style>
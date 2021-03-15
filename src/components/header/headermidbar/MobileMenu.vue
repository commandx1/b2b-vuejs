<template>
  <div>
    <button
      @click="showMenu = !showMenu"
      class="mt-3 d-flex d-lg-none align-items-center mobileMenu_button"
    >
      Menu
      <i
        class="fas fa-chevron-down ml-2"
        :style="{ transform: showMenu ? 'rotate(180deg)' : 'rotate(0deg)' }"
      ></i>
    </button>
    <transition name="mobileMenu">
      <div v-if="showMenu" class="d-flex d-lg-none flex-column mobileMenu pt-2">
        <a class="border-bottom" href="#" v-for="item in menu" :key="item.id">{{
          item.title
        }}</a>
      </div>
    </transition>
  </div>
</template>

<script>
import { menu } from "../menu";
export default {
  data() {
    return {
      showMenu: false,
      menu,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../../variables.scss";

.mobileMenu-enter-active {
  animation: menu-in 0.5s ease-in-out forwards;
}

.mobileMenu-leave-active {
  animation: menu-out 0.5s ease-in-out forwards;
}

@keyframes menu-in {
  from {
    max-height: 0;
    opacity: 0;
  }

  to {
    max-height: 500px;
    opacity: 1;
  }
}

@keyframes menu-out {
  from {
    max-height: 500px;
    opacity: 1;
  }

  to {
    max-height: 0px;
    opacity: 0;
  }
}

.mobileMenu_button {
  outline: none;
  border: none;
  background: white;
  color: $b2b-red;
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  cursor: pointer;

  .fa-chevron-down {
    transition: 500ms;
  }
}

.mobileMenu {
  a {
    color: $b2b-link-color;
  }
}
</style>
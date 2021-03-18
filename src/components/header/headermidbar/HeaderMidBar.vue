<template>
  <div class="headermidbar py-4">
    <div class="row">
      <Logo :src="logo" />
      <Searchbar />
      <Login />
      <Tractor />
    </div>
    <MobileMenu />
  </div>
</template>

<script>
import Searchbar from "./Searchbar";
import Login from "./Login";
import Tractor from "./Tractor";
import MobileMenu from "./MobileMenu";
import Logo from "../../shared/Logo";
import logo from "../../../assets/logo-white.png";
export default {
  components: {
    Searchbar,
    Login,
    Tractor,
    MobileMenu,
    Logo,
  },
  data() {
    return {
      logo,
    };
  },
};
</script>

<style lang="scss">
@import "../../../variables.scss";

header {
  img[alt="logo"] {
    transform: translateX(-2px);
  }

  .small {
    font-size: 60% !important;
  }
}
</style>
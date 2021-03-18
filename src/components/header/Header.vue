<template>
  <header>
    <div class="container">
      <HeaderTopBar />
      <HeaderMidBar />
    </div>
    <HeaderBottomBar />
  </header>
</template>


<script>
import HeaderTopBar from "./HeaderTopBar";
import HeaderMidBar from "./headermidbar/HeaderMidBar";
import HeaderBottomBar from "./HeaderBottomBar";
export default {
  components: {
    HeaderTopBar,
    HeaderMidBar,
    HeaderBottomBar,
  },
};
</script>


<style lang="scss">
@import "../../variables.scss";

header {
  background: $b2b-red;
  color: white;

  .searchicon {
    width: 45px;
    border-left: 1px solid $b2b-light-grey;
    i {
      color: $b2b-light-grey;
      font-size: 20px;
    }
  }
}
</style>
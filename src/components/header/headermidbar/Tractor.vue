<template>
  <div class="col-xl-3 col-lg-4 col-sm-6 col-8 order-3 order-lg-4">
    <div class="tractor d-flex align-items-center bg-white h-100">
      <div class="text-center">
        <span class="bg-danger px-1 py-2"> 125 </span>
      </div>
      <div class="flex-center h-100">
        <img src="../../../assets/tractor.png" class="w-75" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../../variables.scss";

.tractor {
  border-radius: 50px;
  .text-center {
    padding: 0.6rem 0.35rem;
  }
  div {
    .bg-danger {
      background: $b2b-red !important;
      border-radius: 50%;
    }
  }

  .flex-center {
    border-left: 1px solid $b2b-light-grey;
    img {
      filter: opacity(0.3);
    }
  }
}
</style>
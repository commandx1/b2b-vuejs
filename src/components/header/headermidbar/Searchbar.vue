<template>
  <div class="col-24 col-lg-12 col-xl-14 mt-3 mt-lg-0 order-4 order-lg-2">
    <div class="searchbox d-flex align-items-center bg-white h-100">
      <input
        type="text"
        id="search"
        class="border-0 calc-width py-2"
        placeholder="Ürün, marka, model ..."
      />
      <div class="searchicon flex-center h-100 py-2">
        <i class="fas fa-search"></i>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.searchbox {
  border-radius: 50px;
  input {
    outline: none;
    height: 90%;
    width: calc(100% - 45px - 1rem);
    margin-left: 1rem;

    &::placeholder {
      opacity: 0.5;
    }
  }
}
</style>
<template>
  <div
    class="col-xl-3 col-lg-4 col-sm-8 col-5 order-2 order-lg-3 ml-auto ml-lg-0"
  >
    <div class="login d-flex align-items-center bg-white h-100">
      <i class="fas fa-user d-block d-sm-none mx-auto"></i>
      <div class="p-2 calc-width text-center d-none d-sm-block">
        <a href="#" class="d-block font-weight-bold">Giriş Yap</a>
        <span class="small"> veya</span><a href="#" class="small"> Kayıt Ol</a>
      </div>
      <div class="searchicon flex-center h-100 d-none d-sm-flex">
        <i class="fas fa-lock"></i>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../../variables.scss";

.login {
  border-radius: 50px;
  .fa-user {
    color: $b2b-grey;
  }
  .calc-width {
    color: $b2b-grey;
    width: calc(100% - 45px);
    a {
      color: $b2b-grey;
      font-size: 12px;
    }
    a.d-block {
      margin-bottom: -10px;
    }
  }
}
</style>
<template>
  <footer class="pt-2 pb-4">
    <div class="container">
      <HeaderTopBar />
      <div class="row justify-content-between mt-2">
        <Logo :src="logo" :classes="'mt-5'" />
        <div class="col-md-5 col-lg-3 col-7">
          <img
            src="https://images.hepsiburada.net/banners/0/imageUrl2094_20201110131516.png"
            class="img-fluid bg-white p-1 mb-1"
          />
          <img src="../../assets/mastercard-visa-troy.png" class="img-fluid" />
        </div>
      </div>
      <div class="row align-items-end mt-4">
        <div class="col contact mb-4">
          <p>FERHATPAŞA MAH. G13 SOK. NO 72 KAT 4</p>
          <p>ATAŞEHİR - İSTANBUL - TÜRKİYE</p>
          <p class="mt-2">+90 216 471 31 40 PBX</p>
          <a href="#" class="d-block">info@yedpar.com.tr</a>
        </div>
        <div class="col-md-5 col-lg-3 col-7">
          <img
            src="../../assets/googleplay-appstore.jpg"
            class="img-fluid"
            alt=""
          />
        </div>
      </div>
      <div class="mt-2 row align-items-center border-top border-bottom py-2">
        <div class="col">
          <a href="#">www.yedpar.com.tr</a>
        </div>
        <div class="col-xl-15 col-24 mt-3 mt-xl-0">
          <HeaderBottomBar :footer="true" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import HeaderTopBar from "../header/HeaderTopBar";
import HeaderBottomBar from "../header/HeaderBottomBar";
import Logo from "../shared/Logo";
import logo from "../../assets/logo-red.png";
export default {
  components: { HeaderTopBar, Logo, HeaderBottomBar },
  data() {
    return {
      logo,
    };
  },
};
</script>

<style lang="scss" scoped>
footer {
  background: #969696;
  * {
    color: white;
  }

  .contact {
    font-size: 90%;
    p {
      margin-bottom: 0;
    }
  }
}
</style>
<template>
  <div>
    <Header />
    <Content :site="site" />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/header/Header";
import Content from "./components/content/maincontent/MainContent";
import Footer from "./components/footer/Footer";
import "./globalclasses.scss";

export default {
  components: {
    Header,
    Footer,
    Content,
  },
  data() {
    return {
      locationParts: window.location.host.split("."),
      site: "",
    };
  },
  mounted() {
    if (this.locationParts[0] === "www") {
      this.site = "site1";
    } else this.site = "site2";
  },
};
</script>
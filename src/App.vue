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
    const firstPart = this.locationParts[0];
    switch (firstPart) {
      case "www":
        this.site = "main";
        break;
      case "desolate-reaches-37168":
        this.site = "desolate";
        break;
      case "firma1":
        this.site = "firma1";
        break;
      case "firma2":
        this.site = "firma2";
        break;
      default:
        this.site = "main";
        break;
    }
  },
};
</script>
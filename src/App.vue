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
import { changeColor } from "./globalFunctions";
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
  created() {
    const firstPart = this.locationParts[0];

    switch (firstPart) {
      // case "www":
      case "firma1":
        this.site = "main";
        this.$store.dispatch("initApp", {
          url: "api/firma1",
        });
        this.$store.dispatch("initWebsite", { site: "main" });
        break;
      case "firma2":
        this.site = "firma2";
        changeColor("--b2b-red", "#3f3293");
        changeColor(
          "--b2b-layout",
          "linear-gradient(to right, #f3f3f3, #f2f0ff)"
        );
        this.$store.dispatch("initApp", {
          url: "api/firma2",
        });
        this.$store.dispatch("initWebsite", { site: "firma2" });
        break;
      case "firma3":
        this.site = "firma3";
        changeColor("--b2b-red", "black");
        this.$store.dispatch("initApp", {
          url: "api/firma3",
        });
        this.$store.dispatch("initWebsite", { site: "firma3" });
        break;
      default:
        this.site = "main";
        this.$store.dispatch("initApp", {
          url: "api/firma1",
        });
        this.$store.dispatch("initWebsite", { site: "main" });
        break;
    }
  },
};
</script>

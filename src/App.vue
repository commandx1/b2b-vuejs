<template>
  <div>
    <Header />
    <Content />
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
};
</script>
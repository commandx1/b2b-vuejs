<template>
  <div class="loader"></div>
</template>

<style lang="scss" scoped>
.loader {
  border: 6px solid #f3f3f3;
  border-radius: 50%;
  border-top: 6px solid #869791;
  margin: auto;
  width: 80px;
  height: 80px;
  -webkit-animation: spin-data-v-2f9372bd 2s linear infinite;
  animation: spin-data-v-2f9372bd 1s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
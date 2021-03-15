<template>
  <h6 class="mt-3 reklam">
    <span class="font-weight-bold"
      >THE MAJOR SUPPLIER OF TRACTOR SPARE PARTS IN TURKEY</span
    >
    TÜRKİYE’NİN EN BÜYÜK TRAKTÖR YEDEK PARÇA TEDARİKÇİSİ
  </h6>
</template>

<style lang="scss">
h6.reklam {
  font-size: 1.181rem;
  text-align: justify;
  color: #869791;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 575px) {
    font-size: 13px;
  }

  & + .row {
    .col-md-6 {
      border-color: black !important;
    }
    small {
      font-size: 67%;
      display: block;
    }
  }
}
</style>
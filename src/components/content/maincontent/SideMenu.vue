<template>
  <div class="col-lg-6 col-sm-12">
    <div class="bg-white p-2 text-center h-100 rounded">
      <h4 class="border-bottom pb-2 font-weight-bold mb-0">Markalar</h4>

      <div class="sideMenuItem border-bottom" v-for="i in 7" :key="i">
        <div class="d-flex align-items-center" style="background: #f3f3f3">
          <img
            src="../../../assets/menu/massey-ferguson.jpg"
            alt=""
            height="40"
            class="mr-2"
          />
          <small>Massey Ferguson</small>
          <div style="flex: 1"></div>
          <i class="fas fa-chevron-right mr-2"></i>
        </div>
      </div>
    </div>
  </div>
</template>
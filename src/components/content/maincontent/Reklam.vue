<template>
  <div class="row">
    <div
      class="col-sm-12 col-lg-6"
      :class="{ 'border-right mb-2 mb-sm-0': i !== reklam.length - 1 }"
      v-for="(img, i) in reklam"
      :key="img.id"
    >
      <div class="contentlayout rounded text-center py-3 px-1 h-100">
        <div class="flex-center mb-2">
          <img
            v-for="(src, index) in img.img"
            :key="src.id"
            :src="src.src"
            :width="src.width"
            :height="src.height"
            :style="src.style"
            :class="{ 'mr-2': index !== img.img.length - 1 }"
            alt=""
          />
        </div>
        <small
          :class="{ 'font-weight-bolder': i == 0 }"
          v-for="(desc, i) in img.descriptions"
          :key="i"
        >
          {{ desc }}
        </small>
      </div>
    </div>
  </div>
</template>

<script>
import { reklam } from "../images";
export default {
  data() {
    return {
      reklam,
    };
  },
};
</script>
<template>
  <div>
    <div class="Hero Hero--center">
      <div class="Hero-cover">
        <div class="Crop">
          <img src="http://1.bp.blogspot.com/-S-pkqiT-87k/UdHWC7dhDrI/AAAAAAAALb0/9fdtV9-3z4E/s1600/plazaIndependencia.jpg" alt="">
        </div>
      </div>
      <div class="Hero-body">
        <div class="Container">
          <div class="Hero-title">
            Drupal Decoupled
          </div>
          <div class="Hero-description">
            Nuxtjs + Vuejs + Webpack + Drupal WS
          </div>
        </div>
      </div>
    </div>
    <noticias/>
  </div>
</template>

<script>
import Noticias from '~/plugins/Noticias.vue'
export default {
  components: {
    Noticias
  }
}
</script>
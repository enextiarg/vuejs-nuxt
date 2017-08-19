<template>
<div>
  <div class="Grid-item u-md-size2of3">
  <div class="Box Box--destacado1">
    <div class="Media Media--rev">
      <div class="Media-image">
        <img v-bind:src="noticias[0].field_fotos[0].url" alt="" width="260px" height="260px">
          </div>
              <div class="Media-body">
                <span class="Box-info">{{ noticias[0].field_fecha[0].value}}</span>
                <h3 class="Box-title">
                 <a href="">{{ noticias[0].title[0].value }}</a>
                </h3>
               <p class="Box-text">{{noticias[0].field_resumen[0].value}}</p>
              </div>
        </div>
    </div>
  </div>
</div>
</template>
<script>
import axios from 'axios'

export default {
  asyncData ({ req, params }) {
    // We can return a Promise instead of calling the callback
    return axios.get('http://dev-rexolution.pantheonsite.io/api/noticias')
      .then((res) => {
        return { noticias: res.data }
      })
  }
}
</script>
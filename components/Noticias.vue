<template>
  <div class="Grid-item u-md-size2of3">
    <div class="Box Box--destacado1">
      <div class="Media Media--rev" v-for="noticia in noticias" >
        <div class="Media-image">
          <img v-bind:src="noticia.field_fotos[0].url" alt="" width="260px" height="260px">
        </div>
        <div class="Media-body">
          <span class="Box-info">{{ noticia.field_fecha[0].value}}</span>
          <h3 class="Box-title">
            <a href="">{{ noticia.title[0].value }}</a>
          </h3>
          <p class="Box-text">{{noticia.field_resumen[0].value}}</p>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    noticias: {
      type: Array,
      required: true
    }
  },
  asyncData ({ req, params }) {
    // We can return a Promise instead of calling the callback
    return axios.get('http://dev-rexolution.pantheonsite.io/api/noticias')
      .then((res) => {
        console.log('Noticias: ', res.data)
        return { noticias: res.data }
      })
  }
}
</script>

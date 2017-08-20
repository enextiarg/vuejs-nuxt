<template>
  <section class="container">
    <div>
    <header class="Header">
      <div class="Container">
        <div class="Header-top">
          <div class="Grid">
            <div class="Grid-item u-size1of3">
              <a href="#" class="Header-top-parent">
                <div class="Flag">
                  <span class="Flag-image">
                    <img class="Header-parentIcon"
                         src="https://peu.agesic.gub.uy/portaltipo2017/img/parent.svg"
                         data-fallback="https://peu.agesic.gub.uy/portaltipo2017/img/parent.svg"
                         alt="">
                  </span>
                  <span class="Flag-body">Cabezal</span>
                </div>
              </a>
            </div>
            <div class="Grid-item u-size2of3">
              <ul class="Header-top-nav">
                <li><a href="#">Datos abiertos</a></li>
                <li><a href="#">Concursos</a></li>
                <li><a href="#">Adquisiciones</a></li>
                <li><a href="#">Transparencia</a></li>
                <li><a href="#">Contacto</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="Header-body">
          <div class="Bar">
            <div class="Bar-cell u-md-size2of10">
              <h1 class="Header-logo">
                <a href="./index.html">
                  <span class="Flag">
                    <span class="Flag-image">
                      <img src="https://peu.agesic.gub.uy/portaltipo2017/img/parent.svg"
                       data-fallback="https://peu.agesic.gub.uy/portaltipo2017/img/parent.svg"
                       alt="" width="40">
                    </span>
                    <span class="Flag-body">
                       Uruguay
                    </span>
                  </span>
                </a>
              </h1>
            </div>
            <div class="Bar-cell u-md-size1of10 u-textRight ">
              <a class="Header-related" href="http://uruguaydigital.gub.uy/">
                <img src="https://peu.agesic.gub.uy/portaltipo2017/dist/assets/logo-uruguay.svg"
                     data-fallback="https://peu.agesic.gub.uy/portaltipo2017/dist/assets/logo-uruguay.svg"
                     alt="Uruguay Digital" width="100">
              </a>
            </div>

            <div class="Bar-cell">
              <button class="Header-menuButton js-toggleMainNav">
                <span class="Header-menuIcon"><span></span></span>
                <span class="Header-menuButton-text">Menu</span>
              </button>
            </div>

            <div class="Bar-cell u-md-size3of10">
              <div class="Header-search">
                <div class="Search Search--b">
                  <form action="#">
                    <label for="caja-buscador">Buscar</label>
                    <input id="caja-buscador" class="Search-input" type="search" placeholder="Buscar...">
                    <input class="Search-button" type="submit" value="Buscar">
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

      <app-menu :menus="menus" />

      <div class="Hero Hero--center">
      <div class="Hero-cover">
        <div class="Crop">
          <img src="http://1.bp.blogspot.com/-S-pkqiT-87k/UdHWC7dhDrI/AAAAAAAALb0/9fdtV9-3z4E/s1600/plazaIndependencia.jpg" alt="">
        </div>
      </div>

      <div class="Hero-body">
        <div class="Container">
          <div class="Hero-title">
            Vuejs
          </div>

          <div class="Hero-description">
            SSR
          </div>
        </div>
      </div>
    </div>
    <br>
          <div class="Container">
            <div class="Grid">
            <app-noticias :noticias="noticias"></app-noticias>
              <div class="Grid-item u-md-size1of3">
                <div class="Box Box--calendar">
                  <div class="Box-header">
                    Calendario de Eventos
                  </div>
                  <div class="Box-body">
                    <ul class="Box-mediaList">
                      <li class="Media">
                        <div class="Media-image">
                          <div class="Date">
                            <span class="Date-month">Feb</span>
                            <span class="Date-day">28</span>
                          </div>
                        </div>
                        <div class="Media-body">
                          <h4 class="Box-title"><a href="#">Lorem ipsum blandit incorrupte</a></h4>
                          <span class="Box-info">Aperiam laudantium possimus</span>
                        </div>
                      </li>
                      <li class="Media">
                        <div class="Media-image">
                          <div class="Date">
                            <span class="Date-month">Mar</span>
                            <span class="Date-day">25</span>
                          </div>
                        </div>
                        <div class="Media-body">
                          <h4 class="Box-title"><a href="#">Lorem ipsum blandit incorrupte</a></h4>
                          <span class="Box-info">Aperiam laudantium possimus</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="Box-footer">
                    <a href="#" class="Box-footerLink">Ver todos los eventos</a>
                  </div>
                </div>
              </div>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import Logo from '~/components/Logo.vue'
import AppMenu from '~/components/Menu.vue'
import AppNoticias from '~/components/Noticias.vue'

export default {
  components: {
    Logo,
    AppMenu,
    AppNoticias
  },
  asyncData ({ req, params }) {
    return axios.all([
      axios.get('http://dev-rexolution.pantheonsite.io/entity/menu/main/tree?_format=json'),
      axios.get('http://dev-rexolution.pantheonsite.io/api/noticias')
    ]).then(axios.spread((dataMenuRes, dataNoticiasRes) => {
      return {
        menus: dataMenuRes.data,
        noticias: dataNoticiasRes.data
      }
    }))
    // axios.get('http://dev-rexolution.pantheonsite.io/entity/menu/main/tree?_format=json')
    // return axios.get('http://dev-rexolution.pantheonsite.io/api/noticias')
    //  .then((res) => {
    //    console.log('Noticias:', res)
    //    // return { menus: res.data }
    //    return { noticias: res.data }
    //  })
  }
}
</script>

<style>
.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}
</style>

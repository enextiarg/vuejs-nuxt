<template>
  <div id="app-menu">
    <nav class="Nav" id="menu">
      <div class="Container">
        <ul class="Nav-list">
           <li class="Nav-item" v-for="menu of menus">
              <a href="#" aria-haspopup="true" aria-expanded="false" id="item-1">{{menu.link.title}}</a>
              <template v-if="menu.subtree">
               <div class="Nav-subnav" aria-hidden="true" aria-labelledby="item-1">
                <ul>
                  <li v-for="m of menu.subtree"><a href="#" @click="alertar(this)">{{m.link.title}}</a></li>
                </ul>
               </div>
              </template>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'app-menu',
  props: {
    menus: {
      type: Array,
      required: false
    }
  },
  methods: {
    alertar (e) {
      alert('Alerta desde componente menu')
    }
  }
}
</script>

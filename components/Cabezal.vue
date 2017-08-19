<template>
  <div>
    <h1>cabezal</h1>
    <nav class="Nav" id="menu" >
      <div class="Container">
        <ul class="Nav-list">
          {{menus}}
          <template >
          <li class="Nav-item" v-for="menu of menus">
            <a href="#" aria-haspopup="true" aria-expanded="false" id="item-1">{{menu.link.title}}</a>
            <template v-if="menu.subtree">
              <div class="Nav-subnav" aria-hidden="true" aria-labelledby="item-1">
                <ul>
                  <li v-for="m of menu.subtree"><a href="#">{{m.link.title}}</a></li>
                </ul>
              </div>
            </template>
          </li>
          </template>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  async data () {
    // We can now use ES7 async/await
    let { data } = await axios.get(`http://dev-rexolution.pantheonsite.io/entity/menu/main/tree?_format=json`)
    return { menus: data }
  }
}
</script>
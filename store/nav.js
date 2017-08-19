export const actions = {
  async fetchNavItems (state) {
    let res = await Axios.get('https://cosmicjs.com/v1/marcocardoso/object-type/pages')
    state.commit('setNavItems', res.data.objects)
  }
};
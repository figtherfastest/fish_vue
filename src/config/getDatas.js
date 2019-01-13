import {mapGetters} from 'vuex'

export const getTokens = {
  computed: {
    ...mapGetters([
      'token'
    ]),
    tokens () {
      return '111'
    }
  }
}

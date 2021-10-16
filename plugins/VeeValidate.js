import Vue from 'vue'
import { required, email, max, min, min_value, max_value, confirmed } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider } from 'vee-validate'

extend('required', {
  ...required,
  message: 'Kolom tidak boleh kosong'
})

extend('max', {
  ...max,
  message: 'Kolom maksimal {length} karakter'
})

extend('min', {
  ...min,
  message: 'Kolom minimal {length} karakter'
})

extend('min_0', {
  ...min_value,
  message: 'Kolom minimal 0'
})

extend('max_100', {
  ...max_value,
  message: 'Kolom maksimal 100'
})

extend('min_price', {
  ...min_value,
  message: 'Kolom minimal Rp 10.000'
})

extend('max_price', {
  ...max_value,
  message: 'Kolom maksimal Rp 1.000.000'
})

extend('email', {
  ...email,
  message: 'Kolom email belum benar'
})

extend('confirmed', {
  ...confirmed,
  message: 'Kolom konfirmasi password belum benar'
})

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

export default {
  components: {
    ValidationObserver,
    ValidationProvider
  }
}
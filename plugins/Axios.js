import qs from "qs"

const Cookie = process.client ? require('js-cookie') : undefined

export default function ({ $axios, store, redirect }) {
  $axios.defaults.paramsSerializer = function(params) {
    return qs.stringify(params)
  }

//   $axios.onRequest(config => {
//     config.headers.common['Authorization'] = process.env.API_SECRET
//     config.headers.common['token'] = `${store.state.member.auth.token}`
//   })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }

    if (code === 401) {
      Cookie.remove('token')
      Cookie.remove('user')

      redirect('https://portofolionuha.com/')
    }

    if (code === 500) {
      redirect('/500')
    }
  })
}


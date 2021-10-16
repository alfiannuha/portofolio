import Vue from 'vue'
import moment from 'moment'
import 'moment/locale/id'

Vue.filter('daymonth', function (value) {
  if (!value) return 'date'
  moment.locale('id')
  return moment(value).format('DD MMM')
})

Vue.filter('date', function (value) {
  if (!value) return 'date'
  moment.locale('id')
  return moment(value).format('ddd, DD MMM YYYY')
})

Vue.filter('time', function (value) {
  if (!value) return ''
  moment.locale('id')
  return moment(value).format('HH:mm')
})

Vue.filter('ampm', function (value) {
  if (!value) return ''
  moment.locale('en');
  return moment(value).format('HH A')
})

Vue.filter('datetime', function (value) {
  if (!value) return ''
  moment.locale('id')
  return moment(value).format('ddd, DD MMM YYYY HH:mm')
})

Vue.filter('day', function (value) {
  if (!value) return ''
  moment.locale('id')
  return moment(value).format('DD')
})

Vue.filter('month', function (value) {
  if (!value) return ''
  moment.locale('id')
  return moment(value).format('MMM')
})

Vue.filter('year', function (value) {
  if (!value) return ''
  moment.locale('id')
  return moment(value).format('YYYY')
})

moment.locale('id', {
  relativeTime: {
    future: 'in %s',
    past: '%s yang lalu',
    s:  'Beberapa detik',
    ss: '%s detik',
    m:  'Beberapa menit',
    mm: '%d menit',
    h:  'Beberapa jam',
    hh: '%d jam',
    d:  'Beberapa hari',
    dd: '%d hari',
    M:  'Beberapa bulan',
    MM: '%d bulan',
    y:  'Beberapa tahun',
    yy: '%d tahun'
  }
})

Vue.filter('ago', function (value) {
  if (!value) return ''
  moment.locale('id')
  return moment(value).fromNow()
})

Vue.filter('millis', function (value) {
  let sec = Math.floor(value / 1000)
  let hrs = Math.floor(sec / 3600)
  sec -= hrs * 3600
  let min = Math.floor(sec / 60)
  sec -= min * 60

  sec = '' + sec
  sec = ('00' + sec).substring(sec.length)
  if (hrs > 0) {
    min = '' + min
    min = ('00' + min).substring(min.length)
    if (min > 0 && sec > 0) {
      return hrs + ' jam ' + min + ' menit ' + sec + ' detik '
    } else if (min > 0 && sec < 1) {
      return hrs + ' jam ' + min + ' menit '
    } else if (min < 1 && sec < 1) {
      return hrs + ' jam '
    }
  } else if (min > 0) {
    if (sec > 0) {
      return min + ' menit ' + sec + ' detik '
    } else {
      return min + ' menit '
    }
  } else {
    return sec + ' detik '
  }
})
Vue.filter('price', (num) => {
  if (isNaN(num)) return 'Not a Number'
  let price = ''
  const reverseNumber = num
    .toString()
    .split('')
    .reverse()
    .join('')
  const arrReverseNumber = [...Array(reverseNumber.length).keys()]
  arrReverseNumber.map(index => {
    if (index % 3 === 0) price += reverseNumber.substr(index, 3) + '.'
  })

  return `Rp ${
    price.split('', price.length - 1)
    .reverse()
    .join('')
  }`
})

Vue.filter('price_not_rp', (num) => {
  if (isNaN(num)) return 'Not a Number'
  let price = ''
  const reverseNumber = num
    .toString()
    .split('')
    .reverse()
    .join('')
  const arrReverseNumber = [...Array(reverseNumber.length).keys()]
  arrReverseNumber.map(index => {
    if (index % 3 === 0) price += reverseNumber.substr(index, 3) + '.'
  })

  return `${
    price.split('', price.length - 1)
    .reverse()
    .join('')
  }`
})

Vue.filter('pricing', (num) => {
  if (isNaN(num)) return 'Not a Number'
  let price = ''
  const reverseNumber = num
    .toString()
    .split('')
    .reverse()
    .join('')
  const arrReverseNumber = [...Array(reverseNumber.length).keys()]
  arrReverseNumber.map(index => {
    if (index % 3 === 0) price += reverseNumber.substr(index, 3) + '.'
  })

  return `${
    price.split('', price.length - 1)
    .reverse()
    .join('')
  }`
})

Vue.filter('phone', function (value) {
  if (!value) return ''
  return value.substring(0, 4) + ' - XXXX - XXXX'
})

Vue.filter('email', function (value) {
  if (!value) return ''
  return value.substring(0, 5) + '@XXXXX'
})

Vue.filter('address', function (value) {
  if (!value) return ''
  return value.substring(0, 10) + ' . . .'
})

Vue.filter('content', function (value) {
  if (!value) return ''
  return value.substring(0, 250) + ' . . .'
})

Vue.filter('title', function (value) {
  if (!value) return ''
  if (value.length > 70) {
    return value.substring(0, 70) + ' . . .'
  } else {
    return value
  }
})

Vue.filter('desc', function (value) {
  if (!value) return ''
  if (value.length > 150) {
    return value.substring(0, 150) + ' . . .'
  } else {
    return value
  }
})

Vue.filter("initial", function (value) {
  if (!value) return ""
  let splitName = value.split(" ")
  let initial = value.charAt(0)
  if(splitName[1] !== undefined) {
    initial += splitName[1].charAt(0)
  }

  return initial.toUpperCase()
})

export default {
  moment
}
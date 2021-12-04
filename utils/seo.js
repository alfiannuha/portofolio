export const createSEOMeta = (data) => [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    // PRIMARY
    { hid: 'author', name: 'author', content: data.title },
    { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: data.title },
    { hid: 'description', name: 'description', content: data.description },
    // GOOGLE
    { hid: 'name', itemprop: 'name', content: data.title },
    { hid: 'description', itemprop: 'description', content: data.description },
    { hid: 'image', itemprop: 'image', content: data.image },
    // FACEBOOK
    { hid: 'og:site_name', property: 'og:site_name', content: data.title },
    { hid: 'og:title', property: 'og:title', content: data.title },
    { hid: 'og:type', property: 'og:type', content: data.cardType || 'website' },
    {
      hid: 'og:description',
      property: 'og:description',
      content: data.description
    },
    { hid: 'og:image', property: 'og:image', content: data.image },
    {
      hid: 'og:url',
      property: 'og:url',
      // content: process.env.NODE_ENV === 'development' ? `https://portofolionuha.com/${data.url}` : `https://portofolionuha.com/${data.url}`
      content: `https://portofolionuha.com/${data.url}`
    },
    // TWITTER
    { hid: 'twitter:title', property: 'twitter:title', content: data.title },
    {
      hid: 'twitter:description',
      property: 'twitter:description',
      content: data.description
    },
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: data.cardType || 'summary_large_image'
    },
    { hid: 'twitter:image', property: 'twitter:image', content: data.image },
    {
      hid: 'twitter:url',
      property: 'twitter:url',
      // content: process.env.NODE_ENV === 'development' ? `https://portofolionuha.com/${data.url}` : `https://portofolionuha.com/${data.url}`
      content: `https://twitter.com/Aanuha1`
    },
    {
      name: 'facebook-domain-verification', content: '8v8gwbkf1ebteboonludcr2ys8puu0'
    },
  ]
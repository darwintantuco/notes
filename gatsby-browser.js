require('prismjs/themes/prism-solarizedlight.css')

export const onClientEntry = () => {
  window.onload = () => {
    window.docsearch({
      apiKey: '6bba7de852f1c94bbca06d233879424d',
      indexName: 'darwintantuco',
      inputSelector: '#searchInput',
      debug: false, // Set debug to true if you want to inspect the dropdown
    })
  }
}

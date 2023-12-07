export default ({ app, store, redirect, $config }, inject) => {
  
  inject('ti', () => {
    return ['zh', 'cn', 'en'].findIndex(l => l === app.i18n.locale);
  });  

}
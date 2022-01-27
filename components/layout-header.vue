<template>
  <component
    :is="mainTag"
    :class="mainClass"
    class=""
  >
    <div class="container mx-auto">
      <div class="w-full float-left">
        <div class="container">
          <div class="text-xs desktop:text-base tablet-narrow:flex flex-wrap items-center pt-4 w-full float-none tablet-narrow:w-auto tablet-narrow:float-left justify-center tablet-narrow:justify-start">
            <svg class="float-left tablet-narrow:ml-0 mr-2 mb-4" width="23px" height="21px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 205.134 205.134"><path d="M63.189 185.534c-1.389 0-2.776-.276-4.095-.829a10.533 10.533 0 01-5.719-5.767l-18.952-46.327h-9.799c-6.268 0-11.367-4.771-11.367-10.635v-1.637C5.163 115.946 0 107.363 0 98.126s5.163-17.819 13.257-22.214v-.814c0-5.864 5.099-10.635 11.367-10.635h49.413c30.185 0 59.819-9.528 83.446-26.828l16.26-11.906.027-.021 6.583-4.819c2.041-1.495 4.725-1.705 7.006-.55 2.126 1.078 3.395 3.088 3.395 5.376v38.877c8.896 6.627 14.381 19.353 14.381 33.534s-5.484 26.907-14.381 33.534v38.877c0 2.288-1.269 4.298-3.395 5.376-2.281 1.155-4.964.945-7.006-.55l-21.747-15.924c-22.336-16.355-50.042-25.764-78.505-26.743l3.371 7.702a1.998 1.998 0 01-1.093 2.661l-6.779 2.695 8.253 20.829c2.127 5.369-.488 11.521-5.831 13.716l-10.804 4.436a10.61 10.61 0 01-4.029.799zm-24.444-52.922l18.333 44.813a6.561 6.561 0 003.562 3.591 6.568 6.568 0 005.059.018l10.804-4.436c3.328-1.365 4.957-5.197 3.632-8.542l-8.979-22.663-.008-.02-.01-.025-5.046-12.736H38.745zm138.192 35.293l5.779 4.232c.979.718 2.107.578 2.833.209.362-.184 1.205-.728 1.205-1.809V25.715c0-1.081-.842-1.625-1.205-1.809-.727-.369-1.854-.508-2.833.209l-5.779 4.232v139.558zM98.292 130.43c22.78 3.597 44.461 12.444 62.677 25.783l11.967 8.763V31.277l-13.091 9.585c-17.916 13.119-39.185 21.895-61.553 25.602v63.966zm-27.9 2.182l3.734 9.424 4.851-1.929-3.28-7.494-.538-.001h-4.767zM24.624 68.463c-4.062 0-7.367 2.977-7.367 6.635v46.879c0 3.658 3.305 6.635 7.367 6.635H75.16c6.418 0 12.812.419 19.133 1.242V67.071a148.328 148.328 0 01-20.256 1.393H24.624zm166.13 1.394v56.539c6.4-6.28 10.38-16.89 10.38-28.27s-3.979-21.989-10.38-28.269zM13.257 80.598C7.547 84.532 4 91.106 4 98.126s3.547 13.595 9.257 17.528V80.598zm10.357 30.286a2 2 0 01-2-2V78.103a5.558 5.558 0 015.552-5.552h50.906a2 2 0 010 4H27.166c-.855 0-1.552.696-1.552 1.552v30.781a2 2 0 01-2 2z" fill="#000" /></svg>
            <div class="text-xs desktop:text-sm mr-auto tablet-narrow:mr-0 mb-4 text-gray-dark">
              <a href="/en/cms/mancraft-brand-ambassador-program"> Ambassador program </a>
            </div>
          </div>
          <div class="ps_currencyselector cursor-pointer float-right text-center relative m-4 tablet-narrow:my-1 mx-2 tablet-narrow:mx-0 flex-auto">
            <div class="currency-selector dropdown ttdropdown js-dropdown">
              <span id="currency-selector-label" class="hidden">Currency:</span>
              <button
                data-target="#"
                data-toggle="dropdown"
                class="hidden-sm-down"
                aria-haspopup="true"
                aria-expanded="false"
                aria-label="Currency dropdown"
              >
                <span class="expand-more _gray-darker">EUR</span>
                <em class="material-icons expand-more">
                  <svg xmlns="http://www.w3.org/2000/svg" height="13px" viewBox="0 0 24 24" width="24px" fill="#888"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" /></svg>
                </em>
                <em class="material-icons expand-less">
                  <svg xmlns="http://www.w3.org/2000/svg" height="13px" viewBox="0 0 24 24" width="24px" fill="#888"><path d="M0 0h24v24H0z" fill="none" /><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" /></svg>
                </em>
              </button>
              <ul class="dropdown-menu hidden-sm-down" aria-labelledby="currency-selector-label">
                <li class="current">
                  <a title="Euro" rel="nofollow" href="https://shop-mancraft.com/en/?SubmitCurrency=1&amp;id_currency=2" class="dropdown-item">EUR</a>
                </li>
                <li>
                  <a title="Funt szterling" rel="nofollow" href="https://shop-mancraft.com/en/?SubmitCurrency=1&amp;id_currency=4" class="dropdown-item">GBP</a>
                </li>
                <li>
                  <a title="Złoty polski" rel="nofollow" href="https://shop-mancraft.com/en/?SubmitCurrency=1&amp;id_currency=1" class="dropdown-item">PLN</a>
                </li>
                <li>
                  <a title="Dolar amerykański" rel="nofollow" href="https://shop-mancraft.com/en/?SubmitCurrency=1&amp;id_currency=3" class="dropdown-item">USD</a>
                </li>
              </ul>
              <select class="link hidden-md-up appearance-none w-full tablet-narrow:w-auto hide" aria-labelledby="currency-selector-label">
                <option value="https://shop-mancraft.com/en/?SubmitCurrency=1&amp;id_currency=2" selected="selected">
                  EUR
                </option>
                <option value="https://shop-mancraft.com/en/?SubmitCurrency=1&amp;id_currency=4">
                  GBP
                </option>
                <option value="https://shop-mancraft.com/en/?SubmitCurrency=1&amp;id_currency=1">
                  PLN
                </option>
                <option value="https://shop-mancraft.com/en/?SubmitCurrency=1&amp;id_currency=3">
                  USD
                </option>
              </select>
            </div>
          </div>
          <div class="hidden tablet-narrow:block float-right border-l border-gray-light m-auto h-6 my-4" />
          <div class="ps_languageselector cursor-pointer float-right text-center relative m-4 tablet-narrow:my-1 mx-2 tablet-narrow:mx-0 flex-auto">
            <div class="language-selector-wrapper">
              <span id="language-selector-label" class="hidden">Language:</span>
              <div class="language-selector dropdown js-dropdown">
                <button data-toggle="dropdown" class="hidden-sm-down" aria-haspopup="true" aria-expanded="false" aria-label="Language dropdown">
                  <span class="expand-more">English</span>
                  <i class="material-icons expand-more">
                    <svg xmlns="http://www.w3.org/2000/svg" height="13px" viewBox="0 0 24 24" width="24px" fill="#888"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" /></svg>
                  </i>
                  <i class="material-icons expand-less">
                    <svg xmlns="http://www.w3.org/2000/svg" height="13px" viewBox="0 0 24 24" width="24px" fill="#888"><path d="M0 0h24v24H0z" fill="none" /><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" /></svg>
                  </i>
                </button>
                <ul class="dropdown-menu hidden-sm-down" aria-labelledby="language-selector-label">
                  <li>
                    <a href="https://shop-mancraft.com/pl/" class="dropdown-item" data-iso-code="pl">Polski</a>
                  </li>
                  <li class="current">
                    <a href="https://shop-mancraft.com/en/" class="dropdown-item" data-iso-code="en">English</a>
                  </li>
                </ul>
                <select class="link hidden-md-up appearance-none w-full tablet-narrow:w-auto" aria-labelledby="language-selector-label">
                  <option value="https://shop-mancraft.com/pl/" data-iso-code="pl">
                    Polski
                  </option>
                  <option value="https://shop-mancraft.com/en/" selected="selected" data-iso-code="en">
                    English
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </component>
</template>

<script>
export default {
  name: 'LayoutHeader',
  props: {
    mainTag: {
      type: String,
      default: 'header',
      required: false
    },
    mainClass: {
      type: String,
      default: '',
      required: false
    }
  },
  computed: {
  }
}
</script>

<style scoped>

</style>

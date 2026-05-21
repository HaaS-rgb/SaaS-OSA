(function () {
  var opts = (typeof window !== 'undefined' && window.SMCCChromeOptions) || {};

  var HEADER_HTML = `<div class="print-bar" id="smcc-header">
  <div class="site-inner">
    <a class="print-bar-logo" href="https://www.savemoneycutcarbon.com/" target="smcc-site" aria-label="SaveMoneyCutCarbon">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 236 74">
        <defs>
          <style>.sl1{fill:#b9dbd9}.sl2{fill:#ec9928}.sl3{fill:#77bc43}.sl4{clip-path:url(#slclip)}.sl5{fill:#043437}</style>
          <clipPath id="slclip"><rect fill="none" x="1.2" y="6" width="233.8" height="61.5"/></clipPath>
        </defs>
        <g class="sl4"><path class="sl5" d="M29.2,6c.2,0,1.2,0,1.3,0v29.3l-29.2.2c-.2-11.3,7.5-22.3,17.6-26.8,2.7-1.2,7.4-2.6,10.3-2.6h0Z"/></g>
        <path class="sl3" d="M33.2,38.2h29.3c-.2,15.7-13.7,29.2-29.4,29.3v-29.3h0Z"/>
        <path class="sl1" d="M33.2,6.2c15.6.2,29,13.6,29.3,29.2h-9c-.4-10.7-9.3-19.9-20.2-20V6.2h-.1Z"/>
        <path class="sl2" d="M1.2,38.1h9.1c.4,10.9,9.3,19.7,20.2,20.2v8.9c-15.6,0-29.1-13.6-29.3-29.1h0Z"/>
        <path class="sl3" d="M70.4,26c1.1.8,2.1,1.4,3,1.8.9.4,1.9.5,2.9.5s2.2-.3,2.9-.8c.7-.6,1.1-1.3,1.1-2.4,0-.8-.2-1.5-.7-2-.4-.5-1-.9-1.7-1.2-.7-.3-1.5-.6-2.3-.9-.8-.2-1.5-.5-2.3-.8-.8-.3-1.5-.7-2.1-1.2-.6-.5-1.1-1.1-1.5-1.9-.4-.8-.6-1.8-.6-2.9s.4-2.7,1.1-3.7c.7-1,1.8-1.8,3-2.4,1.3-.6,2.7-.8,4.3-.8s2.4.2,3.6.5c1.2.3,2,.7,2.6,1.1.7.4,1,.9,1,1.6s-.1.7-.4,1.2c-.3.5-.6,1-1,1.4-.7-.6-1.6-1.1-2.5-1.4-1-.4-1.9-.6-2.8-.6s-2.1.2-2.8.7c-.7.5-1,1.1-1,2s.1.9.3,1.3c.2.4.6.7,1.1,1.1.5.3,1.5.8,2.9,1.3.8.3,1.5.6,2.3.9.8.3,1.5.8,2.1,1.3.6.5,1.2,1.2,1.6,1.9.4.8.6,1.7.6,2.9,0,2.4-.8,4.3-2.4,5.7-1.6,1.4-3.8,2.1-6.5,2.1s-2.5-.1-3.6-.4c-1.1-.3-2.1-.6-2.8-1.1-.7-.5-1-1-1-1.6s.5-1.7,1.5-3.1h0Z"/>
        <path class="sl3" d="M97,23.3h-.5c-.2,0-.3,0-.5,0-1.7.1-2.9.4-3.7.9-.8.5-1.1,1.2-1.1,2.2s.2,1.3.6,1.8c.4.4,1,.6,1.9.6s1.6-.2,2.3-.6c.7-.4,1.1-.8,1.1-1.3v-3.6h0ZM101.5,27.4c0,1.9.3,3.2.8,4.1-.8.3-1.6.5-2.4.5s-1.4-.2-1.9-.5c-.5-.3-.7-.8-.9-1.5-.6.6-1.3,1.1-2.2,1.5-.9.3-1.9.5-3,.5-1.6,0-2.9-.5-3.9-1.4-1-.9-1.5-2.2-1.5-3.9,0-3.7,2.9-5.7,8.7-6,.4,0,.9,0,1.6,0v-.6c0-.9-.2-1.5-.7-1.9-.5-.4-1.3-.6-2.4-.6s-1.5.1-2.2.3c-.7.2-1.7.7-2.8,1.3-.3-.4-.6-.8-.8-1.3-.2-.5-.3-.9-.3-1.1,0-.5.3-.9,1.1-1.3.7-.4,1.6-.7,2.6-1,1-.2,2.1-.4,3.2-.4,2.5,0,4.3.5,5.3,1.5,1.1,1,1.6,2.7,1.6,5v6.7h0Z"/>
        <path class="sl3" d="M113.3,31.7h-5.2l-5.9-16.7c.8-.3,1.6-.5,2.6-.5s1.1,0,1.5.3c.4.2.8.5,1,.9.3.4.6,1.1.8,2.1l2.6,9.2,2.7-9.3c.2-.9.5-1.5.7-1.9.3-.4.6-.8,1-1,.4-.2.9-.3,1.5-.3.9,0,1.7.2,2.4.5l-5.8,16.7h0Z"/>
        <path class="sl3" d="M130.3,21.3c0-2.6-1-3.8-3-3.8s-1.8.3-2.4,1c-.6.7-.9,1.6-.9,2.8h6.2ZM128.7,28.5c.8,0,1.5-.1,2-.3.6-.2,1-.5,1.4-.8.4-.3.7-.6,1-.8.4.5.7.9.9,1.5.3.5.4,1,.4,1.3,0,.5-.3,1-.9,1.4-.6.4-1.3.8-2.3,1-1,.2-2,.4-3.1.4-2.9,0-5.1-.8-6.7-2.4-1.6-1.6-2.3-3.9-2.3-6.9s.4-3.3,1.1-4.6c.7-1.3,1.7-2.3,2.9-3,1.2-.7,2.6-1,4.2-1,2.3,0,4.1.7,5.4,2,1.3,1.3,1.9,3.2,1.9,5.5s0,1.9-.1,2.2h-10.5c0,1.5.5,2.6,1.3,3.4.8.8,1.9,1.2,3.3,1.2h0Z"/>
        <path class="sl3" d="M141,7.5c.7,0,1.2.2,1.7.5.5.3.8.8,1.2,1.5l5.4,12.8,5.5-12.6c.6-1.4,1.6-2.1,3-2.1s1.9.1,2.5.3l1.7,23.7h-4.6l-1.1-15.8-4.8,10.8h-4.1l-4.7-10.4-1,15.4h-4.7l1.7-23.7c.7-.2,1.5-.3,2.5-.3h0Z"/>
        <path class="sl3" d="M176,23.1c0-3.4-1.2-5.2-3.5-5.2s-2.1.5-2.7,1.4c-.6.9-.9,2.2-.9,3.8s.3,3,.9,4c.6.9,1.5,1.4,2.6,1.4,2.4,0,3.5-1.8,3.5-5.4h0ZM180.9,23c0,1.9-.3,3.5-1,4.9-.7,1.4-1.6,2.4-2.9,3.1-1.2.7-2.7,1.1-4.5,1.1-2.7,0-4.7-.8-6.2-2.4-1.5-1.6-2.2-3.8-2.2-6.6s.4-3.4,1.1-4.8c.7-1.4,1.7-2.4,3-3.1,1.3-.7,2.7-1.1,4.4-1.1,2.7,0,4.7.8,6.1,2.3,1.4,1.6,2.1,3.7,2.1,6.5h0Z"/>
        <path class="sl3" d="M188.6,31.5h-4.9V14.7h.4c.4-.1.8-.1,1.2-.1,1.8,0,2.8.6,3,1.9,1.1-1.5,2.8-2.2,5.2-2.2s2.7.3,3.6.9c.9.6,1.4,1.5,1.7,2.7.2.8.3,2.1.3,3.7v10h-4.8v-9.8c0-1.1,0-1.9-.2-2.4-.2-.5-.4-.8-.8-1-.4-.2-.9-.3-1.5-.3s-1.7.2-2.3.6c-.6.4-.9.8-.9,1.4v11.5h0Z"/>
        <path class="sl3" d="M213,21.3c0-2.6-1-3.8-3-3.8s-1.8.3-2.4,1c-.6.7-.9,1.6-.9,2.8h6.2ZM211.4,28.5c.8,0,1.5-.1,2-.3.6-.2,1-.5,1.4-.8.4-.3.7-.6,1-.8.4.5.7.9.9,1.5.3.5.4,1,.4,1.3,0,.5-.3,1-.9,1.4-.6.4-1.3.8-2.3,1-1,.2-2,.4-3.1.4-2.9,0-5.1-.8-6.7-2.4-1.6-1.6-2.3-3.9-2.3-6.9s.3-3.3,1.1-4.6,1.7-2.3,2.9-3c1.2-.7,2.6-1,4.2-1,2.3,0,4.1.7,5.4,2,1.3,1.3,1.9,3.2,1.9,5.5s0,1.9-.1,2.2h-10.5c0,1.5.5,2.6,1.3,3.4.8.8,1.9,1.2,3.3,1.2h0Z"/>
        <path class="sl3" d="M229.1,34.4c-1,3.4-3.3,5.2-6.9,5.2s-2.1-.2-2.7-.5c-.6-.3-.9-.8-.9-1.5s.3-1.4,1-2.5c.3.2.6.4,1.1.5.4.1.9.2,1.3.2.8,0,1.4-.2,1.8-.6.5-.4.9-1.1,1.2-2.1l.6-1.8h-2.2l-5.5-16.5c.7-.3,1.6-.4,2.7-.4s1.3.2,1.8.6c.5.4.8.9,1,1.6l3.2,11,2.6-9.6c.4-1.3.8-2.3,1.4-2.8.5-.5,1.2-.8,2.1-.8s1.5.2,2.3.5l-5.9,19.4h0Z"/>
        <path class="sl3" d="M87.5,64.2c-.4.4-.9.7-1.6,1-.7.3-1.5.5-2.3.7-.8.2-1.8.2-2.7.2-3.6,0-6.3-1.1-8.2-3.2-1.9-2.2-2.9-5.2-2.9-9.2s.5-4.8,1.4-6.7c.9-1.9,2.2-3.3,3.8-4.3,1.7-1,3.6-1.5,5.9-1.5s2.7.2,3.8.6c1.2.4,2.1.9,2.8,1.6.5.5.8,1,.8,1.5s-.6,1.7-1.7,2.7c-.9-.9-1.8-1.5-2.6-1.9-.9-.4-1.8-.6-2.9-.6-2.1,0-3.7.7-4.8,2.2-1.1,1.5-1.7,3.5-1.7,6.2s.6,4.8,1.7,6.3c1.1,1.5,2.8,2.2,4.9,2.2.9,0,1.7-.2,2.4-.4.7-.3,1.3-.6,1.7-.9.5-.4.9-.7,1.1-.9,1.1,1.3,1.6,2.3,1.6,2.8s0,.5-.2.7c-.1.2-.3.5-.6.7h0Z"/>
        <path class="sl3" d="M105.6,65.5h-3.2c-.5,0-.8-.1-1.1-.4-.2-.2-.3-.8-.3-1.5-1.1,1.5-2.8,2.2-5.2,2.2s-2.7-.3-3.6-.9c-.9-.6-1.4-1.5-1.7-2.7-.2-.8-.3-2.1-.3-3.7v-9.9c0,0,.3,0,.6,0,.4,0,.7,0,1,0,2.1,0,3.2.9,3.2,2.8v7c0,1.1,0,1.9.2,2.4.2.5.4.8.8,1,.4.2.9.3,1.5.3s1.7-.2,2.3-.6c.6-.4.9-.8.9-1.4v-11.4c0,0,.3,0,.6,0,.4,0,.7,0,1,0,1,0,1.8.3,2.4.8.5.5.8,1.3.8,2.2v14h0Z"/>
        <path class="sl3" d="M109.3,63c-.3-.8-.4-1.8-.4-3.1v-16.5h.5c.4-.1.8-.1,1.1-.1,2.1,0,3.2,1,3.2,2.9v2.5h5v3.6h-5v7.6c0,1.7.7,2.5,2,2.5s1-.1,1.5-.4c.5-.2.9-.5,1.3-.9.4.6.7,1.1.9,1.5.2.4.2.7.2,1,0,.5-.2.9-.7,1.3-.5.4-1.1.7-1.9.9-.8.2-1.6.3-2.5.3-2.7,0-4.4-1-5.2-3.1h0Z"/>
        <path class="sl3" d="M138.6,64.2c-.4.4-.9.7-1.6,1-.7.3-1.5.5-2.3.7-.8.2-1.8.2-2.7.2-3.6,0-6.3-1.1-8.2-3.2-1.9-2.2-2.9-5.2-2.9-9.2s.5-4.8,1.4-6.7c.9-1.9,2.2-3.3,3.8-4.3,1.7-1,3.6-1.5,5.9-1.5s2.7.2,3.8.6c1.2.4,2.1.9,2.8,1.6.5.5.8,1,.8,1.5s-.6,1.7-1.7,2.7c-.9-.9-1.8-1.5-2.6-1.9-.9-.4-1.8-.6-2.9-.6-2.1,0-3.7.7-4.8,2.2-1.1,1.5-1.7,3.5-1.7,6.2s.6,4.8,1.7,6.3c1.1,1.5,2.8,2.2,4.9,2.2.9,0,1.7-.2,2.4-.4.7-.3,1.3-.6,1.7-.9.5-.4.9-.7,1.1-.9,1.1,1.3,1.6,2.3,1.6,2.8s0,.5-.2.7c-.1.2-.3.5-.6.7h0Z"/>
        <path class="sl3" d="M151.2,57.3h-.5c-.2,0-.3,0-.5,0-1.7.1-2.9.4-3.7.9-.8.5-1.1,1.2-1.1,2.2s.2,1.3.6,1.8c.4.4,1,.6,1.9.6s1.6-.2,2.3-.6c.7-.4,1.1-.8,1.1-1.3v-3.6h0ZM155.8,61.4c0,1.9.3,3.2.8,4.1-.8.3-1.6.5-2.4.5s-1.4-.2-1.9-.5c-.5-.3-.7-.8-.9-1.5-.6.6-1.3,1.1-2.2,1.5-.9.3-1.9.5-3,.5-1.6,0-2.9-.5-3.9-1.4-1-.9-1.5-2.2-1.5-3.9,0-3.7,2.9-5.7,8.7-6,.4,0,.9,0,1.6,0v-.6c0-.9-.2-1.5-.7-1.9-.5-.4-1.3-.6-2.4-.6s-1.5.1-2.2.3c-.7.2-1.7.7-2.8,1.3-.3-.4-.6-.8-.8-1.3-.2-.5-.3-.9-.3-1.1,0-.5.4-.9,1.1-1.3.7-.4,1.6-.7,2.6-1,1-.2,2.1-.4,3.2-.4,2.5,0,4.3.5,5.3,1.5,1.1,1,1.6,2.7,1.6,5v6.7h0Z"/>
        <path class="sl3" d="M163.9,50.4c.5-.6,1-1.2,1.7-1.6.7-.4,1.4-.6,2.2-.6s1.5.1,2,.4c.5.3.7.7.7,1.3s0,.6-.2,1.1-.2.8-.4,1.3c-.2.4-.4.8-.6,1.2-.5-.4-.9-.6-1.3-.8-.4-.2-.9-.2-1.4-.2-.7,0-1.3.2-1.8.6-.5.4-.8.9-.8,1.5v11h-4.8v-16.8h.4c.4-.1.8-.1,1.2-.1.8,0,1.5.2,2,.5.5.3.9.8,1,1.4h0Z"/>
        <path class="sl3" d="M182.8,56.7c0-3.4-1.2-5.1-3.6-5.1s-1.5.2-2,.5c-.5.3-.7.8-.7,1.4v7.7c.3.3.8.6,1.3.8.5.2,1,.3,1.6.3,1.1,0,2-.5,2.5-1.4.6-.9.8-2.3.8-4.2h0ZM176.6,49.7c1-1,2.5-1.6,4.2-1.6s4,.7,5.2,2.2c1.2,1.4,1.8,3.5,1.8,6.3s-.6,5.4-1.9,7c-1.2,1.6-3,2.4-5.3,2.4s-1.9-.2-2.8-.6c-.8-.4-1.4-.8-1.8-1.3,0,.9-.4,1.4-1.3,1.4h-3.1v-25.1s.3,0,.6,0c.4,0,.7,0,1,0,2.1,0,3.2,1,3.2,2.8v6.6h0Z"/>
        <path class="sl3" d="M201.8,57.1c0-3.4-1.2-5.2-3.5-5.2s-2.1.5-2.7,1.4c-.6.9-.9,2.2-.9,3.8s.3,3,.9,4c.6.9,1.5,1.4,2.6,1.4,2.4,0,3.5-1.8,3.5-5.4h0ZM206.7,57c0,1.9-.3,3.5-1,4.9-.7,1.4-1.6,2.4-2.9,3.1-1.2.7-2.7,1.1-4.5,1.1-2.7,0-4.7-.8-6.2-2.4-1.5-1.6-2.2-3.8-2.2-6.6s.4-3.4,1.1-4.8c.7-1.4,1.7-2.4,3-3.1,1.3-.7,2.7-1.1,4.4-1.1,2.7,0,4.7.8,6.1,2.3,1.4,1.6,2.1,3.7,2.1,6.5h0Z"/>
        <path class="sl3" d="M214.4,65.5h-4.9v-16.8h.4c.4-.1.8-.1,1.2-.1,1.8,0,2.8.6,3,1.9,1.1-1.5,2.8-2.2,5.2-2.2s2.7.3,3.6.9c.9.6,1.4,1.5,1.7,2.7.2.8.3,2.1.3,3.7v10h-4.8v-9.8c0-1.1,0-1.9-.2-2.4-.2-.5-.4-.8-.8-1-.4-.2-.9-.3-1.5-.3s-1.7.2-2.3.6c-.6.4-.9.8-.9,1.4v11.5h0Z"/>
        <path class="sl3" d="M230.9,43.9c-.2-.1-.6-.2-1.1-.2h-.8v1.9h.8c.4,0,.7,0,.9-.1.4-.1.5-.4.5-.8s-.1-.6-.4-.8h0ZM229.9,43.1c.7,0,1.1,0,1.4.2.5.2.8.7.8,1.3s-.2.8-.5,1c-.2.1-.4.2-.8.3.4,0,.7.2.9.5.2.3.3.6.3.8v.4c0,.1,0,.3,0,.4,0,.1,0,.2,0,.3h0c0,0-.9,0-.9,0,0,0,0,0,0,0,0,0,0,0,0,0v-.2s0-.4,0-.4c0-.6-.2-1-.5-1.2-.2-.1-.5-.2-1-.2h-.7v2.1h-.9v-5.3h1.9ZM227.1,42.8c-.8.8-1.2,1.8-1.2,2.9s.4,2.1,1.2,3c.8.8,1.8,1.2,2.9,1.2s2.1-.4,2.9-1.2c.8-.8,1.2-1.8,1.2-3s-.4-2.1-1.2-2.9c-.8-.8-1.8-1.2-2.9-1.2s-2.1.4-2.9,1.2h0ZM233.4,49.2c-.9.9-2.1,1.4-3.4,1.4s-2.5-.5-3.4-1.4c-.9-.9-1.4-2.1-1.4-3.4s.5-2.5,1.4-3.4c.9-.9,2.1-1.4,3.4-1.4s2.5.5,3.4,1.4c.9.9,1.4,2.1,1.4,3.4s-.5,2.5-1.4,3.4h0Z"/>
      </svg>
    </a>
    <nav class="print-bar-nav">
      <a href="https://www.savemoneycutcarbon.com/sustainability-services/" target="smcc-site">Support for Business</a>
      <a href="https://www.savemoneycutcarbon.com/home-shop/" target="smcc-site">Shop Online</a>
      <a href="https://www.savemoneycutcarbon.com/learn-and-save/" target="smcc-site">Learn &amp; Save</a>
      <a href="https://www.savemoneycutcarbon.com/help-advice/about-us/" target="smcc-site">About SMCC</a>
    </nav>
    <div class="print-bar-actions" id="smcc-header-actions"></div>
  </div>
</div>`;

  var NEWSLETTER_HTML = `<section class="newsletter-strip">
  <div class="newsletter-strip-inner">
    <div class="newsletter-icon">
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="16" width="40" height="28" rx="2" stroke="white" stroke-width="2" fill="none"/>
        <path d="M4 16 L24 30 L44 16" stroke="white" stroke-width="2" fill="none"/>
        <path d="M24 4 L26.2 10.2 L33 10.2 L27.4 14.1 L29.6 20.3 L24 16.4 L18.4 20.3 L20.6 14.1 L15 10.2 L21.8 10.2 Z" fill="white"/>
      </svg>
    </div>
    <div class="newsletter-text">
      <h3>Join our mailing list!</h3>
      <p>Sign up to receive tips on reducing your energy &amp; water bills, new product<br>news &amp; more.</p>
    </div>
    <a href="https://www.savemoneycutcarbon.com/sign-up-and-save/" target="smcc-site" class="newsletter-btn">
      <span class="nb-text">Yes please!</span>
      <span class="nb-arrow">&#8250;</span>
    </a>
  </div>
</section>`;

  var FOOTER_HTML = `<footer class="site-footer">

  <div class="footer-upper">
    <div class="footer-upper-inner">
      <div class="site-footer-grid">

        <div class="footer-col-wrap">
          <h4>Information</h4>
          <ul>
            <li><a href="https://www.savemoneycutcarbon.com/help-advice/contact/" target="smcc-site">Contact Us</a></li>
            <li><a href="https://www.savemoneycutcarbon.com/help-advice/about-us/" target="smcc-site">About Us</a></li>
            <li><a href="https://www.savemoneycutcarbon.com/learn-and-save/" target="smcc-site">Learn &amp; Save</a></li>
            <li><a href="https://www.savemoneycutcarbon.com/corporate-social-responsibility/" target="smcc-site">Corporate Social Responsibility</a></li>
            <li><a href="https://jobs.savemoneycutcarbon.com/" target="smcc-site">Join Our Team</a></li>
            <li><a href="https://www.savemoneycutcarbon.com/news/" target="smcc-site">Press</a></li>
            <li><a href="https://www.savemoneycutcarbon.com/modern-slavery-and-human-trafficking-statement/" target="smcc-site">Modern Slavery and Human<br>Trafficking Statement</a></li>
          </ul>
        </div>

        <div class="footer-col-wrap">
          <h4>Delivery &amp; Shopping</h4>
          <ul>
            <li><a href="https://www.savemoneycutcarbon.com/help-advice/delivery-information/" target="smcc-site">Delivery Information</a></li>
            <li><a href="https://www.savemoneycutcarbon.com/help-advice/returns-policy/" target="smcc-site">Returns Policy</a></li>
            <li><a href="https://www.savemoneycutcarbon.com/help-advice/remedial-works/" target="smcc-site">Remedial Works</a></li>
            <li><a href="https://www.savemoneycutcarbon.com/club/trade/" target="smcc-site">Trade &amp; Bulk Support</a></li>
            <li><a href="https://www.savemoneycutcarbon.com/help-advice/price-match-guarantee/" target="smcc-site">Price Match Guarantee</a></li>
            <li><a href="https://www.savemoneycutcarbon.com/help-advice/warranty-information/" target="smcc-site">Warranty Information</a></li>
            <li><a href="https://www.savemoneycutcarbon.com/privacy-and-cookie-policy/" target="smcc-site">Privacy and Cookie Policy</a></li>
            <li><a href="https://www.savemoneycutcarbon.com/terms-conditions/" target="smcc-site">Terms &amp; Conditions</a></li>
          </ul>
        </div>

        <div class="footer-col-wrap">
          <h4>Customer Support</h4>
          <p class="footer-support-desc">For general advice about a product or your order:</p>
          <a href="https://www.savemoneycutcarbon.com/help-advice/contact/" target="smcc-site" class="footer-contact-btn"><strong>Contact</strong> us</a>
          <a href="tel:03331235464" class="footer-phone">0333 123 5464</a>
          <p class="footer-social-heading">Follow us on</p>
          <div class="footer-social-icons">
            <a href="https://www.facebook.com/savemoneycutcarbon/" target="_blank" rel="noopener" aria-label="Facebook" class="si-fb">
              <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/1871904" target="_blank" rel="noopener" aria-label="LinkedIn" class="si-li">
              <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zm2-4a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/></svg>
            </a>
            <a href="https://x.com/SaveCutCarbon" target="_blank" rel="noopener" aria-label="X" class="si-x">
              <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://www.youtube.com/user/savemoneycutcarbon" target="_blank" rel="noopener" aria-label="YouTube" class="si-yt">
              <svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
            </a>
            <a href="https://www.instagram.com/savemoneycutcarbon/" target="_blank" rel="noopener" aria-label="Instagram" class="si-ig">
              <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>

  <div class="footer-lower">
    <div class="footer-lower-inner">
      <div class="site-footer-bottom">
        <p class="footer-addr">An <span class="irm">Intelligent Resource Management</span> Company. Registered Address: Clos Fferws Parc Hendre Capel Hendre, Ammanford, Carmarthenshire, Wales, SA18 3BL.</p>
        <p class="footer-copy">&copy; 2026 SaveMoneyCutCarbon.com. All Rights<br>Reserved.</p>
      </div>
    </div>
  </div>

</footer>`;

  var BACKTOTOP_HTML = `<button class="back-to-top" id="backToTop" aria-label="Back to top" onclick="window.scrollTo({top:0,behavior:'smooth'})">
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M4.5 13L10 7.5L15.5 13" stroke="#3a5c2a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</button>`;

  function inject(id, html) {
    var el = document.getElementById(id);
    if (el) el.outerHTML = html;
  }

  function init() {
    inject('smcc-header-mount', HEADER_HTML);
    // After header is injected, populate actions slot if options provided
    if (opts.headerActionsHTML) {
      var slot = document.getElementById('smcc-header-actions');
      if (slot) slot.innerHTML = opts.headerActionsHTML;
    }
    inject('smcc-newsletter-mount', NEWSLETTER_HTML);
    inject('smcc-footer-mount', FOOTER_HTML);
    // Back-to-top appended to body
    var bttEl = document.createElement('div');
    bttEl.innerHTML = BACKTOTOP_HTML;
    document.body.appendChild(bttEl.firstChild);
    // Scroll listener
    var btn = document.getElementById('backToTop');
    if (btn) {
      window.addEventListener('scroll', function () {
        btn.classList.toggle('visible', window.scrollY > 400);
      }, { passive: true });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

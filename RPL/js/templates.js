class myNav extends HTMLElement {
  connectedCallback() {
    document.head.innerHTML+='<meta name="robots" content="noindex">'
    this.innerHTML = `
      <nav class="main-nav transparent stick-fixed wow-menubar">
          <div class="full-wrapper relative clearfix">

              <!-- Logo ( * your text or image into link tag *) -->
              <div class="nav-logo-wrap local-scroll">
                  <a href="home.html" class="logo">
                      <img src="images/logo/rrpl_final_logo.png" alt="Company logo" width="288" height="50" />
                  </a>
              </div>

              <!-- Mobile Menu Button -->
              <div class="mobile-nav" role="button" tabindex="0">
                  <i class="fa fa-bars"></i>
                  <span class="sr-only">Menu</span>
              </div>

              <!-- Main Menu -->
              <div class="inner-nav desktop-nav">
                  <ul class="clearlist">

                      <!-- Item -->
                      <li>
                          <a href="home.html">Home </a>
                      </li>
                      <!-- End Item -->

                      <!-- Item -->
                      <li>
                          <a href="aboutus.html" >About Us </a>
                      </li>
                      <!-- End Item -->

                      <!-- Item With Sub -->
                      <li>

                          <a href="#" class="mn-has-sub">Team <i class="mn-has-sub-icon"></i></a>

                          <!-- Sub -->
                          <ul class="mn-sub">
                            <li>
                                <a href="members.html">Overview </a>
                            </li>
                            <li>
                                <a href="eboard.html">Members </a>
                            </li>
                            <li>
                                <a href="certification.html">Certification </a>
                            </li>
                          </ul>
                          <!-- End Sub -->

                      </li>
                      <!-- End Item With Sub -->

                      <!-- Item With Sub -->
                      <li>
                          <a href="#" class="mn-has-sub">Subteams <i class="mn-has-sub-icon"></i></a>

                          <!-- Sub -->
                          <ul class="mn-sub">
                            <li>
                                <a href="subteam.html?subteam=Aerobody">Aerobody </a>
                            </li>
                            <li>
                                <a href="subteam.html?subteam=Recovery">Recovery </a>
                            </li>
                            <li>
                                <a href="subteam.html?subteam=Propulsion">Propulsion </a>
                            </li>
                            <li>
                                <a href="subteam.html?subteam=Telemetry">Telemetry </a>
                            </li>
                            <li>
                                <a href="subteam.html?subteam=Payload">Payload </a>
                            </li>
                            <li>
                                <a href="subteam.html?subteam=Business">Business </a>

                            </li>
                          </ul>
                          <!-- End Sub -->

                      </li>
                      <!-- End Item With Sub -->

                      <!-- Item -->
                      <li>
                          <a href="sponsors.html">Sponsors </a>
                      </li>
                      <!-- End Item -->

                      <!-- Item -->
                      <li>
                          <a href="contactus.html">Contact Us </a>
                      </li>
                      <!-- End Item -->

                  </ul>
              </div>
              <!-- End Main Menu -->

          </div>
      </nav>
    `
  }
}

class myNewsletter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="small-section bg-dark bg-dark-alfa-70 bg-scroll bg-position-top light-content" data-background="images/full-width-images/section-bg-3.jpg">
          <div class="container relative">

              <form id="mailchimp" class="form wow fadeInUpShort">
                  <div class="row">
                      <div class="col-md-8 offset-md-2">

                          <div class="newsletter-label d-flex mb-50 mb-sm-20">
                              <div class="newsletter-label-icon">
                                  <img src="images/logo/newsletter_logo_textured.png" alt="Company logo" width="288" height="50" />
                              </div>
                              <h2 class="newsletter-label-text">
                                  Stay informed with&nbsp;our newsletter
                              </h2>
                          </div>

                          <div class="d-sm-flex justify-content-between mb-20">
                              <input placeholder="Your Email" class="newsletter-field input-lg round" type="email" pattern=".{5,100}" required aria-required="true">
                              <button type="submit" aria-controls="subscribe-result" class="newsletter-button btn btn-mod btn-w btn-large btn-round">
                                  Subscribe Now
                              </button>
                          </div>

                          <div class="form-tip">
                              Proin fringilla augue at maximus vestibulum <a href="#">Terms & Conditions</a>.
                          </div>

                          <div id="subscribe-result" role="region" aria-live="polite" aria-atomic="true"></div>

                      </div>
                  </div>
              </form>

          </div>
      </section>
    `
  }
}

class myFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="page-section bg-gray-lighter footer pb-50 pb-sm-20 pt-50">
          <div class="container">

              <!-- Social Links -->
              <div class="footer-social-links mb-50 mb-xs-30">
                  <a href="https://www.youtube.com/channel/UCVWIXaaOnuQXAcn5YPFKuHQ/about" title="YouTube" target="_blank"><i class="fab fa-youtube"></i> <span class="sr-only">YouTube profile</span></a>
                  <a href="https://www.instagram.com/rutgersrpl/?hl=en" title="Instagram" target="_blank"><i class="fab fa-instagram"></i> <span class="sr-only">Instagram profile</span></a>
                  <a href="https://www.facebook.com/RutgersRPL/" title="Facebook" target="_blank"><i class="fab fa-facebook-f"></i> <span class="sr-only">Facebook profile</span></a>
                  <a href="https://twitter.com/rutgersrpl" title="Twitter" target="_blank"><i class="fab fa-twitter"></i> <span class="sr-only">Twitter profile</span></a>
              </div>
              <!-- End Social Links -->

              <!-- Footer Text -->
              <div class="footer-text">

                  <!-- Copyright -->
                  <div class="footer-copy">
                      <a href="index.html">© Rutgers RPL 2022</a>.
                  </div>
                  <!-- End Copyright -->

                  <div class="footer-made">
                      Made with love for great people.
                  </div>

                  <div class="footer-made">
                    <br>
                    <a href="contactus.html" class="btn btn-mod btn-gray btn-circle">Get in touch.</a>
                  </div>

              </div>
              <!-- End Footer Text -->

           </div>

           <!-- Top Link -->
           <div class="local-scroll">
               <a href="#top" class="link-to-top"><i class="link-to-top-icon"></i><span class="sr-only">Scroll to top</span></a>
           </div>
           <!-- End Top Link -->

      </footer>
    `
  }
}

class myRecruitment extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section class="small-section bg-dark light-content">
        <div class="container relative">
            <div class="row wow fadeInUpShort animated" style="visibility: visible; animation-name: fadeInUpShort;">
                <div class="col-md-8 offset-md-2 text-center">
                    <h3 class="call-action-1-heading">Want to join the team?</h3>
                    <div class="call-action-1-decription mb-60 mb-sm-30">
                        Proin fringilla augue at maximus vestibulum. Nam pulvinar vitae neque et porttitor. Integer non dapibus diam, ac eleifend lectus. Duis placerat ex gravida nibh tristique ultricies eros lorem blandit.
                    </div>

                    <div class="local-scroll">
                        <a href="certification.html" class="btn btn-mod btn-w btn-large btn-round">Let's Talk</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `
  }
}

customElements.define('my-recruitment', myRecruitment)
customElements.define('my-nav', myNav)
customElements.define('my-newsletter', myNewsletter)
customElements.define('my-footer', myFooter)

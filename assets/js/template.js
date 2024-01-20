class aiaaHeader extends HTMLElement {
    connectedCallback() {
        document.head.innerHTML +='<meta name="robots" content="noindex">'
        this.innerHTML = `
        <header id="header">
        <h1 id="logo"><a href="index.html"><img src="images/logo.png" alt="Rutgers AIAA"></img></a></h1>
        <nav id="nav">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="http://facebook.com/ruaiaa/">News</a></li>
                <li><a href="index.html#five" class="scrolly">Mailing List</a></li>
                <li><a href="about.html">About Us / E-Board</a></li>
                <li>
                    <a href="#">Divisions</a>
                    <ul>
                        <li><a href="ruairborne.html">RUAirborne</a></li>
                        <li><a href="ruautonomous.html">RUAutonomous</a></li>
                        <li><a href="ruftc.html">RUFTC</a></li>
                        <li><a href="http://rpl.rutgers.edu/">RRPL</a></li>
                    </ul>
                </li>
                <li><a href="media.html">Media</a></li>
                <li><a href="sponsors.html">Sponsors</a></li>
                <li><a href="#footer" class="scrolly">Contact Us</a></li>
            </ul>
        </nav>
    </header>
                `
    }
}

class aiaaBanner extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section id="banner">
        <div class="content">
            <header>
                <h2>The Official Rutgers Chapter of AIAA</h2>
            </header>
            <hr style="width:50%; opacity:0.5; margin-left:25%">

            <div id="socials" class="">
              <div class="row">
                <div class="col-4">
                    <a href="https://www.linkedin.com/in/rutgers-aiaa-918398126">
                          <i class="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                </div>
                <div class="col-4">
                    <a href="http://facebook.com/ruaiaa/">
                          <i class="fa fa-facebook-square" aria-hidden="true"></i>
                      </a>
                </div>
                <div class="col-4">
                    <a href="https://github.com/RUAIAA">
                          <i class="fa fa-github" aria-hidden="true"></i>
                      </a>
                </div>
              </div>
            </div>
        </div>
        <a href="#one" class="goto-next scrolly">Next</a>
        <video loop muted autoplay poster="assets/titleVideo.jpg" class="fullscreen-bg__video">
            <source src="assets/titleVideo.mp4" type="video/mp4">
            <!--<source src="assets/big_buck_bunny.webm" type="video/webm">
            <source src="assets/big_buck_bunny.ogv" type="video/ogg">!-->
        </video>
    </section>
        `
    }
}

class aiaaFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer id="footer">
					<ul class="copyright">
						<li><a href="http://soe.rutgers.edu/" class=""><span class="label">
						<img src="images/soeLogo.png" style="height:5em"></img>
						</span></a></li>
					</ul>
					<ul class="copyright">
						<li>98 Brett Road, Piscataway, NJ 08854 | rutgersaiaa@gmail.com</li>
					</ul>
					<ul class="copyright">
						<li><a href="sponsors.html">Sponsor Us</a></li>
					</ul>
					<ul class="copyright">
						<li><a href="#banner" class="scrolly">Go back to the top.</a></li>
					</ul>
				</footer>
        `
    }
}
customElements.define("aiaa-header", aiaaHeader);
customElements.define("aiaa-banner", aiaaBanner);
customElements.define("aiaa-footer", aiaaFooter);
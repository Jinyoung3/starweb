// https://www.sitepoint.com/get-url-parameters-with-javascript/

// Always be wary of injection attacks!

//be sure to load teambuilder.js first as it is a dependency of this file
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const subteam = urlParams.get('subteam');
var subteamTitle = document.getElementById('subteamTitle');
subteamTitle.innerHTML = subteam.charAt(0).toUpperCase() + subteam.slice(1);

var contentLink = null
switch(subteam){
  case "example":
    contentLink="https://docs.google.com/spreadsheets/d/e/2PACX-1vQvJApG4qeafv9Fem-uJStdidvKkZWzrJCHPlWkKlU8U3NccsAcVEs0wXnQRz5Q9TpAdVTLjqx_H4ec/pub?output=csv"
    break
  case "Telemetry":
    contentLink="https://docs.google.com/spreadsheets/d/e/2PACX-1vSTpehiGFAAarmqdIcGVjf5TLM4saabvCXj6_gd3mkbXaDg7-euU7yHenS4cTeQu6d5MfNWgVk6zMzL/pub?output=csv"
    break
  case "Recovery":
    contentLink="https://docs.google.com/spreadsheets/d/e/2PACX-1vT4un_F4P4RBAQo7drxJ4mmxGqrVHmoBiiEKbvyf7ElLCj-4G3rfFWFRFj5dYfTQ0Uw0JOMHNOqM66G/pub?gid=0&single=true&output=csv"
    break
  case "Aerobody":
    contentLink="https://docs.google.com/spreadsheets/d/e/2PACX-1vRPIZ44JgZwSMHCOPpMVZGJyy1Ab7ffBWgeGVBsTg7w6oTXHg72K-plvCnS8ducQGmqFYZcxw_b0uHB/pub?gid=0&single=true&output=csv"
    break
  case "Payload":
    contentLink="https://docs.google.com/spreadsheets/d/e/2PACX-1vRARzw0QPzC50cKVOZgVC6TMwgSJaANRL_Nt_TFbHTJniyJTO4_24dT23iyPsuqBIkzLzrYFG2JtwbS/pub?gid=0&single=true&output=csv"
    break
  case "Propulsion":
    contentLink="https://docs.google.com/spreadsheets/d/e/2PACX-1vTVXPHxPkwLcT0TC9pO085edsVMl119XrgSRnYsdtD2POew4Uq5kpndNu4O-zr9lZBlkK5ndl81xt3N/pub?gid=0&single=true&output=csv"
    break
  case "Business":
    contentLink="https://docs.google.com/spreadsheets/d/e/2PACX-1vSi1Mxp1-9ccpT5a9N9OSnLIDjkiaYgnxAljsPKD5eHn0u-x_plLvsa5ANBeLMqHAQaj9xD_oZwlv4w/pub?gid=0&single=true&output=csv"
    break
  default:
    alert("this subteam is not real")
    break
}

var content = CSVToArray(loadData(contentLink));
document.getElementById("banner").style.backgroundImage = "url("+content[0][1]+")";
document.getElementById("tagline").innerHTML=content[1][1];
document.getElementById("whatwedodescription").innerHTML=content[2][1];
const profurl = '../data/member_profiles.csv';
const profarrarr = CSVToArray(loadData(profurl));

class svgfeatures extends HTMLElement {
  connectedCallback() {
    var i = 1
    var items = ""
    while(content[3][i] != undefined && content[3][i] != ""){
      items +=
      `<!-- Features Item -->
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
          <div class="alt-features-item text-center wow fadeScaleIn animated" data-wow-delay="${i}" data-wow-duration="1s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.${i}s; animation-name: fadeScaleIn;">
              <div class="alt-features-icon mx-auto">
                  <img src=${content[3][i]}>
              </div>
              <h3 class="alt-features-title"><br><br></h3>
              <div class="alt-features-descr">
                  ${content[4][i]}
              </div>
          </div>
      </div>
      <!-- End Features Item -->`;
      i++;
    }
    this.innerHTML =`
    <section class="page-section">
      <div class="container relative">
          <!-- Features Grid -->
          <div id="features" class="row justify-content-center flex-wrap">
            ${items}
          </div>
          <!-- End Features Grid -->
      </div>
    </section>
    `
  }
}
customElements.define('svg-features', svgfeatures);

function createProject(currProject, n){
  var i = 1
  var output = `
  <div class="container relative m-0 p-0">
    <h2>${currProject[0][1]}</h2>
    <div class="row">
      <div class="col-md-8 col-xs-12">
      `
  while(currProject[1][i] != undefined && currProject[1][i] != ""){
    output += `
          <p>${currProject[1][i]}</p>
    `
    i++
  }
  output += `</div> <!-- Media Gallery -->
  <div class="col-md-4 col-xs-12">
    <div class="blog-media">
        <ul class="clearlist content-slider light-content">`
    i = 1
    while(currProject[2][i] != undefined && currProject[2][i] != ""){
      output +=`
              <li>
                  <img src="${currProject[2][i]}" alt="" />
              </li>
              `
      i++
    }
    output += `
    </ul>
  </div>
</div>
    </div>
  </div>
  `
  return output
}

class myProjects extends HTMLElement {
  connectedCallback() {
    var i = 1
    var items = ""
    while(content[5][i] != undefined && content[5][i] != ""){
      var currProject=CSVToArray(loadData(content[5][i]))
      items += createProject(currProject, i)
      i++;
    }
    this.innerHTML = `
      <div id='Projects'>
        ${items}
      </div>
    `
  }
}
customElements.define('my-projects', myProjects);

function addSubteamLeads(subteam) {
  let html = `<div class="row">
    <!-- Text Item -->
    <div class="col-md-12 col-lg-3">
        <div class="align-left">
            <h2 class="work-process-heading mt-0">Subteam Leads</h2>
            <p class="work-process-description">
                Lorem ipsum dolor sit amet casume adipisin elit. In maximus ligula semper metus pellentesque mattis. Maecenas volutpat, diam enim.
            </p>
        </div>
    </div>`

  for (let i = 0; i < profarrarr.length - 1; i++) {
    if (profarrarr[i][2].includes(subteam)) {
      html += `
      <!-- Team item -->
        <div class="col-md-3 col-lg-3">
            <div class="wow fadeInUp" data-wow-delay=".1s" data-wow-duration="1.2s">
                <div class="team-item">
                    <div class="team-item-image">
                        <img src="../images/members/${profarrarr[i][6]}.jpg" style="width: 100%; aspect-ratio: 2/3; object-fit: fill;" alt="" />
                        <div class="team-item-detail">
                            <p class="team-item-detail-title">
                                Hello & Welcome!
                            </p>
                            <p>
                                ${profarrarr[i][5]}
                            </p>
                            <div class="team-social-links">
                              <a href="mailto:${profarrarr[i][3]}" target="_blank"><i class="fa fa-envelope"></i><span class="sr-only">Email</span></a>
                              <a href="${profarrarr[i][4]}" target="_blank"><i class="fab fa-linkedin"></i><span class="sr-only">LinkedIn profile</span></a>
                            </div>
                        </div>
                    </div>
                    <div class="team-item-descr">
                        <div class="team-item-name">
                            ${profarrarr[i][1]}
                        </div>
                        <div class="team-item-role">
                            ${profarrarr[i][2]}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Team item -->
        `;
      }
    }
  return html + '</div>';
}

class mySubteamLeads extends HTMLElement {
  connectedCallback() {
    this.innerHTML = addSubteamLeads(subteam);
  }
}

customElements.define('my-subteamleads', mySubteamLeads);

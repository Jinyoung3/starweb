// google sheets containing member profiles
const url = '../data/member_profiles.csv';
const arrarr = CSVToArray(loadData(url));

function buildTeamItem(data, identifier, col) {
  let html = "<div class=row>"
  for (let i = 0; i < data.length - 1; i++) {
    if (data[i][col] == identifier) {
      html += `
      <!-- Team item -->
        <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="wow fadeInUp" data-wow-delay=".1s" data-wow-duration="1.2s">
                <div class="team-item">
                    <div class="team-item-image">
                        <img src="images/members/${data[i][6]}.jpg" style="width: 100%; aspect-ratio: 2/3; object-fit: fill;" alt="" />
                        <div class="team-item-detail">
                            <p class="team-item-detail-title">
                                Hello & Welcome!
                            </p>
                            <p>
                                ${data[i][5]}
                            </p>
                            <div class="team-social-links">
                              <a href="mailto:${data[i][3]}" target="_blank"><i class="fa fa-envelope"></i><span class="sr-only">Email</span></a>
                              <a href="${data[i][4]}" target="_blank"><i class="fab fa-linkedin"></i><span class="sr-only">LinkedIn profile</span></a>
                            </div>
                        </div>
                    </div>
                    <div class="team-item-descr">
                        <div class="team-item-name">
                            ${data[i][1]}
                        </div>
                        <div class="team-item-role">
                            ${data[i][2]}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Team item -->
        `;
      }
  }

  return html + '</div>'
}

class myAdmin extends HTMLElement {
  connectedCallback() {
    this.innerHTML = buildTeamItem(arrarr, 'Admin', 0);
  }
}

class myTeamLeads extends HTMLElement {
  connectedCallback() {
    this.innerHTML = buildTeamItem(arrarr, 'TeamLead', 0);
  }
}

customElements.define('my-admin', myAdmin)
customElements.define('my-teamleads', myTeamLeads)

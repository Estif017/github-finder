class UI {
	constructor() {
		this.profile = document.getElementById('profile');
	}
	showProfile(user) {
		this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}"/>
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-btn-block"> View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-secondary">Public Gists : ${user.public_gists}</span>
                    <span class="badge badge-success">Followers : ${user.followers}</span>
                    <span class="badge badge-info">Following : ${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        `;
	}
	clearProfile() {
		this.profile.innerHTML = '';
	}
	//show alert
	showAlert(message, className) {
		//create div
		this.clearALert();
		const div = document.createElement('div');
		//add classes
		div.className = className;
		//add text
		div.appendChild(document.createTextNode(message));
		//get parent
		const container = document.querySelector('.searchContainer');
		//get search box
		const search = document.querySelector('#searchUser');
		//insert alert
		container.insertBefore(div, search);

		//timeout after 3 sec
		setTimeout(() => {
			this.clearALert();
		}, 3000);
	}

	clearALert() {
		const currentAlert = document.querySelector('.alert');
		if (currentAlert) {
			currentAlert.remove();
		}
	}

	// show user repos
	showRepos(repos) {
		let output = '';
		repos.forEach((repos) => {
			output += `<div class="card card-body mb-2">
                <div class="row">
                    <a href="${repos.html_url}" target="_blank">${repos.name}</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary">Stars: ${repos.stargazers_count}</span>
                    <span class="badge badge-secondary"> Watchers : ${repos.watchers_count}</span>
                    <span class="badge badge-success">Forks : ${repos.forks_count}</span>
                </div>
            </div>`;
		});
		//output repos
		document.getElementById('repos').innerHTML = output;
	}
}

//Intit Github
const github = new GitHub();
//Init UI
const ui = new UI();

//search input
const searchUser = document.getElementById('searchUser');

//search input event listner
searchUser.addEventListener('keyup', (e) => {
	//get input text
	const userText = e.target.value;
	if (userText !== '') {
		//Make http call
		github.getuser(userText).then((data) => {
			if (data.profile.message === 'Not Found') {
				//show alert
				ui.showAlert('User not found', 'alert alert-danger');
			} else {
				//show profile
				ui.showProfile(data.profile);
				ui.showRepos(data.repos);
			}
		});
	} else {
		//cleare profile
		ui.clearProfile();
	}
});

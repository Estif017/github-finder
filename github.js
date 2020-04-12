class GitHub {
	constructor() {
		this.client_id = 'aaa17acbb06b8e7440d8';
		this.client_secret = 'e6c7a0134a5fa11139ab9dedffa781f1353713eb';
		this.repos_count = 5;
		this.repos_sort = 'created: asc';
	}

	async getuser(user) {
		const profileResponse = await fetch(
			`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
		);
		const reposResponse = await fetch(
			`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`
		);
		const profile = await profileResponse.json();
		const repos = await reposResponse.json();
		return { profile, repos };
	}
}

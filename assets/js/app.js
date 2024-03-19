const { createApp } = Vue

createApp({
	data() {
		return {
			userMail: [],
			

		}
	},
	methods: {
		genMail() {
			for (let i = 0; i < 10; i++) {
				console.log(i);
				if (i <= 10) {
					axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
						.then((response) => {
							console.log(response);
							this.userMail.push(response.data.response);
						})
					console.log(i);
				}
			}
			console.log(this.userMail);
		}
	},
	created() {
		this.genMail()
	}
}).mount('#app')

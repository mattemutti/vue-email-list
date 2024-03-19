const { createApp } = Vue

createApp({
	data() {
		return {
			mailRandom: null,
		}
	},
	mounted() {
		axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
		.then((response) => {
			console.log(response);
			this.mailRandom = response.data.response
			console.log(this.mailRandom);
		})


	}
}).mount('#app')

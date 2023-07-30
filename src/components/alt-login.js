const imgBaseURL = './src/assets/images/'

export default function altLogin() {
	const container = `
    <section>
    <button class="google-auth"><a href="/?home"><img src=${
			imgBaseURL + 'google.png'
		} alt="login with google"> Continue With Google</a></button>
    </section>
    `
	return container
}

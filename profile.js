const app = {
    data() {
        return {
            fullName: 'Apiwat Srinukul',
            position: 'UX/UI',
            profileImage: 'images/profile.jpg'
        }
    }
}
let mountApp = Vue.createApp(app).mount('#app')
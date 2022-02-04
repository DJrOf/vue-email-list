console.log('VUE OK', Vue);
console.log('Axios ok', axios)
Vue.config.devtools = true;

 const root = new Vue ({
    el: '#root',
    data: {
        mailAddresses: [],
       
    },
    methods: {
        getRandomMail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(res => {
                this.mailAddresses.push(res.data.response);
            });
        },
        getandomMails(number) {
            for (let i = 0; i < number; i++) {
                this.getRandomMail();
            }
        }
    },
    mounted() {
        this.getRandomMails(10);
    }
})
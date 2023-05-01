const app = Vue.createApp({
    data() {
        return {
            userName: "Jens Gerwins",
            Datum: new Date().toLocaleString('en-us'),
        };
    },
}).mount("#app");
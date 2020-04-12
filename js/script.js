var baseURL = "https://breaking-bad-quotes.herokuapp.com";
var vm = new Vue({
    el: "#app", 
    data: {
        quotes:[]
    }, 
    methods: {
        getQuotes: function() {
            axios.get(baseURL + "/v1/quotes/20").then(
                function(response){
                    console.log(response);
                    vm.quotes = response.data;
                }
            )
        }
    }, 
    created: function() {
        this.getQuotes();
    }

})
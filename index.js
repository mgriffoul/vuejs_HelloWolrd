var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue !'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You load this page on ' + new Date().toLocaleDateString()
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'learn Javascript' },
            { text: 'learn Vue' },
            { text: 'Building something awesome ! ' }
        ]
    }
})

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js Again'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue for 3rd time'
    }
})

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})
var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
          ]
    }
})

var maData = {
    a: 1
}

var app8 = new Vue({
    
})

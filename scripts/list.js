import Vue from 'vue';
import _ from 'lodash';

import '../styles/list.css';

var list1 = new Vue({
    el: '#flip-list-demo',
    data: {
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    },
    methods: {
        shuffle: function () {
            this.items = _.shuffle(this.items);
        }
    }
});

var list2 = new Vue({
    el: '#list-complete-demo',
    data: {
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        nextNum: 10
    },
    methods: {
        randomIndex: function () {
            return Math.floor(Math.random() * this.items.length);
        },
        add: function () {
            this.items.splice(this.randomIndex(), 0, this.nextNum++);
        },
        remove: function () {
            this.items.splice(this.randomIndex(), 1);
        },
        shuffle: function () {
            this.items = _.shuffle(this.items);
        }
    }
});

var grid = new Vue({
    el: '#sudoku-demo',
    data: {
        cells: Array.apply(null, { length: 81 })
            .map(function (it, index) {
                return {
                    id: index,
                    number: index % 9 + 1
                };
            })
    },
    methods: {
        shuffle: function () {
            this.cells = _.shuffle(this.cells);
        }
    }
});

export default { list1 };

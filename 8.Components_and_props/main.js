Vue.component("comment", {
    props: {
        comment: {
            type: Object,
            required: true,
        }
    },
    template: `
        <div>
            <div class="card-body">
                <p>{{ comment.username }}</p>
                <p>{{ comment.content }}</p>
            </div>
            <hr>
        </div>
    `
})

var app = new Vue({
    el: "#app",
    data: {
        comments: [
            { username: "alice", content:"first comment!"},
            { username: "bob", content:"second comment!"},
            { username: "ironman", content:"i'm ironman!"},
            { username: "thor", content:"hijos de odin!"},
            { username: "hulk", content:"smash!"},
        ]
    }, 
})
Vue.component("to-do", {
    props: {
        tasks: {
            task: Array,
            required: true
        },
        remaining: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            new_task: null,
            error: null
        }
    },
    methods: {
        submitTask() {
            if (this.new_task) {
                this.$emit("add-task", this.new_task);
                this.new_task = null;
                if (this.error) {
                    this.error = null;
                }
            } else {
                this.error = "The input field can't be empty!"
            }
        },
        removeTask(task) {
            this.$emit("remove-task", this.task);
        }
    },
    template:` 
        <div class="container mt-2">
            <p><strong>Remaining Task: {{ remaining }}</strong></p>

            <input type="text" 
                   class="form-control" 
                   placeholder="What do you need to do?" 
                   v-model="new_task"
                   @keyup.enter="submitTask">
            <br>

            <div class="single-task" v-for="(task, index) in tasks" :task="task" :key="index">
                <div class="alert alert-primary">
                    {{ task }}
                    <button type="button" class="close no-outline" @click="removeTask(task)">
                        <span>&times;</span>
                    </button>
                </div>        
            </div>
            <p v-if="error">{{ error }}</p>
            <p v-if="remaining===0">To add a new task.</p>

        </div> 
    `
})


var app = new Vue({
    el: "#app",
    data: {
        tasks: []
    }, 
    computed: {
        taskCount() {
            return this.tasks.length;
        }
    },
    methods: {
        addNewTask(new_task) {
            this.tasks.push(new_task);
        },
        removeTask(task) {
            this.tasks.splice(this.tasks.indexOf(task), 1);
        }
    }
    
})
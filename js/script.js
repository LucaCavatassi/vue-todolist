// CSS 
// done = line trough
// check completed = green mark + circle
// check uncompleted = red cross + circle

const { createApp } = Vue;

createApp ({
    data(){
        return {
            newToDo: {
                text: "",
                done: false,
            },
            allToDo: [
                {
                    text: "Quarterly Newsletter",
                    done: true,
                },
                {
                    text: "Recruiting blog post",
                    done: false,
                },
                {
                    text: "Mobile App Launch",
                    done: true,
                },
                {
                    text: "Interview John H",
                    done: false,
                },
                {
                    text: "Summit update to mobile storefronts",
                    done: true,
                },
                {
                    text: "Schedule meeting with Alex",
                    done: false,
                },
                {
                    text: "Recruiting Editorial Calendar",
                    done: false,
                },
            ]
        }
    },
    methods: {
        addToTask: function () {
            const toDoCopy = this.newToDo
            this.allToDo.push({...toDoCopy})
            this.newToDo.text = ""
        }
    }
}).mount("#app")

// in class if done = true allora completed else uncompleted 
// in text if done = true allara &check; else &cross;
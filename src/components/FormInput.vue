<template>
    <div class="input-group mb-3">
        <input v-model="todoText" type="text" class="form-control" placeholder="Not Ekle" aria-label="Recipient's username" aria-describedby="button-addon2">
        <div class="input-group-append">
            <button v-on:click="sendMessage" class="btn btn-outline-secondary" type="button" id="button-addon2">Ekle</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            todoText: ""
        }
    },
    methods: {
        sendMessage() {
            if (this.todoText !== "")
                this.$emit("inputEvent", this.outputMessage())
            this.todoText = ""
        },
        outputMessage(todos=document.querySelector('.todos'), div=document.createElement('div'), msg=this.todoText) {
            div.classList.add('alert', 'alert-dismissible', 'alert-success')
            div.innerHTML = `<button type="button" class="close" data-dismiss="alert">&times;</button>
            <p><strong>${msg}</strong></p>`
            todos.appendChild(div)
        }
    }
}
</script>

<style>
    .input-group {
        padding: 0px 100px;
        padding-top: 50px;
    }

    .input-group .btn {
        margin-left: 8px;
        color: white;
        background-color: #2C3E50;
    }
    .input-group .btn:hover {
        color: white;
        background-color: rgb(77, 108, 139);
    }
</style>
<template>
    <div class="input-group mb-3">
        <input v-model="todoText" type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
        <div class="input-group-append">
            <button v-on:click="showText" class="btn btn-outline-secondary" type="button" id="button-addon2">Ekle</button>
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
        showText() {
            alert(this.todoText)
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
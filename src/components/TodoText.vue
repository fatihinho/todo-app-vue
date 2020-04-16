<template>
    <div class="todos">
        <div class="alert alert-dismissible alert-success">
            <button type="button" class="close" data-dismiss="alert">&times;</button>
            <p><strong>Todo</strong></p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['outputMessage'],
    methods: {
        
    },
    mounted() {
        this.outputMessage()
    }
}
</script>

<style>
    .todos {
        margin: 0px auto;
        width: 85%;
    }
    .todos p {
        text-align: center;
    }
    .todos .alert {
        height: 62px;
        color: #2C3E50;
        font-size: 24px;
        font-weight: bold;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    }
    .todos .alert .close:hover {
        color: darkred;
    }
</style>
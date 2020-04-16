<template>
    <div class="todos">

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
    }
</style>
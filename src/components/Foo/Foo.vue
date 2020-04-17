<template>
    <div id="foo">
        <Navbar />
    
    </div>
</template>

<script>
import Navbar from './Navbar'

export default {
    name: 'Foo',
    components: {
        Navbar
    },
    created() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json))
    }
}
</script>

<style>

</style>
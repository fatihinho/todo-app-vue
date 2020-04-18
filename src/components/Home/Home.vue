<template>
    <div>
        <Navbar />
        <FormInput @inputEvent="outputMessage=$event" />
        <TodoText :outputMessage=outputMessage />
        <Footer />
    </div>
</template>

<script>
import Navbar from "./Navbar"
import Footer from "./Footer"
import FormInput from "./FormInput"
import TodoText from "./TodoText"

export default {
    name: 'Home',
    components: {
        Navbar,
        Footer,
        FormInput,
        TodoText
    },
    data() {
        return {
            outputMessage: Function
        }
    }
}
</script>

<style>

</style>
<template>
    <div id="container">
        <Navbar />
        <FormInput @inputEvent="outputMessage=$event" />
        <TodoText :outputMessage=outputMessage />
        <Footer />
    </div>
</template>

<script>
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import FormInput from "./components/FormInput"
import TodoText from "./components/TodoText"

export default {
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
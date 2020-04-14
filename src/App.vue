<template>
    <div id="container">
        <Navbar />
        <FormInput />
        <TodoText />
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
            message: "Hello World"
        }
    }
}
</script>

<style>

</style>
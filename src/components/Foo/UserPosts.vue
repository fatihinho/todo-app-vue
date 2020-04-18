<template>
    <div>
        <Navbar />
        <router-link :to="backToUser">Back to User</router-link>
        <div class="posts" v-for="(post, index) in postData" :key="index">
            <h3>{{ post.title }}</h3>
            <p>{{ post.body }}</p>
            <hr>
        </div>
    </div>
</template>

<script>
import Navbar from './Navbar'

export default {
    components: {
        Navbar
    },
    computed: {
        backToUser() {
            return `/user/${this.$route.params.userId}`
        }
    },
    data() {
        return {
            postData: {}
        }
    },
    created() {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.$route.params.userId}`)
            .then(response => response.json())
            .then(data => this.postData = data)
    }
}
</script>

<style scoped>
    .posts {
        padding: 16px;
        padding-top: 0px;
    }
    a {
        padding: 16px;
    }
</style>
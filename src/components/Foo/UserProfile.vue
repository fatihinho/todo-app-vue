<template>
    <div>
        <Navbar />
        <div>
            <h1>{{userData.name}}</h1>
            <ul>
                <li>Username: {{userData.username}}</li>
                <li>Email: {{userData.email}}</li>
                <li>Phone: {{userData.phone}}</li>
            </ul>
            <router-link :to="profilePosts">Post</router-link>
        </div>
    </div>
</template>

<script>
import Navbar from './Navbar'

export default {
    name: 'UserProfile',
    components: {
        Navbar,
    },
    data() {
        return {
            userData: {}
        }
    },
    computed: {
        profilePosts() {
            return `/user/${this.$route.params.id}/posts`
        }
    },
    created() {
        fetch(`https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`)
            .then(response => response.json())
            .then(data => this.userData = data)
    }
}
</script>

<style>

</style>
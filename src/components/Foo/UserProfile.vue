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
            <router-link :to="previousUser">Previous</router-link>
            <router-link :to="nextUser">Next</router-link>
            <router-link :to="profilePosts">Posts</router-link>
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
        previousUser() {
            return `/user/${parseInt(this.$route.params.id) - 1}`
        },
        nextUser() {
            return `/user/${parseInt(this.$route.params.id) + 1}`
        },
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
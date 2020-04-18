<template>
    <div>
        <Navbar />
        <div class="user-datas">
            <a v-on:click="goBack" href="">Go back to user list</a>
            <h1>{{userData.name}}</h1>
            <p>Username: {{userData.username}}</p>
            <p>Email: {{userData.email}}</p>
            <p>Phone: {{userData.phone}}</p>
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
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData() {
            fetch(`https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`)
                .then(response => response.json())
                .then(data => this.userData = data)
        },
        goBack() {
            this.$router.push('/foo')
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
    data() {
        return {
            userData: {}
        }
    },
    created() {
        this.fetchData()
    }
}
</script>

<style scoped>
    .user-datas {
        margin-top: 36px;
        text-align: center;
    }
    a {
        margin: 16px;
    }
</style>
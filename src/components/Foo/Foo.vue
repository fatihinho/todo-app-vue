<template>
    <div>
        <Navbar />
        <div class="users" v-for="(user, index) in users" :key="index">
            <UserItem :user=user />
        </div>
    </div>
</template>

<script>
import Navbar from './Navbar'
import UserItem from './UserItem'

export default {
    name: 'Foo',
    components: {
        Navbar,
        UserItem
    },
    data() {
        return {
            users: []
        }
    },
    created() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.users = users)
    }
}
</script>

<style>
    .users {
        margin-top: 36px;
        text-align: center;
    }
</style>
<template>
    <div>
        <router-link :to="profileLink">
            <p>{{ user.name }} @{{ user.username }}</p>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'UserItem',
    props: ['user'],
    computed: {
        profileLink() {
            return `/user/${this.user.id}`
        }
    }
}
</script>

<style>

</style>
<template>
    <div>
        <router-link :to="profileLink">
            <div class="users">
                <p>{{ user.name }} @{{ user.username }}</p>
            </div>
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

<style scoped>
    
</style>
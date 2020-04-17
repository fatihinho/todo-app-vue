<template>
    <div>
        <p>{{ user.name }} @{{ user.username }}</p>
        <p></p>
    </div>
</template>

<script>
export default {
    name: 'UserItem',
    props: ['user'],
    data() {
        return {

        }
    }
}
</script>

<style>

</style>
<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary flex-column flex-md-row bd-navbar">
        <a class="navbar-brand" href="/">TodoApp</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/">Home </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/foo">Foo</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="/bar">Bar</a>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="text" placeholder="Arama">
                <button class="btn btn-secondary my-2 my-sm-0" type="submit">Ara</button>
            </form>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style>
    .navbar {
        position: sticky;
        top: 0px;
        z-index: 1000;
    }
    .navbar-brand {
        font-size: 28px;
    }
</style>
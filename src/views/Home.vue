<!-- Home.vue -->
<template>
    <div>
        <TopMenu />
        <h1>Home!!!</h1>
    </div>
</template>

<script>
import TopMenu from '../components/TopMenu.vue';
export default {
    name: 'Home',
    components: {
        TopMenu
    }
}
</script>
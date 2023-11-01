<!-- TopMenu.vue -->
<template>
    <nav>
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/donate">Donate</router-link></li>
            <li><router-link to="/thank-you">Thank You</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'TopMenu'
}
</script>
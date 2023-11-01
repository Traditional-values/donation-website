<!-- TopMenu.vue -->
<template>
    <nav class="mobile-nav">
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/donate">Donate</router-link></li>
            <li><router-link to="/thank-you">Thank You</router-link></li>
            <li><router-link to="/mobile-first">Mobile First</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'TopMenu'
}
</script>


<style scoped>
.mobile-nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
}

.mobile-nav ul li {
    float: left;
}

.mobile-nav ul li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

.mobile-nav ul li a:hover {
    background-color: #111;
}
</style>
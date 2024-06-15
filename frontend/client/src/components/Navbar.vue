<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
    <div>
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <img src="" alt="Logo">
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1">
                    <RouterLink to="/collaberation">
                        <li class="btn-lg"><a class="text-xl">Collaboration</a></li>
                    </RouterLink>
                    <RouterLink to="/networking">
                        <li class="btn-lg"><a class="text-xl">Networking</a></li>
                    </RouterLink>
                    <RouterLink to="/security">
                        <li class="btn-lg"><a class="text-xl">Security</a></li>
                    </RouterLink>
                    <li class="btn-lg">
                        <details class="dropdown">
                            <summary class="text-xl">Services</summary>
                            <ul class="p-2 w-48">
                                <RouterLink to="/managed-services">
                                    <li class=""><a>Managed Services</a></li>
                                </RouterLink>
                                <RouterLink to="/pro-services">
                                    <li><a>Pro Services</a></li>
                                </RouterLink>
                            </ul>
                        </details>
                    </li>
                    <RouterLink to="/about">
                        <li class="btn-lg"><a class="text-xl">About Us</a></li>
                    </RouterLink>
                </ul>
            </div>
            <div class="navbar-end">
            </div>
        </div>
    </div>
</template>

<style scoped>
.dropdown {
    position: relative;
    z-index: 1000;
}
</style>
<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
    <div>
        <div class="navbar bg-base-100 h-28">
            <div class="navbar-start">
                <RouterLink to="/">
                    <img src="../assets/images/logo.png" alt="Logo" class="logo h-20">
                </RouterLink>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1">
                    <RouterLink to="/collaboration">
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

.logo {
    position: absolute;
    left: 20px;
    top: 12px;
}
</style>
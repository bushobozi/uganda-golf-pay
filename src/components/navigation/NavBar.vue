<template>
    <div class="bg-white shadow-sm p-2 position-sticky w-100" style="top: 0;">
        <div class="container mx-auto d-flex justify-content-center align-items-center">
            <RouterLink to="/" class="text-decoration-none text-dark fs-4">
                <img src="/images/logo.png" loading="lazy" width="70" height="70" alt="Uganda Golf Logo" class="me-2" />
            </RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
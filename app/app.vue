<script setup lang="ts">
const { site } = useAppConfig();

useHead({
    titleTemplate: (chunk) =>
        chunk ? `${chunk} · ${site.title}` : `${site.title} — ${site.tagline}`,
});
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

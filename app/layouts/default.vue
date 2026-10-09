<template>
    <div id="top" class="flex min-h-screen flex-col">
        <SiteHeader />
        <main id="content" class="mx-auto w-full max-w-6xl flex-1 px-4 py-10">
            <slot />
        </main>
        <SiteFooter />
    </div>
</template>

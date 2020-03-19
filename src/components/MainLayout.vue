<template>
    <div>
        <app-header ref="header"></app-header>

        <slot></slot>

        <app-information></app-information>
        <app-footer></app-footer>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
     @import url(../css/style.css);
</style>
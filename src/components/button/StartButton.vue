<script lang="ts" setup></script>

<template>
    <router-link to="/" >
        <button class="btnStart">Volver atras</button>
    </router-link>

</template>

<style lang="scss" scoped>

.btnStart {

    border: none;
    height: 40px;
    color: $white;
    cursor: pointer;
    font-weight: 500;
    margin-top: 50px;
    margin-left: 50px;
    border-radius: 12px;
    padding: 10px 10px;
    background-color: $primary;

    &:hover {
        background-color: #8232fa;
    }
}
</style>
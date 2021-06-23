<template>
    <el-row>
        <el-col>
            <el-menu
                    :default-active="activeIndex2"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                <el-menu-item index="divdrag">canvas 画线</el-menu-item>
                <el-menu-item index="animation">动画</el-menu-item>
                <el-menu-item index="websocket">websocket</el-menu-item>
                <el-menu-item index="threejs">threejs</el-menu-item>
                <el-menu-item index="#">其它</el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "Index",
        data() {
            return {
                activeIndex: '',
                activeIndex2: ''
            };
        },
        methods: {
            handleSelect(key) {
                this.$router.push({name: key});
            }
        }
    }
</script>

<style scoped>
</style>

<template>
    <el-row class="page">
        <base-scene v-on:options="handleOptions"/>
    </el-row>
</template>

<script>
    import BaseScene from "../scene/BaseScene";
    export default {
        name: "BaseModel",
        components: {BaseScene},
        data(){
            return{
                renderer: false, //渲染器
                scene: false, //场景
                camera: false, //相机
                mygroup: false, //模型组
                control: false, //控制器
            }
        },
        created() {
        },
        mounted() {
        },
        methods:{
            handleOptions(op){
                this.renderer = op.renderer
                this.scene = op.scene
                this.camera = op.camera
                this.control = op.control
            }
        }
    }
</script>

<style scoped>
    .page{
        width: 100%;
        height: 100%;
    }
</style>

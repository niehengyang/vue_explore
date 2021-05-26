<template>
    <el-row class="page">
        <el-col>
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="炫光" name="DazzleLight">
                    <dazzle-light></dazzle-light>
                </el-tab-pane>
                <el-tab-pane label="流光" name="SlowLight">
                    <slow-light></slow-light>
                </el-tab-pane>
                <el-tab-pane label="信号塔" name="SignalTower">
                    <signal-tower></signal-tower>
                </el-tab-pane>
                <el-tab-pane label="光扩散" name="LightDiffusion">
                    <light-diffusion></light-diffusion>
                </el-tab-pane>
            </el-tabs>
        </el-col>
    </el-row>
</template>

<script>
    import DazzleLight from "./DazzleLight/Index";
    import SlowLight from "./SlowLight/Index";
    import SignalTower from "./SignalTower/Index";
    import LightDiffusion from "./LightDiffusion/Index";
    export default {
        name: "Index",
        components: {LightDiffusion, SignalTower, SlowLight, DazzleLight},
        data(){
            return{
                activeName: 'DazzleLight'
            }
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    }
</script>

<style scoped>
    .page{
        width: 100%;
        padding: 20px;
    }
</style>

<template>
    <el-row class="page">
        <a href="#" class="box">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            hello world
        </a>
    </el-row>
</template>

<script>
    export default {
        name: "SlowLight",
        data(){
            return{

            }
        },
        methods:{

        }
    }
</script>

<style scoped lang="css">
    .page{
        width: 100%;
        height: 500px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #2c3e50;
    }
    .box {
        position: relative;
        display: block;
        padding: 100px 100px;
        letter-spacing: 1px;
        text-decoration: none;
        text-transform: uppercase;
        width: 100px;
        text-align: center;
        margin: 100px 0 0;
        transition: 1s;
        color: #03f2ff;
        overflow: hidden;

        -ms-transform:rotate(45deg); /* IE 9 */
        -webkit-transform:rotate(45deg); /* Safari and Chrome */
        transform:rotate(45deg);
    }

    /* 流光效果 */
    .box span {
        position: absolute;
        display: block;
    }
    /* 从左到右 */
    .box span:nth-child(1) {
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, #03f2ff);
        animation: animate1 5s linear infinite;
        animation-delay: 0.1s;
    }
    @keyframes animate1 {
        0% {
            left: -100%;
        }
        50%,
        100% {
            left: 100%;
        }
    }
    /* 从上到下 */
    .box span:nth-child(2) {
        top: -100%;
        right: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(180deg, transparent, #03f2ff);
        animation: animate2 5s linear infinite;
        animation-delay: 0.1s;
    }
    @keyframes animate2 {
        0% {
            top: -100%;
        }
        50%,
        100% {
            top: 100%;
        }
    }

    /* 从右到左 */
    .box span:nth-child(3) {
        right: -100%;
        bottom: 0;
        width: 100%;
        height: 2px;
        background: linear-gradient(270deg, transparent, #03f2ff);
        animation: animate3 5s linear infinite;
        animation-delay: 0.1s;
    }
    @keyframes animate3 {
        0% {
            right: -100%;
        }
        50%,
        100% {
            right: 100%;
        }
    }

    /* 从下到上 */
    .box span:nth-child(4) {
        bottom: -100%;
        left: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(360deg, transparent, #03f2ff);
        animation: animate4 5s linear infinite;
        animation-delay: 0.1s;
    }
    @keyframes animate4 {
        0% {
            bottom: -100%;
        }
        50%,
        100% {
            bottom: 100%;
        }
    }
</style>

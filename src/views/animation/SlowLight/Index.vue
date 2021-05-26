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
        transition: 0.5s;
        color: #03f2ff;
        overflow: hidden;

        -ms-transform:rotate(45deg); /* IE 9 */
        -webkit-transform:rotate(45deg); /* Safari and Chrome */
        transform:rotate(45deg);
    }
    .box:hover {
        background: #03f2ff;
        color: #000;
        box-shadow: 0 0 5px #03f2ff, 0 0 25px #03f2ff, 0 0 50px #03f2ff, 0 0 200px #03f2ff;
        -webkit-box-reflect: below 1px linear-gradient(transparent, #000);
    }

    .box:nth-child(1):hover {
        width: 300px;
    }
    .box:nth-child(1) {
        filter: hue-rotate(270deg);
    }
    .box:nth-child(2) {
        filter: hue-rotate(110deg);
    }

    .box:nth-child(4) {
        background: rgba(15, 53, 76, 0.8);
        color: white;
        font-size: 12px;
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
        height: 1px;
        background: linear-gradient(90deg, transparent, #03f2ff);
        animation: animate1 10s linear infinite;
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
        width: 1px;
        height: 100%;
        background: linear-gradient(180deg, transparent, #03f2ff);
        animation: animate2 10s linear infinite;
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
        height: 1px;
        background: linear-gradient(270deg, transparent, #03f2ff);
        animation: animate3 10s linear infinite;
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
        width: 1px;
        height: 100%;
        background: linear-gradient(360deg, transparent, #03f2ff);
        animation: animate4 10s linear infinite;
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

    /* 闪烁 */
    .light {
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, transparent, rgba(48, 251, 253, 0.48), transparent) center bottom no-repeat;
        animation: glint 3s ease-in-out infinite;
        position: relative;
    }
    .light::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background: linear-gradient(90deg, transparent, transparent, rgba(48, 251, 253), transparent, transparent);
        box-shadow: 0 -1px 10px #03f2ff;
    }
    /* 呼吸灯 */
    @keyframes glint {
        from {
            opacity: 0.1;
        } /* 动画开始时的不透明度 */
        50% {
            opacity: 1;
        } /* 动画50% 时的不透明度 */
        to {
            opacity: 0.1;
        } /* 动画结束时的不透明度 */
    }
</style>

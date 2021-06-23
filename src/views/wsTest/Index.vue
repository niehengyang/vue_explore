<template>
    <el-row>
        接收到的消息：
    </el-row>
</template>

<script>
    import {WsConfig} from "../../utils/socket/config";
    import {socket} from "../../utils/socket/websocket";
    export default {
        name: "Index",
        data(){
            return{
                message: false
            }
        },
        created() {
            this.initWs()
        },

        destroyed() {

        },
        methods: {
            initWs() {
                socket.init(WsConfig.ws_url)
                let params = {
                    token: 'aaa',
                    event: 'SensorFlow'
                }
                socket.send(params,this.getsocketData);
            },

            // 接收消息
            getsocketData(e) {  // 创建接收消息函数
                // const data = e && e.detail.data
                console.log(e)
            }
        }
    }
</script>

<style scoped>

</style>

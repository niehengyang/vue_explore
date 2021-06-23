
export const WsConfig = {
    // 固定的WebSocket地址：此处是从env文件中读取socket地址，可以自行从其他config文件中读取或直接写死
    // 如需使用动态WebSocket地址，请自行作ajax通讯后扩展
    ws_url: "ws://127.0.0.1:8902/ws",
    // 开启标识
    socket_open: false,
    // 心跳timer
    hearbeat_timer: null,
    // 心跳发送频率
    hearbeat_interval: 5000,

    // 重连次数
    reconnect_count: 3,
    // 已发起重连次数
    reconnect_current: 1,
    // 重连timer
    reconnect_timer: null,
    // 重连频率
    reconnect_interval: 3000,
}

import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import router from "@/router";
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loggedIn: false, // 默认未登录
        username: '', // 用户名
        errorMessage: '',
    },
    mutations: {
        login(state, username) {
            state.loggedIn = true
            state.username = username

            // 存储用户信息到本地存储
            localStorage.setItem('loggedIn', true);
            localStorage.setItem('username', username);
        },
        logout(state) {
            state.loggedIn = false
            state.username = ''

            // 清除本地存储中的用户信息
            localStorage.removeItem('loggedIn');
            localStorage.removeItem('username');
        },
        setError(state, message) {
            state.errorMessage = message
        },
    },
    actions: {
        async login({ commit }, { username, password }) {
            try {
                const response = await axios.post(`http://alphaindex.zju.edu.cn:8088/login`, {
                    username,
                    password,
                }, {
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                    },
                });
                const token = response.data.token; // 从后端响应中获取令牌
                localStorage.setItem('token', token); // 将令牌保存到LocalStorage中
                const user = response.data.user;
                commit('login', user.username);
                commit('setError', ''); // 清除错误消息
                await router.push('/maindata');
            } catch (error) {
                commit('setError', '登录失败，请检查用户名和密码。');
            }
        },
        logout({ commit }) {
            // 执行注销操作
            commit('logout')
        },
    },
    getters: {
        // 在需要获取用户状态的组件中使用
        // 例如，this.$store.getters.loggedIn
        loggedIn: state => state.loggedIn,
        username: state => state.username,
    },
    // 在应用初始化时检查本地存储
    strict: process.env.NODE_ENV !== 'production',
    plugins: [
        store => {
            const loggedIn = localStorage.getItem('loggedIn');
            const username = localStorage.getItem('username');
            if (loggedIn && username) {
                store.commit('login', username);
            }
        },
]
})
<template>
    <div>
        <p>首页测试</p>
        <p>你好{{username}},我今年{{age}}</p>
        <button @click="to2()">第二页</button>
    </div>
</template>

<script>
// import Vue from 'vue';
    export default {
        data(){
            return {
                username: 'xiongwei',
                age: 24
            }
        },
        created(){
            console.log('???');
        },
        methods:{
            to2:function(){
                console.log('to2');
                this.$router.push('/index');
            }
        }
    }
</script>

<css>

</css>
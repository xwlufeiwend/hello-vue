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
                const sm2 = require('sm-crypto').sm2;
                let gk = sm2.generateKeyPairHex();
                let publicKey = gk.publicKey;
                let privateKey = gk.privateKey;
                console.log(publicKey + "  "+ privateKey);
                let data = '今天又是一个熬夜的一天！';

                let encryptData = sm2.doEncrypt(data, publicKey, 1);
                console.log('加密数据', encryptData);
                let sourceData = sm2.doDecrypt(encryptData, privateKey, 1);
                console.log('解密数据', sourceData);
                //this.$router.push('/index');
            }
        }
    }
</script>

<css>

</css>
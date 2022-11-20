<template>
    <div>
        <p>首页测试</p>
        <p>你好{{username}},我今年{{age}}</p>
        <p>{{message}}</p>
        <!-- <van-button @click="getInfo()" type="default" round >请求信息</van-button> -->
        <button @click="getInfo()">请求信息</button>
        <button @click="to2()">第二页</button>
        <button @click="getWeiBoList()">获取热搜</button>
        <ol>
            <li v-for="(value, index) in weiboList" :key="index" style="margin-top:10px;">
                <span style="margin-right:15px">{{index + 1}}</span><a :href="'https://s.weibo.com/'+value.href" target="_blank">{{value.topName}}-----{{value.rank}}</a>
            </li>
        </ol>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        data(){
            return {
                username: 'xiongwei',
                age: 24,
                userId: '1002xw',
                message: '',
                weiboList:{},
                status: false
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
            },
            getInfo:function(){
                axios.get('http://127.0.0.1:8090/index',{
                    params:{
                        userId: this.userId
                    }
                }).then((res) => {
                    console.log('res', res);
                    this.message = res.data.info;
                }).catch(err => {
                    console.log(err);
                })
            },
            getWeiBoList: function(){
                axios.get('http://127.0.0.1:8090/list').then(res => {
                    console.log('getWeiBoList', res.data);
                    this.weiboList = res.data.weiboTopList;
                    }).catch(err =>{
                        console.log(err);
                    })
            }
        }
    }
</script>

<css>

</css>
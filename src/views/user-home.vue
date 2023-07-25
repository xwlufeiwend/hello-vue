<template>
    <div>
        <p>日期：{{nowdate}}</p>
        <p>今天天气：{{tq}}--------{{wd}}</p>
        <p>{{humidness}}</p>
        <p>{{weather.kqzl}}</p>
        <p>你好{{username}},我今年{{age}}</p>
        <p>{{message}}</p>
        <van-button @click="getInfo()" type="success" round >请求信息</van-button>
        <button @click="getInfo()">请求信息</button>
        <button @click="to2()">第二页</button>
        <button @click="getWeiBoList()">获取热搜</button>
        <!-- <button @click="getWeather()">获取天气</button> -->

        <ol>
            <li v-for="(value, index) in weiboList" :key="index" style="margin-top:10px;">
                <span style="margin-right:15px">{{index + 1}}</span><a :href="'https://s.weibo.com/'+value.href" target="_blank">{{value.topName}}-----{{value.rank}}</a>
            </li>
        </ol>
    </div>
</template>

<script>
import axios from 'axios';
import {Button} from 'vant';
    export default {
        components:{
            [Button.name]:Button
        },
        data(){
            return {
                username: 'xiongwei',
                age: 24,
                userId: '1002xw',
                message: '',
                weiboList:{},
                status: false,
                weather: {},
                nowdate: "",
                wd:"",
                tq:"",
                humidness:''
            }
        },
        created(){
            console.log('???');
            this.getWeather();
        },
        methods:{
            //请求后台天气接口 获取天气信息
            getWeather: function(){
                let date = new Date();
                //拼接日期字符串
                let dateStr = date.getFullYear() + '-' + ((date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1):(date.getMonth() + 1)) + '-' + (date.getDate() < 10 ? '0' + date.getDate():date.getDate());
                // this.weather = dateStr;
                console.log('getDate', dateStr);
                axios.get('/weather',{
                    params: {
                        dateStr
                    }
                }).then(res => {
                    console.log(res.data.weather);
                    let weather = JSON.parse(res.data.weather);
                    this.weather = res.data.weather;
                    this.nowdate = weather.week;
                    this.wd = weather.nowTemperature;
                    this.tq = weather.tq;
                    this.humidness = weather.shidu.humidness;
                    console.log('weather', weather);
                }).catch(err => {
                    console.log(err);
                })

            },
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
                axios.get('/index',{
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
                axios.get('/list').then(res => {
                    console.log(res.data);
                    this.weiboList = res.data.weiboList;
                    // this.weiboList = JSON.parse(res.data.weiboTopList).weiBoList;  
                    // this.weiboList = res.data.weiboTopList.weiBoList;
                }).catch(err =>{
                        console.log(err);
                    })
            }
        }
    }
</script>

<css>

</css>
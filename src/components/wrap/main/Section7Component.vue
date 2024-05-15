<template>
  <div id="sec7-com">
    <h2>연관 컨텐츠</h2>
    <div class="container">
      <div class="content-box" v-for="item,idx in sec7data" :key="idx">
        <div class="img-box">
          <img :src="item.img" alt="">
        </div>
        <div class="title-box">
          <strong>{{item.title}}</strong>
        </div>
        <div class="text-box">
          <p>
            {{item.pText}}
          </p>
          <span class="text">자세히 보기</span><span> ></span>
        </div>
      </div>
    </div>

  </div>  
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return{
      sec7data:[]
    }
  },
  created(){
        axios({
            url : './data/mainSec7.json',
            method:"GET"
        }).then((res)=>{
            console.log(res.data);
            console.log("연결 성공");
            this.sec7data = res.data.sec7data;
        }).catch((err)=>{
            console.log(err);
            console.log("연결 실패");
        })
    },
}
</script>

<style lang="scss" scoped>

  #sec7-com{
    width:100%;
    height:790px;
    h2{
      text-align: center;
      padding-top: 110px;
      font-size: 32px;
      font-weight: 600;
    }
    .container{
      width: 100%;
      padding: 40px 140px 40px 100px;
      display: flex;
      justify-content: space-between;
      .content-box{
        width:560px;
        height:460px;
        padding-left: 30px;
        .img-box{
          width:100px;
          img{
            width:520px;
            height: 330px;
          }
        }
        .title-box{
          margin-top:25px;
          strong{
            font-size: 18px;
            font-weight: 600;
          }
        }
        .text-box{
          margin-top:20px;
          p{
            font-size: 16px;
            font-weight: 200;
            padding-bottom: 20px;
          }
          span{
            display: inline-block;
            font-size: 16px;
            position: relative;
            cursor: pointer;
            border-bottom: 1px solid #000000;
            &.text::after {
              display:block;
              content: "";
              position: absolute;
              left: 0;
              bottom: -10px;
              width: 0px;
              height: 1px;
              margin: 5px 0 0;
              transition: all 0.2s ease-in-out;
              transition-duration: 0.3s;
              opacity: 0;
              background-color: #000000;
            }
            &span.text:hover::after {
              width: 100%;
              opacity: 1;
            }
          }
          
          
        }
      }

    }
  }
</style>
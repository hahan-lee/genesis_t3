<template>
  <div id="sec1-com">
    <div class="img-container"> 
      <div class="img-contants">
        <ul class="img-wrap">
          <li class="img-box img1" v-for="item,idx in sec1Img" :key="idx" :style='{ backgroundImage: `url(${item.backimg})` }'>
            <div class="line-box">
              <span></span>
              <span></span>
            </div>
          </li>
        </ul>
        <div class="title-container">
          <ul class="title-wrap">
            <li class="title-box" v-for="item,idx in sec1Img" :key="idx">
              <div class="title-box">
                <span>GENESIS</span>
                <h2>{{item.title}}</h2>
                <span>{{ item.date }}</span>
              </div>
              <div class="sub-box">
                <span>{{item.span1}}</span>
                <span>{{item.span2}}</span>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </div>
      <ul class="sec1btn-wrap">
        <li class="sec1btn-box" v-for="item,idx in 9" :key="idx">
          <span :class="['idxBtn', idx===0?'on':'']"></span>
        </li>
        <!-- play stop 클래스 토글기능 -->
        <li class="stop-play-btn play">
        </li>
      </ul>
  </div>
</template>

<script>
import $ from 'jquery';
import axios from 'axios';

export default {
  name:"Section1Component",
  data(){
    return{
      sec1Img:[]
    }
  },
  methods:{
    onClickBtn(idx){
      console.log(idx);
    },
  },
  created(){
        axios({
            url : './data/mainSec1.json',
            method:"GET"
        }).then((res)=>{
            console.log(res.data);
            console.log("연결 성공");
            this.sec1Img = res.data.sec1Img;
        }).catch((err)=>{
            console.log(err);
            console.log("연결 실패");
        })
    },
  mounted(){
    let cnt = 0;
    let setId = 0;
    // 0 ( 1 2 3 4 5 6 7 8 9 ) 10 ,width 1100%
    function mainSlide(){ 
      $('.img-wrap').stop().animate({left:`${-100*cnt}%`},600,
      function(){
        if(cnt>8){ cnt = 0;}
        if(cnt<0){ cnt = 8;}
        $('.img-wrap').stop().animate({left:`${-100*cnt}%`},0);
      });
      $('.idxBtn').removeClass('on');
      $('.idxBtn').eq(cnt>8?0:cnt).addClass('on');

    }

    function mainText(){
      $('.title-wrap').stop().animate({left:`${-100*cnt}%`},600,function(){
        if(cnt>8){ cnt = 0;}
        if(cnt<0){ cnt = 8;}
        $('.title-wrap').stop().animate({left:`${-100*cnt}%`},0);
      });
      
    }

    $('.idxBtn').each(function(idx){
      $(this).on({
        click(){

          clearInterval(setId);
          cnt=idx;
          
          mainSlide();   
          mainText();
          autoTimer();
        }
      })
    })


    function nextCount(){
      cnt += 1;
      mainSlide();  
      mainText();
    }


    function autoTimer(){
      setId = setInterval(nextCount, 6000);
    }
    autoTimer();

    $('.stop-play-btn').on({
      click(){
        if($(this).hasClass('stop')){ // 플레이
          $(this).removeClass('stop');
          $(this).addClass('play');
          autoTimer();

        }
        else{
          $(this).removeClass('play'); // 정지
          $(this).addClass('stop');
          clearInterval(setId);
        }
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  #sec1-com{
    width: 100%;
    height: 900px;
    position: relative;
    .img-container{
      width: 100%;
      .img-contants{
        width: 100%;
        position: relative;
        >ul.img-wrap{
          position: relative;
          width: 1100%;
          margin-left: -100%;
          display: flex;
          >li.img-box{
            width: 100%;
            height: 900px;
            background: url() no-repeat 50% 50%;
            .line-box{
              margin-top : 430px;
              left : 0px;
              span{
                display: block;
                content: '';
                background-color: #fff;
                width:370px;
                height: 4px;
                margin-bottom:65px;
              }
            }
          }

        }
        div.title-container{
          position: absolute;
          top:80px;
          left:360px;
          ul.title-wrap{
            position: relative;
            width: 1100%;
            margin-left: -100%;
            display: flex;
            li.title-box{
              width: 100%;
              
              .title-box{
                color:#fff;
                span{
                  font-size: 20px;
                }
                h2{
                  font-size: 80px;
                  font-weight: 200;
                  line-height: 85px;
                  padding-bottom: 10px;
                }
              }
              .sub-box{
                margin-top:480px;
                margin-left:-70px;
                color:#fff;
                span{
                  margin-left: 70px;
                  font-weight: 600;
                }
              }
            }
        }
        }
      }
    }
    ul.sec1btn-wrap{
      position: absolute;
      z-index: 4;
      top:750px;
      left:45%;
      display: flex;
      li{
        cursor: pointer;
        width: 30px;
        >span{
          display: inline-block;
          content:'';
          width: 8px;
          height: 8px;
          background: #c2c2c2;
          border:3px solid transparent;
          border-radius: 15px;
          cursor: pointer;
          &.on{
              border:2px solid #ffffff;
              width: 10px;
              height: 10px;
          }
        }
      }
      li.stop{
        display: inline-block;
        content: '';
        width: 10px;
        height: 10px;
        border-right: 6px solid #c2c2c2;
        border-left: 6px solid transparent;
        border-top: 6px solid #c2c2c2;
        border-bottom: 6px solid transparent;
        border-radius: 1px;
        transform: rotate(45deg);
        margin-left: 10px;
        margin-top:8px;
      }
      li.play::before{
        display: inline-block;
        content: '';
        width: 2px;
        height: 13px;
        background-color: #c2c2c2;
        margin-top:7px;
        margin-left: 15px;
      }
      li.play::after{
        display: inline-block;
        content: '';
        width: 2px;
        height: 13px;
        background-color: #c2c2c2;
        margin-top:7px;
        margin-left: 6px;
      }


    
    }

    
    
  }
</style>
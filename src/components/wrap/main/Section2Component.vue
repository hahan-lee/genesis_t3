<template>
  <div id="sec2-com">
    <div class="container">
      <div class="title" @mouseleave="isOnClickClose">
        <h2>OUR MODELS</h2>
        <span>역동적이면서도 우아한 디자인과 최첨단 기술을 탑재한 제네시스 브랜드의 라인업을 살펴보세요.</span>
        <p @mouseenter="isOnClick" >{{menuName}}</p>
        <div class="menu-box" v-show="isOn">
          <ul>
            <li @click.prevent="alltextClick"><span>ALL</span></li>
            <li @click.prevent="blacktextClick"><span>BLACK</span></li>
            <li @click.prevent="sedantextClick"><span>SEDAN</span></li>
            <li @click.prevent="suvtextClick"><span>SUV</span></li>
          </ul>
        </div>
      </div>
      <div class="model-container">
        <div class="model-swiper-box">
          <div class="model-img-box slideAll" v-show="imgAllShow">
              <ul class="sec2slide">
                  <li v-for="item,idx in sec2img" :key="idx">
                      <div class="model-box">
                          <div class="title-box">
                              <div class="car-name">
                                  <span>{{item.name}}</span>
                                  <img :src="item.img" alt="">
                              </div>
                              <span>{{item.spanT}}</span>
                          </div>
                          <div class="img-box">
                              <img :src="item.carImg" alt="">
                          </div>
                          <div class="button-box">
                              <button>{{ item.text }}</button>
                          </div>
                      </div>
                  </li>
              </ul>
              <ul class="sec2btn-wrap">
                  <li class="sec2btn-box" v-for="item,idx in 10" :key="idx">
                    <span :class="['idxBtnSec2', idx===0?'on':'']"></span>
                  </li>
              </ul>
          </div>
          <div class="model-img-box slideBlack" v-show="imgBlackShow">
              <ul class="sec2slide">
                  <li v-for="item,idx in sec2imgBlack" :key="idx">
                      <div class="model-box">
                          <div class="title-box">
                              <div class="car-name">
                                  <span>{{item.name}}</span>
                                  <img :src="item.img" alt="">
                              </div>
                              <span>{{item.spanT}}</span>
                          </div>
                          <div class="img-box">
                              <img :src="item.carImg" alt="">
                          </div>
                          <div class="button-box">
                              <button>{{ item.text }}</button>
                          </div>
                      </div>
                  </li>
              </ul>
          </div>
          <div class="model-img-box slideSedan" v-show="imgSedanShow">
              <ul class="sec2slide">
                  <li v-for="item,idx in sec2imgSedan" :key="idx">
                      <div class="model-box">
                          <div class="title-box">
                              <div class="car-name">
                                  <span>{{item.name}}</span>
                                  <img :src="item.img" alt="">
                              </div>
                              <span>{{item.spanT}}</span>
                          </div>
                          <div class="img-box">
                              <img :src="item.carImg" alt="">
                          </div>
                          <div class="button-box">
                              <button>{{ item.text }}</button>
                          </div>
                      </div>
                  </li>
              </ul>
              <ul class="sec2btn-wrap">
                  <li class="sec2btn-box" v-for="item,idx in 4" :key="idx">
                    <span :class="['idxBtnSec2 sedanbtn', idx===0?'on':'']"></span>
                  </li>
              </ul>
          </div>
          <div class="model-img-box slideSuv" v-show="imgSuvShow">
              <ul class="sec2slide">
                  <li v-for="item,idx in sec2imgSuv" :key="idx">
                      <div class="model-box">
                          <div class="title-box">
                              <div class="car-name">
                                  <span>{{item.name}}</span>
                                  <img :src="item.img" alt="">
                              </div>
                              <span>{{item.spanT}}</span>
                          </div>
                          <div class="img-box">
                              <img :src="item.carImg" alt="">
                          </div>
                          <div class="button-box">
                              <button>{{ item.text }}</button>
                          </div>
                      </div>
                  </li>
              </ul>
              <ul class="sec2btn-wrap">
                  <li class="sec2btn-box" v-for="item,idx in 3" :key="idx">
                    <span :class="['idxBtnSec2 suvbtn', idx===0?'on':'']"></span>
                  </li>
              </ul>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import $ from 'jquery';
import axios from 'axios';

export default {
  name:"Section2Component",
    data(){
      return{
        menuName : 'ALL',
        sec2img : [],
        sec2imgBlack : [],
        sec2imgSedan : [],
        sec2imgSuv : [],
        isOn : false,
        imgAllShow : true,
        imgBlackShow : false,
        imgSedanShow : false,
        imgSuvShow : false
      }
    },
    methods:{
      isOnClick(){
        this.isOn = true;
      },
      isOnClickClose(){
        this.isOn = false;
      },
      alltextClick(){
        this.imgAllShow = true;
        this.imgBlackShow = false;
        this.imgSedanShow = false;
        this.imgSuvShow = false;
        this.menuName = 'ALL';
      },
      blacktextClick(){
        this.imgAllShow = false;
        this.imgBlackShow = true;
        this.imgSedanShow = false;
        this.imgSuvShow = false;
        this.menuName = 'BLACK';
      },
      sedantextClick(){
        this.imgAllShow = false;
        this.imgBlackShow = false;
        this.imgSedanShow = true;
        this.imgSuvShow = false;
        this.menuName = 'SEDAN';
      },
      suvtextClick(){
        this.imgAllShow = false;
        this.imgBlackShow = false;
        this.imgSedanShow = false;
        this.imgSuvShow = true;
        this.menuName = 'SUV';
      }
    },
    created(){
        axios({
            url : './data/mainSec2.json',
            method:"GET"
        }).then((res)=>{
            console.log(res.data);
            console.log("연결 성공sec2");
            this.sec2img = res.data.sec2img;
            this.sec2imgBlack = res.data.sec2imgBlack;
            this.sec2imgSedan = res.data.sec2imgSedan;
            this.sec2imgSuv = res.data.sec2imgSuv;
        }).catch((err)=>{
            console.log(err);
            console.log("연결 실패");
        })
    },
    mounted(){

      function mainSlide(idx) {
        $('.sec2slide').stop().animate({left:`${-490*idx}px`},600,);
        $('.idxBtnSec2').removeClass('on');
        $('.idxBtnSec2').eq(idx>9?0:idx).addClass('on');

      }


      // 버튼 클릭시 해당 이미지로 이동
      $('.idxBtnSec2').each(function (idx) {
        // console.log('idx값 확인', idx)
        $('.idxBtnSec2').eq(idx).on({
          click() {
            console.log(idx);
            mainSlide(idx);
          }
        })
      });
      // 버튼 클릭시 해당 이미지로 이동 sedanbtn
      $('.sedanbtn').each(function (idx) {
        // console.log('idx값 확인', idx)
        $('.sedanbtn').eq(idx).on({
          click() {
            console.log(idx);
            mainSlide(idx);
          }
        })
      });
      // 버튼 클릭시 해당 이미지로 이동 suvbtn
      $('.suvbtn').each(function (idx) {
        // console.log('idx값 확인', idx)
        $('.suvbtn').eq(idx).on({
          click() {
            console.log(idx);
            mainSlide(idx);
          }
        })
      });



    }


}
</script>

<style lang="scss" scoped>
  #sec2-com{
    width:100%;
    height:1000px;
    background: #111111;
    display: flex;
    align-items: center;
    justify-content: center;
    position:relative;
    .container{
      width:1580px;
      height:1000px;
      .title{
        width:100%;
        margin-top: 180px;
        padding-left:198px;
        position: relative;
        h2{
          font-size: 40px;
          font-weight: 400;
          padding-bottom: 20px;
          color: #fff;
        }
        span{
          padding-bottom: 30px;
          color: #fff;
          font-size: 16px;
        }
        p{
          display: block;
          color: #fff;
          font-size: 20px;
          width: 300px;
          padding: 30px 0 10px 10px;
          border-bottom: 2px solid #fff;
          cursor: pointer;
        }
        div{
          position: absolute;
          z-index: 3;
          ul{
            width:300px;
            background: #111111;
            li{
              width:100%;
              border-top:1px solid #444444;
              color:#444444;
              cursor: pointer;
              span{
                display: block;
                font-weight: 500;
                font-size: 17px;
                color:#444444;
                padding:18px 30px;
                &:hover{
                color:#fff;
                }
              }
            }
          }
        }
      }
      .model-container{
        width: 960px;
        height: 600px;
        padding-top: 100px;
        .model-swiper-box{
            width:100%;
            height: 100%;
            .model-img-box{
                width:1500px;
                height: 100%;
                margin-left:158px;
                overflow: hidden;
                position:relative;
                ul.sec2slide{
                  position: relative;
                  width:1500px;
                  height: 400px;
                  display: flex;
                 
                  li{
                    margin-left:40px;
                    width: 500px;
                    height: 100%;
                    .model-box{
                      background: #151515;
                      width: 450px;
                      height: 400px;
                      padding: 20px 30px;
                      display: flex;
                      flex-flow:column;
                      transition: all 0.5s;
                      &:hover{
                        background-color: #272727;
                      }
                      .title-box{
                        width:100%;
                        height: 60px;
                          div.car-name{
                              width: 390px;
                              position: relative;
                              span{
                                  font-size: 27px;
                                  font-weight: 400;
                                  color:#bbbbbb;
                              }
                              img{
                                  position:absolute;
                                  right:0px;
                                  top:10px;
                                  width:40px;
                                  height: 20px;
                              }
                          }
                          >span{
                          font-size: 15px;
                          font-weight: 400;
                          color:#bbbbbb;
                          }
                      }
                      .img-box{
                          width:390px;
                          height: 200px;
                          padding:45px 0;
                          img{
                            width:390px;
                            height: 150px;
                          }
                      }
                      .button-box{
                          width:390px;
                          padding-top:35px;
                          
                          button{
                              width:100%;
                              height: 50px;
                              font-size: 14px;
                              border:1.5px solid #fff;
                              background: #111;
                              color:#fff
                          }
                      }
                    }
                  }
                }
                ul.sec2btn-wrap{
                  height:30px;
                  position: absolute;
                  z-index: 4;
                  top:430px;
                  left:41%;
                  display: flex;
                  li{
                    width:30px;
                    cursor: pointer;
                    text-align: center;
                    margin:0;
                    >span{
                      display: block;
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


                
                }
            }               

        }
      }
    }


  }



  .slideBlack{
    >ul{
      margin-left:450px;
    }
  }
  .slideSedan{
    >ul.sec2btn-wrap{
      margin-left:80px;
    }
  }
  .slideSuv{
    >ul.sec2btn-wrap{
      margin-left:100px;
    }
  }
</style>
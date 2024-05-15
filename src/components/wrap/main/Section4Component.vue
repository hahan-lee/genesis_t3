<template>
<div id="sec4-com">
  <div class="bg-container sec4-bg">
    <div class="container">
      <div class="title">
        <h2>THE AWARDS</h2>
      </div>
      <div class="content">
        <div class="slide-box">
          <ul class="sec4slide-wrap">
            <li>
              <img class="img1" src="./img/sec4img1.jpg" alt="">
              <div class="content-inner">
                <h4>카즈닷컴 어워드 2024</h4>
                <h2>제네시스 ELECTRIFIED GV70, 美 카즈닷컴<br>
                    '2024 최고의 고급차' 수상
                </h2>
                <p>GV70 전동화 모델은 우아한 외관과 잘 정돈된 실내, 인상적인 주행성능을 갖춘 전기차로 인정받으며 최고의 고급차 부문을 수상했습니다. 이로써 제네시스는 지난해 G90에 이어 2년 연속 최고의 고급차에 이름을 올렸습니다.</p>
                <span>차량 알아보기</span>
              </div>
            </li>
            <li>
              <img class="img2" src="./img/sec4img2.jpg" alt="">
              <div class="content-inner">
                <h4>카즈닷컴 어워드 2023</h4>
                <h2>제네시스 X 컨버터블, '올해의 콘셉트카'로 선정
                </h2>
                <p>‘오토 앤드 디자인’에서 주최하는 ‘카 디자인 어워드 2023’에서 ‘올해의 콘셉트카’로 선정되며 디자인 우수성을 인정받았습니다. </p>
                <img src="./img/awrd2.png" alt="">
                <span>차량 알아보기</span>
              </div>
            </li>
            <li>
              <img class="img3" src="./img/sec4img3.jpg" alt="">
              <div class="content-inner">
                <h4>레드닷 어워드 2023</h4>
                <h2>G90, 수송 디자인 분야 본상</h2>
                <p>세계적인 디자인 상 '레드 닷 어워드'에서 '역동적인 우아함'이라는 제네시스 디자인 정체성이 반영된 품격있는 외관으로 본상을 받았습니다.</p>
                <img src="./img/awrd3.png" alt="">
                <span>차량 알아보기</span>
              </div>
            </li>
            <li>
              <img class="img4" src="./img/sec4img4.jpg" alt="">
              <div class="content-inner">
                <h4>2023 모터트렌드 올해의 차®</h4>
                <h2>제네시스 G90, 모터트렌드 올해의 차® 선정 (미국 사양 기준)</h2>
                <p>세계적으로 권위 있는 자동차 전문지 모터드렌드의 6가지 항목 평가에서 G90가 '2023년 올해의 차(미국 사양 기준)'에 선정되었습니다.</p>
                <span>차량 알아보기</span>
              </div>
            </li>
            <li>
              <img class="img5" src="./img/sec4img5.jpg" alt="">
              <div class="content-inner">
                <h4>레드닷 어워드 2022</h4>
                <h2>제네시스, ‘2022 레드 닷 어워드’에서 4개 부문 수상</h2>
                <p>제네시스가 독일 노르트하인 베스트팔린 디자인센터가 주관하는 ‘2022 레드 닷 어워드’에서 총 4개의 디자인상을 수상하였습니다.</p>
                <img src="./img/awrd5.png" alt="">
                <span>차량 알아보기</span>
              </div>
            </li>
            <li>
              <img class="img6" src="./img/sec4img6.jpg" alt="">
              <div class="content-inner">
                <h4>제이디파워 2022</h4>
                <h2>J.D. POWER 신차품질조사 프리미엄 브랜드 1위 달성</h2>
                <p>2017년 이후 6년 동안 꾸준히 프리미엄 브랜드 최상위권을 유지한 제네시스가 ‘2022년 신차품질조사’에서 1위를 달성했습니다.</p>
                <img src="./img/awrd6.png" alt="">
                <span>차량 알아보기</span>
              </div>
            </li>
            <li>
              <img class="img7" src="./img/sec4img7.jpg" alt="">
              <div class="content-inner">
                <h4>2022 IIHS 톱 세이프티 픽 플러스</h4>
                <h2>美 IIHS 충돌 평가서 최고 안전한 럭셔리 브랜드로 등극</h2>
                <p>미국 고속도로 안전보험협회(IIHS)가 발표한 충돌 평가에서 제네시스 전 차종이 ‘TSP+ 등급’을 획득했습니다.</p>
                <img src="./img/awrd7.png" alt="">
                <span>차량 알아보기</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <ul class="sec2btn-wrap">
          <li class="sec2btn-box" v-for="item,idx in 7" :key="idx">
            <span :class="['idxBtnSec4', idx===0?'on':'']"></span>
          </li>
          <!-- play stop 클래스 토글기능 -->
          <li class="stop-play-btn play">
          </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import $ from 'jquery';

export default {
  name:"Section4Component",
  data(){
    return{
      containerImg:[
        {}
      ]
    }
  },  
  mounted(){
    let cnt = 0;
    let setId = 0;

    // const bgImg = $(".sec4-bg").css({
    //     "background-image":"linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(./img/sec4img2.jpg)", "background-repeat":"no-repeat","background-position":"50% 50%"});
    


    
    
    
    // 660px + padding 70 70 => 140 + 660 = 800 , 7장
    function mainSlide(){
      $('.sec4slide-wrap').stop().animate({left:`${-800*cnt}px`},600,
      function(){
        if(cnt>6){ cnt = 0;}
        if(cnt<0){ cnt = 6;}
        $('.sec4slide-wrap').stop().animate({left:`${-800*cnt}px`},0);
      });


      $('.idxBtnSec4').removeClass('on');
      $('.idxBtnSec4').eq(cnt>6?0:cnt).addClass('on');
    }

    function bgslide(){
      $(".sec4-bg").css({
         "background-image":`linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(./img/sec4img${cnt+1}.jpg)` 
        });
      if(cnt>6){ 
        cnt = 0;
        $(".sec4-bg").css({
         "background-image":`linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(./img/sec4img${cnt+1}.jpg)`});
      }
    }

    $('.idxBtnSec4').each(function(idx){
      $(this).on({
        click(){
          console.log(idx);
          clearInterval(setId);
          cnt=idx;
          mainSlide();
          bgslide();
          autoTimer();
        }
      })
    })


    function nextCount(){
      cnt += 1;
      mainSlide();
      bgslide();
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
    });




  }





}
</script>

<style lang="scss" scoped>
  .blur {
    -webkit-backdrop-filter: blur(50px);
    backdrop-filter: blur(50px);
  }

  // 뒷배경 bg 삽입 
  div.bg-container{
    width:100%;
    height:1000px;
    background: no-repeat 50% 50%;
    background-image: linear-gradient(
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ), url(./img/sec4img1.jpg);
    background-size: cover;
  }

  #sec4-com{
    width:100%;
    height:1200px;
    background: #111111;
    position: relative;
    .container{
      width:100%;
      height:1000px;
      // 뒷배경 blur처리 
      -webkit-backdrop-filter: blur(5px);
      backdrop-filter: blur(5px);
      .title{
        padding: 53px 0 50px 240px;
        h2{
          font-size:36px;
          color:#fff;
          font-weight: 400;
        }
      }
      .content{
        width:100%;
        margin-left:calc(100% - 50% - 400px);
        .slide-box{
          width:100%;
          ul{
            position: relative;
            display: flex;
            width:5600px;
            height: 730px;
            //background: #c75b5b;
            
            li{
              width: 800px;
              padding: 0 70px;
              height: auto;
              img{
                width:660px;
                height:400px;
              }
              div{
                position:relative;
                color:#fff;
                width: 100%;
                height:330px;
                padding:40px;
                background: #111111;
                h4{
                  font-weight: 200;
                  font-size: 17px;
                  padding-bottom: 10px;
                }
                h2{
                  font-weight: 400;
                  font-size: 20px;
                  padding-bottom: 20px;
                }
                p{
                  width:100%;
                  font-size: 14px;
                  line-height: 25px;
                  height: 90px;
                }
                >img{
                  width:auto;
                  height: 70px;
                }
                >span{
                  position: absolute;
                  top:260px;
                  right:50px;
                  font-size: 14px;
                  padding-bottom: 5px;
                  border-bottom: 1px solid #fff;
                }
              }
            }
          }
        }
      }
      ul.sec2btn-wrap{
        height:30px;
        position: absolute;
        z-index: 4;
        top:900px;
        left:41%;
        display: flex;
        li{
          padding: 0 5px;
          cursor: pointer;
          text-align: center;
          >span{
            margin-top:11px;
            padding: 0 5px;
            display: block;
            content:'';
            width: 30px;
            height: 3px;
            background: rgba(192, 192, 192, 0.5);
            cursor: pointer;
            &.on{
              background: rgba(255, 255, 255, 1);
            }
          }
        }
        li.stop{
          display: inline-block;
          content: '';
          padding:0;
          width: 14px;
          height: 14px;
          border-right: 7px solid #ffffff;
          border-left: 7px solid transparent;
          border-top: 7px solid #ffffff;
          border-bottom: 7px solid transparent;
          transform: rotate(45deg);
          //margin-left: 10px;
          margin-top:6px;
        }
        li.play::before{
          display: inline-block;
          content: '';
          width: 3px;
          height: 13px;
          background-color: #ffffff;
          margin-left: 15px;
        }
        li.play::after{
          display: inline-block;
          content: '';
          width: 3px;
          height: 13px;
          background-color: #ffffff;
          margin-top: 6px;
          margin-left: 6px;
        }
      
      }    
    
    }




  }
</style>
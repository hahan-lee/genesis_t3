<template>
  <div id="sec3-com">
    <div class="container">
      <div class="icon-box">
        <div>
          <img class="cost" src="./img/Build-And-Price_black_60x60.gif" alt="견적 내기" data-animated="/img/Build-And-Price_black_60x60.gif" >
          <span>견적 내기</span>
        </div>

        <div>
          <img class="buy" src="./img/Price_black_60x60_hover.gif" alt="구매 상담 신청" data-animated="./img/Price_black_60x60_hover.gif">
          <span>구매 상담 신청</span>
        </div>
        <div>
          <img class="oncar" src="./img/Book-a-Test-Drive_black_60x60.gif" alt="시승 신청" data-animated="./img/Book-a-Test-Drive_black_60x60.gif">
          <span>시승 신청</span>
        </div>
        <div>
          <img class="catalog" src="./img/Download-E-Brochure_black_60x60.gif" alt="카탈로그" data-animated="./img/Download-E-Brochure_black_60x60.gif">
          <span>카탈로그</span>
        </div>
      </div>

    </div>

  </div>  
</template>

<script>
import $ from 'jquery';

export default {
  name:"Section3Component",
  data(){
    return{
    }
  },
  mounted(){
    
    //이미지 마우스 오버 시 다시 재생되도록 함. 
    $('.cost').mouseover(function() {
      $(this).attr("src", $(this).data("animated"))
    });
    // 마우스 아웃 시 멈춤이미지로 변경 (여기서는 사용안함)
    //$('.cost').mouseout(function() {
    //  $(this).attr("src", $(this).data("static"))
    //});

    $('.buy').mouseover(function() {
      $(this).attr("src", $(this).data("animated"))
    });


    $('.oncar').mouseover(function() {
      $(this).attr("src", $(this).data("animated"))
    });


    $('.catalog').mouseover(function() {
      $(this).attr("src", $(this).data("animated"))
    })



  }
}
</script>

<style lang="scss" scoped>
  #sec3-com{
    width:100%;
    height:530px;
    background: #111111;
    div{
      width:100%;
      height: 100%;
      padding-left:50px;
      div.icon-box{
        width:100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        div{
          width:300px;
          height: 200px;
          img{
            display: block;
            width:60px;
            height: 60px;
            margin-left: 10px;
          }
          span{
            display: block;
            padding:30px 0;
            font-size:18px;
            color:#fff;
          }
          &:nth-child(2)>img{
              margin-left: 30px;
            }
        }

      }
    }
  
  }
</style>
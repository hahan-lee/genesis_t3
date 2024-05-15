<template>
  <div id="sec5-com">
    <div class="container">
      <div class="left">
        <h2>스페이스</h2>
        <p>제네시스의 디자인과 고유한 감각을 반영한 현대적 공간으로 여러분을 초대합니다. 제네시스에 관한 다양한 체험으로 당신만의 제네시스를 찾는 여정을 지원합니다.</p>
        <span>자세히보기</span> >
      </div>
      <div class="right">
        <h2>로드트립</h2>
        <p>제네시스와 내셔널지오그래픽 트래블러와 함께하는 서사적 여행, 제네시스 로드트립을 통해 자세한 정보를 확인하세요.</p>
        <span>자세히보기</span> >
      </div>
    </div>
  </div>   
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  #sec5-com{
    width:100%;
    height:770px;
    background: #111111;
    .container{
      display: flex;
      div{
        width:9400px;
        height: 530px;
        padding: 51px 360px 51px 60px;
        background:  url() no-repeat 50% 50% ;
        color: #fff;
        h2{
          font-size: 40px;
          font-weight: 200;
          opacity: 1;
        }
        p{
          font-size: 16px;
          font-weight: 400;
          padding: 20px 0;
          line-height: 27px;
        }
        span{
          border-bottom: 1px solid #fff;
        }
      }
      .left{
        background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./img/sec5img1.jpg);
      }
      .right{
        margin-left: 40px;
        background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./img/sec5img2.jpg);
      }
    }
  }
</style>
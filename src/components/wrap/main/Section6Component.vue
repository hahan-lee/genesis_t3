<template>
  <div id="sec6-com">
    <div class="container">
      <div class="main-img">
        <div class="text-box">
          <h2>GENESIS EVENTS</h2>
          <span>제네시스에서 진행중인 다양한 이벤트를 소개합니다.</span>
        </div>
        <div class="btn-box">
          <a class="login" href="./login.jsp">이벤트 보기</a>
        </div>
      </div>	
    </div>
  </div>  
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  #sec6-com{
    width:100%;
    height:1080px;
    background: #111111;
    padding: 0 0 240px 0;
    .container {
      width: 100%;
      height: 100%;
      .main-img {
        width: 100%;
        height: 100%;
        background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(./img/sec6img.jpg) no-repeat 50% 50%;
        padding: 100px 120px 200px 120px;
        display: flex;
        justify-content: center;
        flex-flow: column;

        .text-box {
          width: 100%;
          h2 {
            font-size: 60px;
            font-weight: 200;
            color: #fff;
          }
          span {
            display: block;
            font-size:25px;
            color: #fff;
            margin-top: 50px;
          }
        }
        .btn-box {
          padding-top:50px;
          width: 100%;
          a {
            display: inline-block;
            border: 1px solid #aaa;
            width: 240px;
            height: 50px;
            text-align: center;
            font-size: 16px;
            font-weight: 400;
            padding: 12px 0;
            color: #ffffff;
          }
        }
      }
    }
  


    
  }
</style>
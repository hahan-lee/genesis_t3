<template>
  <footer id="footer">
    <div class="container">
      <div class="top">
        <div class="left">
          <span>Share</span>
          <a href="#">
            <span class="icon" data-icon="svg-facebook" data-load="true">
              <svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 48 48"><path d="M22,36H26.5V25.5H31V21H26.5V18a1.43,1.43,0,0,1,1.33-1.5H31V12H27.25A5.32,5.32,0,0,0,22,17.25V21H19v4.5h3Z"></path></svg>
            </span>
          </a>
          <a href="#">
            <span class="icon" data-icon="svg-facebook">
              <svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 48 48"><path d="M22,36H26.5V25.5H31V21H26.5V18a1.43,1.43,0,0,1,1.33-1.5H31V12H27.25A5.32,5.32,0,0,0,22,17.25V21H19v4.5h3Z"></path></svg>
            </span>
          </a>
          <a href="#">
            <span class="icon" data-icon="svg-facebook">
              <svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 48 48"><path d="M22,36H26.5V25.5H31V21H26.5V18a1.43,1.43,0,0,1,1.33-1.5H31V12H27.25A5.32,5.32,0,0,0,22,17.25V21H19v4.5h3Z"></path></svg>
            </span>
          </a>
        </div>
        <div class="right">
          <span class="go-top-btn">Top</span>
          <span class="go-top-arrow"></span>
        </div>
      </div>
      <div class="mid1">
        <div class="notice">
          <ul class="notice-wrap">
            <li>제네시스 공지사항</li>
            <li>제네시스 공지사항</li>
            <li>제네시스 공지사항</li>
            <li>제네시스 공지사항</li>
          </ul>
        </div>
        <div class="notice-btn">
          <ul>
            <li class="left-btn">
            </li>
            <!-- play stop 클래스 토글기능 -->
            <li class="stop-play-btn play">
            </li>
            <li class="right-btn">
            </li>
          </ul>
        </div>
      </div>
      <div class="mid2 menulist">
        <div>
          <ul class="model">
            <h4>모델</h4>
            <li v-for="item,idx in sub1" :key="idx"><a href="#">{{item.h4title}}</a></li>
          </ul>
          <ul class="model">
            <h4>구매</h4>
            <li v-for="item,idx in sub2" :key="idx"><a href="#">{{item.h4title}}</a></li>
          </ul>
          <ul class="model">
            <h4>체험</h4>
            <li v-for="item,idx in sub3" :key="idx"><a href="#">{{item.h4title}}</a></li>
          </ul>
          <ul class="model">
            <h4>멤버스</h4>
            <li v-for="item,idx in sub4" :key="idx"><a href="#">{{item.h4title}}</a></li>
          </ul>
          <ul class="model">
            <h4>제네시스</h4>
            <li v-for="item,idx in sub5" :key="idx"><a href="#">{{item.h4title}}</a></li>
          </ul>
          <ul class="model">
            <h4>고객센터</h4>
            <li v-for="item,idx in sub6" :key="idx"><a href="#">{{item.h4title}}</a></li>
          </ul>
          <ul class="model">
            <h4>마이페이지</h4>
            <li></li>
          </ul>
        </div>
      </div>
      <div class="mid3">
        <div class="mid3-left">
          <ul>
            <li v-for="item,idx in 1" :key="idx">
              <span>사이트맵</span>
              <i>|</i>
            </li>
          </ul>
        </div>
        <div class="mid3-right">
          <a href="#"><img src="" alt="페이스북"></a>
          <a href="#"><img src="" alt="인스타그랩"></a>
          <a href="#"><img src="" alt="유튜브"></a>
        </div>
      </div>
      <div class="mid4">
        <div class="mid4-left">
          <ul>
            <li v-for="item,idx in 1" :key="idx">
              <span>사이트맵</span>
            </li>
          </ul>
        </div>
        <div class="mid4-right">
          <a href="#">
            <span class="facebook">
              <svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 48 48"><path d="M22,36H26.5V25.5H31V21H26.5V18a1.43,1.43,0,0,1,1.33-1.5H31V12H27.25A5.32,5.32,0,0,0,22,17.25V21H19v4.5h3Z"/></svg>
            </span>
          </a>
          <a href="#">
            <span class="insta">
              <svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 48 48"><circle cx="24" cy="24" r="4"/><path d="M35.93 19.05a9.27 9.27 0 0 0-.56-2.9 6.1 6.1 0 0 0-3.51-3.51 8.5 8.5 0 0 0-2.86-.56C27.67 12 27.26 12 24 12s-3.67 0-4.95.08a8.53 8.53 0 0 0-2.91.55A5.86 5.86 0 0 0 14 14a6 6 0 0 0-1.39 2.11 8.89 8.89 0 0 0-.55 2.89C12 20.3 12 20.7 12 24s0 3.66.08 4.95a8.72 8.72 0 0 0 .55 2.9A5.81 5.81 0 0 0 14 34a6.15 6.15 0 0 0 2.12 1.39A9.1 9.1 0 0 0 19 36c1.28.06 1.68.07 5 .07s3.7-.07 5-.07a9.1 9.1 0 0 0 2.92-.55A5.93 5.93 0 0 0 34 34a6 6 0 0 0 1.39-2.13 9.13 9.13 0 0 0 .55-2.87c.06-1.34.06-1.74.06-5s0-3.66-.07-4.95zM24 30.16A6.16 6.16 0 1 1 30.16 24 6.16 6.16 0 0 1 24 30.16zM30.41 19a1.44 1.44 0 1 1 1.44-1.44A1.43 1.43 0 0 1 30.41 19z"/></svg>
            </span>
          </a>
        </div>      
      </div>
      <div class="bottom">
        <div class="logo">
          <div class="logo">
            <img :src="logoImg" alt="">
            <span>© Copyright 2024 Hyundai Motor Company.</span>
            <span>All Rights Reserved.</span>
          </div>
        </div>

      </div>
    </div>
  </footer>
</template>

<script>
import axios from 'axios';

export default {
  name:"FooterComponent",
  data(){
    return{
      logoImg:"./img/logo.png",
      sub1:[],
      sub2:[],
      sub3:[],
      sub4:[],
      sub5:[],
      sub6:[],

    }
  },
  created(){
      axios({
          url : './data/headerMainModel.json',
          method:"GET"
      }).then((res)=>{
          console.log(res.data);
          console.log("연결 성공");
          this.sub1 = res.data.sub1;
          this.sub2 = res.data.sub2;
          this.sub3 = res.data.sub3;
          this.sub4 = res.data.sub4;
          this.sub5 = res.data.sub5;
          this.sub6 = res.data.sub6;
      }).catch((err)=>{
          console.log(err);
          console.log("연결 실패");
      })
  },  
}
</script>

<style lang="scss" scoped>
#footer{
  width: 100%;
  background: #111;
  .container{
    width:100%;
    color:#bbbbbb;
    .top{
      padding: 0 120px;
      width:100%;
      height: 59px;
      border-bottom:1px solid #333;
      display: flex;
      justify-content: space-between;
      padding-top: 10px;
      .left{
        width: 1200px;
        >span{
          width:50px;
          font-size:15px;
          color:#fff;
        }
        a{
          span.icon{
            svg{
              width:40px;
              height:40px;
            }
          }
        }
      }
      .right{
        cursor: pointer;
        position:relative;
        padding-top: 5px;
        span.go-top-btn{
          color:#fff;
          margin-right:20px;
        }
        span.go-top-arrow{
          display: block;
          content: '';
          position: absolute;
          right:0;
          top:18px;
          width: 10px;
          height: 10px;
          border-right: 3px solid #ffffff;
          border-left: 3px solid transparent;
          border-top: 3px solid #ffffff;
          border-bottom: 3px solid transparent;
          transform: rotate(315deg);
        }
      }
    }
    .mid1{
      padding: 0 120px;
      display: flex;
      width:100%;
      height: 80px;
      border-bottom:1px solid #333;
      justify-content: space-between;
      .notice{
        overflow: hidden;
        ul.notice-wrap{
          position:relative;
          width:100%;
          height:400px;
          li{
            padding-top: 25px;
            width:800px;
            height:80px;
            color:#fff;
          }
        }
      }
      .notice-btn{
        ul{
          display: flex;
          padding-top :25px;
          li{
            margin-left:20px;
          }
          li.left-btn{
            display: inline-block;
            content: '';
            width: 12px;
            height: 12px;
            border-right: 3px solid #ffffff;
            border-left: 3px solid transparent;
            border-top: 3px solid #ffffff;
            border-bottom: 3px solid transparent;
            transform: rotate(225deg);
            margin-top:6px;
          }
          li.right-btn{
            display: inline-block;
            content: '';
            width: 12px;
            height: 12px;
            border-right: 3px solid #ffffff;
            border-left: 3px solid transparent;
            border-top: 3px solid #ffffff;
            border-bottom: 3px solid transparent;
            transform: rotate(45deg);
            margin-top:6px;
          }
          li.stop{
            display: inline-block;
            content: '';
            padding:0;
            width: 12px;
            height: 12px;
            border-right: 6px solid #ffffff;
            border-left: 6px solid transparent;
            border-top: 6px solid #ffffff;
            border-bottom: 6px solid transparent;
            transform: rotate(45deg);
            margin-top:6px;
          }
          li.play::before{
            display: inline-block;
            content: '';
            width: 3px;
            height: 13px;
            background-color: #ffffff;
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
    .mid2{
      padding: 100px 120px 100px 120px;
      width:100%;
      border-bottom:1px solid #333;
      div{
        width:1700px;
        display: flex;
        flex-flow: wrap;
        ul{
          width:25%;
          padding:0 0 30px 0;
          h4{
              padding-top: 5px;
              color:#f0f0f0;
              font-size:17px;
              padding-bottom: 16px;
          }
          li{
              padding: 7px 0;
              a{
                  font-size: 15px;
                  font-weight: 400;
                  color: #bbb;
                  transition: all 0.4s;
                  &:hover{
                      color: #f0f0f0;
                  }
              }
          }
        }
      }
    }
    .mid3{
      display: none;
      padding: 0 120px;
      display: flex;
      width:100%;
      height: 90px;
      border-bottom:1px solid #333;
    }
    .mid4{
      display: none;
      padding: 0 120px;
      display: flex;
      width:100%;
      height: 103px;
      border-bottom:1px solid #333;
    }
    width:100%;
    .bottom{
      widows: 100%;
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      .logo{
          width: 500px;
          display: flex;
          flex-flow: column;
          align-items: center;
          img{
            width: 130px;
            height: 26px;
            margin: 30px;
          }
          span{
            display:block;
            color: #fff;
            font-size:13px;
          }
        }

    }
  }
}




</style>
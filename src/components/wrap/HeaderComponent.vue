<template>
  <div id="header">
    <div class="container">
      <div class="left">
        <div class="content">
          <div class="logo">
            <a href="./index.html"><img :src="logoImg" alt=""></a>
          </div>
          <div class="main-menu">
            <ul class="menu-wrap">
              <li class="menu">
                <a href="#" @click.prevent="onClickMenu1">{{menu1}}</a>
              </li>
              <li>
                <a href="#" @click.prevent="onClickMenu2">{{menu2}}</a>
              </li>
              <li>
                <a href="#" @click.prevent="onClickMenu3">{{menu3}}</a>
              </li>
              <li>
                <a href="#" @click.prevent="onClickMenu4">{{menu4}}</a>
              </li>
              <li>
                <a href="#" @click="onClickMenu5">{{menu5}}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="container">
          <span>고객센터</span>
          <span>마이페이지</span>
          <button class="search"><img :src="searchImg" alt=""></button>
          <li></li>
          <button class="rightMenu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"HeaderComponent",
  data(){
    return{
      logoImg:"./img/logo.png",
      searchImg:"./img/search.png",
      isOnModel: false,
    }
  },
  computed :{
    menu1(){
      return this.$store.getters.getMenu1
    },
    menu2(){
      return this.$store.getters.getMenu2
    },
    menu3(){
      return this.$store.getters.getMenu3
    },
    menu4(){
      return this.$store.getters.getMenu4
    },
    menu5(){
      return this.$store.getters.getMenu5
    },
  },
  methods :{
    onClickMenu1(){
      this.$store.dispatch('acMenuPopup1')
    },
    onClickMenu2(){
      this.$store.dispatch('acMenuPopup2')
    },
    onClickMenu3(){
      this.$store.dispatch('acMenuPopup3')
    },
    onClickMenu4(){
      this.$store.dispatch('acMenuPopup4')
    },
    onClickMenu5(){
      this.$store.dispatch('acMenuPopup5')
    },
  },
  // created :{},
}
</script>

<style lang="scss" scoped>

 .hide{
  display: none;
 }
 #header{
  position: fixed;
  z-index: 4;
  width: 100%;
  background: #111;
  border-bottom:1px solid #242424 ;
  .container{
    font-weight: 600;
    width: 1630px;
    height: 70px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left{
      width: 600px;
      .content{
        width:100%;
        display: flex;
        .logo{
          width: 140px;
          margin-right:20px;
          padding-left:10px;
          a{
            width: 100%;
            height: 100%;
            img{
              width: 130px;
              height: 26px;
            }
          }
        }
        ul{
          width:560px;
          display: flex;
          justify-content: center;
          align-items: center;
          li{
            padding: 0 30px;
            a{
              font-size: 15px;
              color: #BBBBBB;
            }
          }
        }
      }
    }
    .right{
      width: 300px;
      .container{
        width:100%;
        span{
          font-size: 15px;
          color: #BBBBBB;
          padding-right: 15px;
          cursor: pointer;
        }
        button{
          width: 30px;
          height: 30px;
          background: transparent;
          border: none;
          display: flex;
          flex-flow: column;
          justify-content: center;
          cursor: pointer;
          img{
            width: 22px;
            height: 22px;

          }
          span{
            display: inline-block;
            content:'';
            width:20px;
            height:2px;
            background: #f0f0f0;
            margin: 1px 0 3px 9px ;
            &:nth-child(2){
              background: #111111;
            }
          }
        }
        li{
          display: inline-block;
          content:'';
          width:1px;
          height:20px;
          background: #BBBBBB;
        }
      }
    
    }
  }
 }

</style>
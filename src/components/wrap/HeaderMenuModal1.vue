<template>
    <div id="header-main-menu-model">
            <div class="sub sub1" v-show="isOn1">
                <transition name="modal1">
                    <div class="subcontainer">
                        <div class="modelnav">
                            <ul class="nav-wrap">
                                <h2>{{menu1}}</h2>
                                <li @click="onClickMAll" ><a :class="{on:isOnAll}" href="#" >{{Menu1sub1}}</a></li>
                                <li @click="onClickMBlack"><a  :class="{on:isOnBlack}" href="#" >{{Menu1sub2}}</a></li>
                                <li @click="onClickMSedan"><a :class="{on:isOnSedan}" href="#" >{{Menu1sub3}}</a></li>
                                <li @click="onClickMSuv"><a :class="{on:isOnSuv}" href="#" >{{Menu1sub4}}</a></li>
                            </ul>
                        </div>
                        <div class="model-container">
                            <div class="model-swiper-box all-menu" v-show="isOnAll">
                                <div class="model-img-box">
                                    <ul class="wrap1" v-show="isOnWrap1">
                                        <li v-for="item,idx in allModelFist" :key="idx">
                                            <div class="model-box">
                                                <div class="title">
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
                                                <span class="howmuch">
                                                    <a href="#">{{item.howmuch}}<span></span>
                                                    </a>
                                                </span>
                                                <span class="onthecar">
                                                    <a href="#">{{item.oncar}}
                                                    </a>
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul class="wrap2" v-show="isOnWrap2">
                                        <li v-for="item,idx in allModelSecond" :key="idx">
                                            <div class="model-box">
                                                <div class="title">
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
                                                <span class="howmuch">
                                                    <a href="#">{{item.howmuch}}<span></span>
                                                    </a>
                                                </span>
                                                <span class="onthecar">
                                                    <a href="#">{{item.oncar}}
                                                    </a>
                                                </span>
                                            </div>                                
                                        </li>
                                    </ul>
                                    <ul class="slide-btn">
                                        <li><span :class="{on:isOnCircleL}" @click="onClickCircLbtn"></span></li>
                                        <li><span :class="{on:isOnCircleR}" @click="onClickCircRbtn"></span></li>
                                    </ul>
                                </div>
                                <div class="btn-box left">
                                    <span class="left-btn" v-show="isOnLeftBtn" @click="onClickLeftbtn"></span>
                                </div>
                                <div class="btn-box right">
                                    <span class="right-btn" v-show="isOnRightBtn"
                                    @click="onClickRightbtn"></span>
                                </div>
                            </div>
                            <div class="model-swiper-box black-menu" v-show="isOnBlack">
                                <div class="model-img-box">
                                    <ul class="wrap1">
                                        <li v-for="item,idx in blackModel" :key="idx">
                                            <div class="model-box">
                                                <div class="title">
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
                                                <span class="howmuch">
                                                    <a href="#">{{item.howmuch}}<span></span>
                                                    </a>
                                                </span>
                                                <span class="onthecar">
                                                    <a href="#">{{item.oncar}}
                                                    </a>
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="model-swiper-box sedan-menu" v-show="isOnSedan">
                                <div class="model-img-box">
                                    <ul class="wrap1">
                                        <li v-for="item,idx in sedanModel" :key="idx">
                                            <div class="model-box">
                                                <div class="title">
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
                                                <span class="howmuch">
                                                    <a href="#">{{item.howmuch}}<span></span>
                                                    </a>
                                                </span>
                                                <span class="onthecar">
                                                    <a href="#">{{item.oncar}}
                                                    </a>
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="model-swiper-box suv-menu" v-show="isOnSuv">
                                <div class="model-img-box">
                                    <ul class="wrap1">
                                        <li v-for="item,idx in suvModel" :key="idx">
                                            <div class="model-box">
                                                <div class="title">
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
                                                <span class="howmuch">
                                                    <a href="#">{{item.howmuch}}<span></span>
                                                    </a>
                                                </span>
                                                <span class="onthecar">
                                                    <a href="#">{{item.oncar}}
                                                    </a>
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
            <div class="sub sub-any sub2" v-show="isOn2">
                <div class="subcontainer">
                    <div class="modelnav">
                        <ul class="nav-wrap">
                            <h2>{{menu2}}</h2>
                            <li><a href="#" >{{ Menu2Text }}</a></li>
                        </ul>
                    </div>
                    <div class="model-container">
                        <div class="list-box">
                            <div v-for="item,idx in sub2" :key="idx">
                                <ul>
                                    <h4>{{item.h4title}}</h4>
                                    <li v-for="item2,idx in item.atext" :key="idx"><a href="#">{{item2}}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="under-container">
                    <div class="info-btn">
                        <div>
                            <a href="#">시승신청 > </a>
                            <span></span>
                        </div>
                        <div>
                            <a href="#">전시장 찾기 > </a>
                        </div>
                        <div>
                            <a href="#">멤버십 소개 > </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sub sub-any sub3" v-show="isOn3">
                <div class="subcontainer">
                    <div class="modelnav">
                        <ul class="nav-wrap">
                            <h2>{{menu3}}</h2>
                            <li><a href="#" >{{Menu3Text}}</a></li>
                        </ul>
                    </div>
                    <div class="model-container">
                        <div class="list-box">
                            <div v-for="item,idx in sub3" :key="idx">
                                <ul>
                                    <h4>{{item.h4title}}</h4>
                                    <li v-for="item2,idx in item.atext" :key="idx"><a href="#">{{item2}}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="under-container">
                    <div class="info-btn">
                        <div>
                            <a href="#">견적 내기 > </a>
                            <span></span>
                        </div>
                        <div>
                            <a href="#">구매 상담 신청 > </a>
                        </div>
                        <div>
                            <a href="#">서비스 네트워크 찾기 > </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sub sub-any sub4" v-show="isOn4" >
                <div class="subcontainer">
                    <div class="modelnav">
                        <ul class="nav-wrap">
                            <h2>{{menu4}}</h2>
                            <li><a href="#" >{{ Menu4Text }}</a></li>
                        </ul>
                    </div>
                    <div class="model-container">
                        <div class="list-box">
                            <div v-for="item,idx in sub4" :key="idx">
                                <ul>
                                    <h4>{{item.h4title}}</h4>
                                    <li v-for="item2,idx in item.atext" :key="idx"><a href="#">{{item2}}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="under-container">
                    <div class="info-btn">
                        <div>
                            <a href="#">고객센터 > </a>
                            <span></span>
                        </div>
                        <div>
                            <a href="#">제네시스 부티크 > </a>
                        </div>
                        <div>
                            <a href="#">네비게이션 업데이트 > </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sub sub-any sub5" v-show="isOn5">
                <div class="subcontainer">
                    <div class="modelnav">
                        <ul class="nav-wrap">
                            <h2>{{menu5}}</h2>
                            <li><a href="#" >{{ Menu5Text }}</a></li>
                        </ul>
                    </div>
                    <div class="model-container">
                        <div class="list-box">
                            <div v-for="item,idx in sub5" :key="idx">
                                <ul>
                                    <h4>{{item.h4title}}</h4>
                                    <li v-for="item2,idx in item.atext" :key="idx"><a href="#">{{item2}}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="under-container">
                    <div class="info-btn">
                        <div>
                            <a href="#">제네시스 스페이스 > </a>
                            <span></span>
                        </div>
                        <div>
                            <a href="#">제네시스 뉴스룸 > </a>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>


<script>
import axios from 'axios';

export default {
    name:"HeaderMenuModal1",
    data(){
        return{
            Menu1sub1:'ALL',
            Menu1sub2:'BLACK',
            Menu1sub3:'SEDAN',
            Menu1sub4:'SUV',
            Menu2Text:'당신만의 제네시스를 찾아가는 여정을 지원합니다.',
            Menu3Text:'제네시스가 담아 낸 브랜드의 이상과 가치를 미리 경험할 수 있습니다.',
            Menu4Text:'제네시스를 선택한 순간 당신의 일상은 특별해집니다.',
            Menu5Text:'높은 품격과 안목을 가진 사람들을 위한 최상의 자동차와 서비스를 만들어 내고자 합니다.',
            allModelFist:[],
            allModelSecond:[],
            blackModel:[],
            sedanModel:[],
            suvModel:[],
            sub2:[],
            sub3:[],
            sub4:[],
            sub5:[],
            isOnCircleL:true,
            isOnCircleR:false,
            isOnWrap1:true,
            isOnWrap2:false,
            isOnLeftBtn:false,
            isOnRightBtn:true,
            isOnAll:true,
            isOnBlack:false,
            isOnSedan:false,
            isOnSuv:false,
        }
    },
    computed: {
        isOn1(){
            return this.$store.getters.getMenuPopup1
        },
        isOn2(){
            return this.$store.getters.getMenuPopup2
        },
        isOn3(){
            return this.$store.getters.getMenuPopup3
        },
        isOn4(){
            return this.$store.getters.getMenuPopup4
        },
        isOn5(){
            return this.$store.getters.getMenuPopup5
        },
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
    methods:{
        onClickLeftbtn(){
            this.isOnWrap1 = true;
            this.isOnWrap2 = false;
            this.isOnLeftBtn = false;
            this.isOnRightBtn = true;
            this.isOnCircleL = true;
            this.isOnCircleR = false;
        },
        onClickRightbtn(){
            this.isOnWrap1 = false;
            this.isOnWrap2 = true;
            this.isOnLeftBtn = true;
            this.isOnRightBtn = false;
            this.isOnCircleL = false;
            this.isOnCircleR = true;
        },
        onClickCircLbtn(){
            this.isOnWrap1 = true;
            this.isOnWrap2 = false;
            this.isOnLeftBtn = false;
            this.isOnRightBtn = true;
            this.isOnCircleL = true;
            this.isOnCircleR = false;
        },
        onClickCircRbtn(){
            this.isOnWrap1 = false;
            this.isOnWrap2 = true;
            this.isOnLeftBtn = true;
            this.isOnRightBtn = false;
            this.isOnCircleL = false;
            this.isOnCircleR = true;
        },
        onClickMAll(){
            this.isOnAll=true;
            this.isOnBlack=false;
            this.isOnSedan=false;
            this.isOnSuv=false;
        },
        onClickMBlack(){
            this.isOnAll=false;
            this.isOnBlack=true;
            this.isOnSedan=false;
            this.isOnSuv=false;
        },
        onClickMSedan(){
            this.isOnAll=false;
            this.isOnBlack=false;
            this.isOnSedan=true;
            this.isOnSuv=false;
        },
        onClickMSuv(){
            this.isOnAll=false;
            this.isOnBlack=false;
            this.isOnSedan=false;
            this.isOnSuv=true;
        },

    },
    created(){
        axios({
            url : './data/headerMainModel.json',
            method:"GET"
        }).then((res)=>{
            console.log(res.data);
            console.log("연결 성공");
            this.allModelFist = res.data.allModelFist;
            this.allModelSecond = res.data.allModelSecond;
            this.blackModel = res.data.blackModel;
            this.sedanModel = res.data.sedanModel;
            this.suvModel = res.data.suvModel;
            this.sub2 = res.data.sub2;
            this.sub3 = res.data.sub3;
            this.sub4 = res.data.sub4;
            this.sub5 = res.data.sub5;
        }).catch((err)=>{
            console.log(err);
            console.log("연결 실패");
        })
    },

}
</script>

<style lang="scss" scoped>


    #header-main-menu-model{
        position:fixed;
        z-index: 4;
        top: 71px;
        left: 0;
        width: 100%;
        .sub{
            width: 100%;
            height: 1000px;
            background: #111111;
            display: flex;
            justify-content: center;
            .subcontainer{
                width:1700px;
                display: flex;
                .modelnav{
                    width: 260px;
                    padding-left: 25px;
                    ul{
                    width: 100%;
                    height: 90%;
                    display: flex;
                    flex-flow: column;
                    margin-top:50px;
                    border-right: 1px solid #313131;
                    h2{
                        width: 100%;
                        text-align: left;
                        color:#f0f0f0;
                        padding:40px 20px;
                        font-size:20px;
                        font-weight: 400;
                    }
                    li{
                        width: 100%;
                        padding: 12px 20px;
                        a{
                        width: 100%;
                        text-align: left;
                        font-size:19px;
                        font-weight: 600;
                        color:#bbb;
                        &:hover{
                            color:#ffffff;
                        }
                        &.on{
                            color:#ffffff;
                        }
                        }
                    }
                    }
                }
                .model-container{
                    width: 1500px;
                    height: 100%;
                    .model-swiper-box{
                        width:100%;
                        height: 100%;
                        position: relative;
                        .btn-box{
                            position: absolute;
                            z-index: 5;
                            &.left{
                                left:15px;
                                top:400px;
                            }
                            &.right{
                                right:70px;
                                top:400px;
                            }
                            span{
                                &:hover{
                                    cursor: pointer;
                                }
                                display: block;
                                content:'';
                                width: 40px;
                                height: 40px;
                                border-top: 3px solid #fff;
                                border-right: 3px solid #fff;
                                border-bottom: 3px solid #fff;
                                border-left: 3px solid #fff;
                                transform: rotate(45deg);
                                &.left-btn{
                                    border-top: 3px solid transparent;
                                    border-right: 3px solid transparent;
                                }
                                &.right-btn{
                                    border-bottom: 3px solid transparent;
                                    border-left: 3px solid transparent;
                                }
                            }
                        }

                        .model-img-box{
                            position: relative;
                            width:100%;
                            height: 100%;
                            ul{
                            width:100%;
                            height: 100%;
                            display: flex;
                            flex-flow: wrap;
                            padding: 100px 0 100px 110px;
                            overflow: hidden;
                                li{
                                    width: 430px;
                                    .model-box{
                                        width:320px;
                                        height: 360px;
                                        padding: 20px 30px;
                                        display: flex;
                                        flex-flow:column;
                                        &:hover{
                                            background-color: #272727;
                                        }
                                        .title{
                                            width:100%;
                                            height: 40px;
                                            div.car-name{
                                                width: 250px;
                                                position:relative;
                                                span{
                                                    font-size: 27px;
                                                    font-weight: 400;
                                                    color:#bbbbbb;
                                                }
                                                img{
                                                    position:absolute;
                                                    right:10px;
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
                                            width:250px;
                                            height: 150px;
                                            padding-top:45px;
                                            img{
                                            width:250px;
                                            height:100px;
                                            }
                                        }
                                        .button-box{
                                            width:250px;
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
                                        span{
                                            margin-top:10px;
                                            width:250px;
                                            height: 20px;
                                            a{
                                                font-size: 14px;
                                                color:#f0f0f0;
                                            }
                                        }
                                    }
                                }
                            }
                            // ul.wrap2{
                            //     position: absolute;
                            //     left:0;
                            //     top:0;
                            //     z-index: 3;
                            //     background: #111;
                            // }
                            ul.slide-btn{
                                position: absolute;
                                left: 675px;
                                top:890px;
                                width: 60px;
                                height: 30px;
                                padding: 0;
                                overflow: visible;
                                display: flex;
                                >li{
                                    width: 50%;
                                    height:100%;
                                    padding:0;
                                    >span{
                                        display: inline-block;
                                        content:'';
                                        width: 10px;
                                        height: 10px;
                                        background: #c2c2c2;
                                        border:3px solid transparent;
                                        border-radius: 15px;
                                        cursor: pointer;
                                        &.on{
                                            border:3px solid #ffffff;
                                            width: 13px;
                                            height: 13px;
                                        }
                                    }
                                }
                            }
                        }               

                    }
                }
            }
        }

        .sub-any{
            display: flex;
            flex-flow: column;
            .subcontainer{
                padding-left:80px;
                display: flex;
                .modelnav{
                    //height: 200px;
                    width:370px;
                    ul{
                        height: 100%;
                        h2{
                            padding: 0 20px;
                            font-weight: 600;
                        }
                        li{
                            width: 80%;
                            a{
                                font-size: 13px;
                                font-weight: 400;
                                color: #bbb;
                                cursor: text;
                                &:hover{
                                    color: #bbb;
                                }
                            }
                        }
                    }
                }
                .model-container{
                    width: 1700px;
                    .list-box{
                        display: flex;
                        width: 100%;
                        div{
                            width: 18%;
                            padding:40px 0 0 30px;
                            ul{
                                h4{
                                    padding-top: 5px;
                                    color:#f0f0f0;
                                    font-size:14px;
                                    padding-bottom: 16px;
                                }
                                li{
                                    padding: 7px 0;
                                    a{
                                        font-size: 13px;
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
                    
                }
            }
            .under-container{
                
                position:relative;
                background: #111111;
                z-index: 4;
                top:10px;
                left:0;
                border-top: 1px solid #313131;;
                .info-btn{
                    margin-left:380px;
                    display: flex;
                    div{    
                        padding: 23px 10px;
                        a{
                            padding-right: 50px;
                            color:#f0f0f0;
                            font-size: 13px;                           
                        }
                    }
                }
            }
        }
        .sub1{

        }
        .sub2{
            height: 250px;
            .under-container{
                top:15px;
            }
        }
        .sub3{
            height:360px;
            .under-container{
                top:15px;
            }
        }
        .sub4{
            height:500px;
            .under-container{
                top:34px;
            }
        }
        .sub5{
            height:665px;
            .under-container{
                top:17px;
            }
        }
        

    }
</style>

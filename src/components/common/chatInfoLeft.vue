<template>
  <section class="chatInfo">
    <div class="chatInfoContainer">
      <div class="leftAvatar">
        <img :src="imgSrc" alt="">
      </div>
      <section class="rightContainer">
        <div class="nickname">
          <span>{{nickname}}</span>
        </div>
        <div class="rightMessage">
          <p class="content">{{content}}</p>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
export default {
	data () {
		return {

		}
	},

	props: ['nickname', 'content', 'imgSrc']
}
</script>

<style scoped>
  @import '../../style/mixin';

  .chatInfo{
    display: flex;
    width: 100%;
    .chatInfoContainer{
      display: flex;
      flex-direction: row;
      justify-content: cneter;
      align-items: center;
      padding: 0 1rem;
      .leftAvatar{
        @mixin wh 2.2rem, 2.2rem;
        display: flex;
        align-self: flex-start;
        padding-top: .8rem;
        img{
          @mixin wh 2.2rem, 2.2rem;
          border-radius: 50%;

        }
      }
      .rightContainer{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 13.8rem;
        margin-left: .25rem;
        .nickname{
          span{
            font-size: .6rem;
            color: #434a54;
            padding: .3rem 0;
          }
        }
        .rightMessage{
          display: flex;
          align-items: center;
          margin-left: .7rem;
          ::after {
            content: '';
            position: absolute;
            top: 0;
            left: -.4rem;
            width: .3rem;
            height: .3rem;
            border-width: 0 0 .4rem .4rem;
            border-style: solid;
            border-bottom-color: inherit;   /*自动继承父元素的border-bottom-color*/
            border-left-color: transparent;
            border-radius: 0 0 1rem 0;
            transform: rotateY(180deg)
          }
          .content{
            display: flex;
            align-items: center;
            background-color: #ffffff;
            border-bottom-color:#ffffff;
            position: relative;
            box-sizing: border-box;
            max-width: 12.7rem;
            font-size: .65rem;
            color: #434a54;
            font-family: Arial;
            font-weight: 500;
            line-height: .9rem;
            max-width: 12.7rem;
            padding: .3rem .6rem .3rem .6rem;
            word-break:break-all;
            word-wrap:break-word;
            border-radius: .3rem;
            box-shadow: .15rem .15rem .5rem #888888;
          }
        }
      }
    }
  }
</style>
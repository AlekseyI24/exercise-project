<div class="bounce" >
    <div class="bounce1"></div>
    <div class="bounce2"></div>
    <div class="bounce3"></div>
</div>

<style lang="scss" type="text/scss">
    .bounce {
        margin-bottom: 0px;
        margin: 24px;
        width: 78px;
        text-align: center;
        padding-bottom: 24px;
    }

    .bounce > div {
        width: 18px;
        height: 18px;
        background-color: gray;
        border-radius: 100%;
        display: inline-block;
        -webkit-animation: sk-bouncedelay 1.6s infinite ease-in-out both;
        animation: sk-bouncedelay 1.6s infinite ease-in-out both;
    }

    .bounce .bounce1 {
        -webkit-animation-delay: -.32s;
        animation-delay: -.32s
    }

    .bounce .bounce2 {
        -webkit-animation-delay: -.16s;
        animation-delay: -.16s
    }

    @-webkit-keyframes sk-bouncedelay {
        0%,100%,80% {
            -webkit-transform: scale(0)
        }

        40% {
            -webkit-transform: scale(1)
        }
    }

    @keyframes sk-bouncedelay {
        0%,100%,80% {
            -webkit-transform: scale(0);
            transform: scale(0)
        }

        40% {
            -webkit-transform: scale(1);
            transform: scale(1)
        }
    }
</style>
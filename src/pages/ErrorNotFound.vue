<template>
    <div class="application">
        <div class="error-screen">
            <div class="error-block">
                <h1>404</h1>
                <div class="error-text">Cтраница не найдена...</div>
                <a href="/" class="button second">На главную</a>
                <img src="/images/404.png" alt="404">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .error-screen {
        width: 100vw;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
    }
    .error-block {
        width: 100%;
        background: #eee;
        border-radius: 10px;
        padding: 20px 0 0;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        h1 {
            font-size: 6rem;
            line-height: 5rem;
            background: linear-gradient(45deg, #0B2349 33%, #0D61BC 66%, #8AA9D6);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 20px;
        }
        .error-text {
            font-size: 18px;
            margin-bottom: 25px;
        }
        .button {
            margin-bottom: -10px;
            position: relative;
            z-index: 99;
        }
        img {
            width: 100%;
        }
    }
    
</style>  

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ErrorNotFound'
});
</script>

<template>
  <div class="loading-overlay">
    <div class="loading-spinner"></div>
  </div>
</template>

<script>
export default {
  name: "theLoading",
};
</script>

<style scoped>
.loading-overlay {
  position: absolute; /* cobre apenas o container pai (por exemplo, main) */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.5); /* fundo semi-transparente */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.loading-spinner {
  width: 20vmin; /* 20% da tela (viewport minimum dimension) */
  height: 20vmin;
  border: 15px solid #3C3E42;
  border-top: 15px solid #FF1430; /* cor um pouco mais escura para o efeito */
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

/* animação do giro */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

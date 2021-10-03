<template>
  <div id="draw" v-if="numbers">
    <section
      v-for="(ball, index) in numbers"
      :key="`${index}-${ball}`"
      class="stage"
    >
      <figure class="ball">
        <span
          class="number"
          :data-number="ball"
        >&nbsp;</span>
      </figure>
    </section>
    <section class="stage plus">&boxvh;</section>
    <section
      v-for="(ball, index) in euroNumbers"
      :key="`${index}-${ball}`"
      class="stage"
    >
      <figure class="euro ball">
        <span
          class="number"
          :data-number="ball"
        >&nbsp;</span>
      </figure>
    </section>
  </div>
</template>

<script>
export default {
  name: "AeDraw",
  props: ["numbers", "euroNumbers"],
};
</script>

<style scoped>
#draw {
  font-size: 14px;
}

.stage {
  width: 30px;
  height: 30px;
  display: inline-block;
  margin: 5px 5px 5px 0;
}

.stage.plus {
  text-align: center;
  font-size: 20px;
  position: relative;
  top: -10px;
  margin-left: 5px;
}

.ball {
  display: inline-block;
  width: 100%;
  height: 100%;
  margin: 0;
  border-radius: 50%;
  position: relative;
  border: 2px solid #c4c4c4;
  overflow: hidden;
}

.euro.ball {
  border: 2px solid #c76616;
}

.number {
  position: absolute;
  width: 100%;
  text-align: center;
  line-height: 30px;
  animation: ballRoll 2s ease-out;
}

.number:after {
  content: attr(data-number);
  position: absolute;
  transform: translateX(-64%);
  opacity: 0;
  font-weight: bold;
  animation: numberReveal 0.1s 1.5s reverse forwards;
}

.number:before {
  content: "?";
  position: absolute;
  animation: numberReveal 0.1s 1.5s forwards;
}

@keyframes ballRoll {
  0%,
  20%,
  50% {
    opacity: 1;
    transform: translateY(0) rotateX(0) scale(1);
  }
  10%,
  35%,
  75% {
    transform: translateY(100%) rotateX(170deg) scale(0.4);
  }
  11%,
  36%,
  76% {
    transform: translateY(-100%) rotateX(-170deg) scale(0.3);
    opacity: 0;
  }
}

@keyframes numberReveal {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.stage:nth-child(2) .ball,
.stage:nth-child(2) .number {
  animation-delay: 0.3s;
}

.stage:nth-child(2) .number:after,
.stage:nth-child(2) .number:before {
  animation-delay: 1.8s;
}

.stage:nth-child(3) .ball,
.stage:nth-child(3) .number {
  animation-delay: 0.6s;
}

.stage:nth-child(3) .number:after,
.stage:nth-child(3) .number:before {
  animation-delay: 2.1s;
}

.stage:nth-child(4) .ball,
.stage:nth-child(4) .number {
  animation-delay: 0.9s;
}

.stage:nth-child(4) .number:after,
.stage:nth-child(4) .number:before {
  animation-delay: 2.4s;
}

.stage:nth-child(5) .ball,
.stage:nth-child(5) .number {
  animation-delay: 1.2s;
}

.stage:nth-child(5) .number:after,
.stage:nth-child(5) .number:before {
  animation-delay: 2.7s;
}

.stage:nth-child(7) .ball,
.stage:nth-child(7) .number {
  animation-delay: 1.5s;
}

.stage:nth-child(7) .number:after,
.stage:nth-child(7) .number:before {
  animation-delay: 3s;
}

.stage:nth-child(8) .ball,
.stage:nth-child(8) .number {
  animation-delay: 1.8s;
}

.stage:nth-child(8) .number:after,
.stage:nth-child(8) .number:before {
  animation-delay: 3.3s;
}
</style>

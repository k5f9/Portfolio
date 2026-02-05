<template>
  <div class="h-screen overflow-hidden ">
    <div class="flex">


      <header class="flex w-full">

        <NuxtLink to="/profile" class="ml-auto 
                  rounded-xl mt-2 mr-2
                  relative overflow-hidden">
          <button
            ref="btn"
            class="prof ml-auto border-2 border-dashed border-black/50
                  rounded-xl mt-2 mr-2
                  relative overflow-hidden"
            @mouseenter="onEnter"
            @mouseleave="onLeave"
            @mousemove="onMove"

            
          >
            <span ref="ripple" class="ripple"></span>

            <img
              src="/icon.png"
              alt="icon"
              class="w-12 h-auto relative z-10"
            >
          </button>
        </NuxtLink>
        <div class="absolute -right-0 w-24 h-24 rounded-full bg-slate-400 blur-3xl -z-10 pointer-events-none"></div>


      </header>




    </div>
    <div class="flex items-center justify-center min-h-screen select-none">

      <div class="absolute top-1/3 left-1/2.7 w-1/2 h-1/2 rounded-full bg-slate-400/15 blur-3xl"></div>




      <div class="absolute bottom-6 text-xs text-black/40">
        Copyright © k5f0 2026  Все права защищены
      </div>



      <div
        class="absolute inset-0 opacity-[0.1] pointer-events-none"
        style="
          background-image: radial-gradient(#000 1px, transparent 1px);
          background-size: 24px 24px;
        "
      ></div>


      <!-- бегущий фон -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="bg-marquee">
          <span>NOT FOUND&nbsp;NOT FOUND&nbsp;NOT FOUND&nbsp;NOT FOUND&nbsp;</span>
        </div>
      </div>


      <div
        class="flex flex-wrap justify-center items-center
              gap-6
              max-w-screen-lg
              text-center
              px-6">

        <div class="word border-2 border-dashed border-black/50 rounded-xl" style="animation-delay: 0s">
          <h1 class="text-6xl font-bold">THIS</h1>
        </div>

        <div class="word border-2 border-dashed border-black/50 rounded-xl" style="animation-delay: .2s">
          <h1 class="text-6xl font-bold">PAGE</h1>
        </div>

        <div class="word border-2 border-dashed border-black/50 rounded-xl" style="animation-delay: .4s">
          <h1 class="text-6xl font-bold">IS</h1>
        </div>

        <div class="word border-2 border-dashed border-black/50 rounded-xl" style="animation-delay: .6s">
          <h1 class="text-6xl font-bold">NOT</h1>
        </div>

        <div class="word border-2 border-dashed border-black/50 rounded-xl" style="animation-delay: .8s">
          <h1 class="text-6xl font-bold">WORKING</h1>
        </div>

      </div>


    </div>
  </div>
  
</template>

<script setup lang="ts">





import { ref } from 'vue'

const btn = ref<HTMLButtonElement | null>(null)
const ripple = ref<HTMLSpanElement | null>(null)

let active = false

const onEnter = (e: MouseEvent) => {
  if (active) return
  active = true

  if (!btn.value || !ripple.value) return

  const rect = btn.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  ripple.value.style.left = `${x}px`
  ripple.value.style.top = `${y}px`

  ripple.value.classList.add('active')
}

const onLeave = () => {
  active = false
  ripple.value?.classList.remove('active')
}

const onMove = (e: MouseEvent) => {
  if (!active || !btn.value || !ripple.value) return

  const rect = btn.value.getBoundingClientRect()
  ripple.value.style.left = `${e.clientX - rect.left}px`
  ripple.value.style.top = `${e.clientY - rect.top}px`
}





</script>

<style scoped>


.ripple {
  position: absolute;
  width: 20px;
  height: 20px;

  background: rgba(100, 116, 139, 0.15); 
  border-radius: 50%;

  transform: translate(-50%, -50%) scale(0);
  transition: transform 1.8s cubic-bezier(.12,.9,.2,1);



  pointer-events: none;
  z-index: 0;
}

.ripple.active {
  transform: translate(-50%, -50%) scale(3);
}



.word {
  padding: 0.75rem 1.5rem;
  background: white;
  border-radius: 1rem;

  animation: float 4s ease-in-out infinite;
  animation-play-state: running;

  transform-origin: center;
  will-change: transform;

  transition:
    transform 0.1s cubic-bezier(.22,1,.36,1),
    box-shadow 0.35s cubic-bezier(.22,1,.36,1);
  
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

.word:hover {
  animation-play-state: paused;
  box-shadow: 0 30px 60px rgba(0,0,0,0.35);
}

.bg-marquee {
  position: absolute;
  top: 50%;
  left: 0;
  width: max-content;

  transform: translateY(-50%);
  white-space: nowrap;

  font-size: 18rem;
  font-weight: 800;
  letter-spacing: -0.05em;

  color: rgba(0, 0, 0, 0.06);

  animation: marquee 40s linear infinite;
}

@keyframes marquee {
  from {
    transform: translate(-50%, -50%);
  }
  to {
    transform: translate(0, -50%);
  }
}


</style>



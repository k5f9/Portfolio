<template>

  <div
    class="min-h-screen flex items-center justify-center relative overflow-hidden transition-colors duration-700"
    :class="`weather-${weatherType}`"
  >
    <canvas
      v-if="weatherType === 'rain' || weatherType === 'storm'"
      ref="rainCanvas"
      class="rain fixed inset-0 pointer-events-none z-0"
    />
    <canvas
      v-if="weatherType === 'snow'"
      ref="snowCanvas"
      class="snow fixed inset-0 pointer-events-none z-0"
    />
    <canvas
      v-if="weatherType === 'fog'"
      ref="fogCanvas"
      class="fog fixed inset-0 pointer-events-none z-0"
    />




    <div
        class="absolute inset-0 opacity-[0.1] pointer-events-none"
        style="
          background-image: radial-gradient(#000 1px, transparent 1px);
          background-size: 24px 24px;
        "
    ></div>
    

    <div class="w-full max-w-5xl px-6
            flex flex-col gap-16
            md:block md:relative">

      <!-- ВЕРХНИЙ БОЛЬШОЙ БЛОК -->
      <div
        class="group
                mx-auto mb-16
                w-full max-w-2xl h-72
                rounded-2xl
                p-8
                relative overflow-visible
                hover:scale-105 
                border border-transparent
              hover:border-black/40
                hover:border-dashed
                hover:bg-sky-700/10
                origin-center
                transition-all ease-out duration-500"
        >
        <h1 class="absolute top-1 right-3 opacity-50 text-sm">~/about.ts</h1>
        <h1 class="text-4xl font-bold mb-4
            static
            md:transform md:-translate-x-32 md:-translate-y-20 md:rotate-[-6deg]
            transition-all duration-700 ease-out
            md:group-hover:translate-x-0
            md:group-hover:translate-y-0
            md:group-hover:rotate-0">

        k5f0
        </h1>




        <div class="group text-black/70 mb-4 max-w-md
          static
          md:transform md:translate-x-20 md:translate-y-16 md:rotate-[2deg]
          transition-all duration-700 ease-out
          md:group-hover:translate-x-0
          md:group-hover:translate-y-0
          md:group-hover:rotate-0">

        <span class="md:group-hover:italic md:group-hover:font-semibold md:group-hover:text-3xl 
          transition-all duration-700 ease-out
          md:group-hover:underline md:group-hover:decoration-dashed md:group-hover:decoration-black/50 md:group-hover:underline-offset-4 md:group-hover:decoration-2"
        >Frontend </span> 
        <span>and litle bit </span> 
        <span class="md:group-hover:italic md:group-hover:font-semibold md:group-hover:text-3xl transition-all duration-700 ease-out
          md:group-hover:underline md:group-hover:decoration-dashed md:group-hover:decoration-black/50 md:group-hover:underline-offset-4 md:group-hover:decoration-2"
        >Backend </span> 
        <span>developer.</span>
      </div>




        <div class="flex flex-wrap gap-3 mb-6 font-semibold">

            <span class="border border-dashed border-black/40 rounded-md px-3 py-1 text-xs
             static
             md:transform md:-translate-x-24 md:rotate-[-12deg]
             transition-all duration-700 delay-75
             md:group-hover:translate-x-0 md:group-hover:rotate-0
             bg-green-700/20">Vue</span>

            <span
                class="border border-dashed border-black/40 rounded-md px-3 py-1 text-xs
                    static
                    md:transform md:-translate-y-20 md:rotate-[8deg]
                    transition-all duration-700 delay-100
                    md:group-hover:translate-y-0 md:group-hover:rotate-0
                    bg-red-400/20"
            >Nuxt.js</span>

            <span
            class="border border-dashed border-black/40 rounded-md px-3 py-1 text-xs
                    static
                    md:transform md:translate-x-32 md:-translate-y-20 md:rotate-[10deg]
                    transition-all duration-700 ease-out
                    md:group-hover:transform-none
                    bg-cyan-500/20"
            >
            TypeScript
            </span>


        </div>




        <a
        href="https://github.com/k5f9"
        target="_blank"
        class="inline-block
                border border-dashed border-black/40
                rounded-lg px-4 py-2 text-sm
                md:transform md:translate-y-16 md:rotate-[-4deg]
                transition-all duration-700 delay-50
                md:hover:bg-slate-400/20 md:hover:shadow-lg md:hover:shadow-black/10
                md:group-hover:translate-y-0 md:group-hover:rotate-0"
        >
        github
        </a>


        

        <NuxtLink
          to="/"
          class="absolute bottom-6 right-6
                border border-dashed border-black/40
                rounded-lg px-4 py-2 text-sm
                md:transform md:translate-x-12 md:translate-y-20 md:rotate-[6deg]
                transition-all duration-700 ease-out
                md:hover:bg-slate-400/20 md:hover:shadow-lg md:hover:shadow-black/10   
                md:group-hover:transform-none"
        >
          Back
        </NuxtLink>






      </div>


      


      <!-- НИЖНИЕ БЛОКИ -->
      <div class="relative flex justify-center gap-12">

        <!-- левый нижний -->
        <div
          class="relative flex w-96 h-60
                 rounded-2xl
                 items-center
                 border border-transparent
                 hover:scale-105 
                 hover:border-dashed
                 hover:border-black/30
                 hover:bg-slate-300/70 
                 hover:bg-opacity-10
                 transition-all ease-out duration-500"
        >
        <h1 class="absolute top-1 right-3 opacity-50 text-sm">~/discord.ts</h1>
        <img src="/windowsxp.jpg" alt="avatar" class="absolute md:w-16 md:h-16 w-14 h-14 rounded-full active:scale-110 transition-all cursor-grab active:cursor-grabbing border-gray-500 top-8 left-5 opacity-80">
        <h1 class="absolute top-8 left-24 font-semibold md:text-2xl " v-if="status">{{ status.global }}</h1>
        <h1 class="absolute top-16 left-24 text-sm opacity-50" v-if="status">{{ status.username }}</h1>
        <h1 class="absolute top-8 left-72 font-semibold text-2xl md:opacity-100 opacity-0 text-slate-400 italic" v-if="status">{{ status.status }}</h1>
        <h1 class="absolute left-6 bottom-24 italic font-semibold opacity-50">playing now: </h1>
        
        <div v-if="status?.game">
          <h1 class="absolute bottom-10 left-5 text-4xl font-bold opacity-70" v-if="isHOI">{{ status.game }}</h1>
          <h1 class="absolute bottom-10 left-5 text-5xl font-bold opacity-70" v-else>{{ status.game }}</h1>
        </div>
        
        <h1 v-if="status?.game == null" class="absolute bottom-10 left-5 md:text-5xl text-3xl font-bold opacity-70">Nothing...</h1>
      </div>

        <!-- правый нижний -->
        <div
          class="relative flex w-96 h-60
                 
                 rounded-2xl
                 
                 justify-center items-center 
                 transition-all ease-out duration-500
                 border border-transparent
                 hover:scale-105 
                 hover:border-dashed
                 hover:border-black/30
                 hover:bg-slate-300/70 
                 hover:bg-opacity-10
                 origin-center "
        >
        <h1 class="absolute top-1 right-3 opacity-50 text-sm">~/weather.ts</h1>
        <h1 class="absolute top-1 left-3 md:opacity-50 opacity-0 ont-semibold text-black/70">Barnaul, Russia</h1>
        <h1 class="absolute top-16 text-2xl text-slate-400 font-bold" v-if="weather">{{ weather.condition }}</h1>
        <h1 class="absolute font-semibold md:text-8xl text-6xl bottom-5 opacity-70 " v-if="weather">{{ weather.temp }}°C</h1>
        <h1 class="md:text-5xl text-2xl font-bold text-slate-500" v-if="weather==null">Not found</h1>
      </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { useWeather } from '../../composables/useWeather'

const { weather, weatherType } = useWeather()


//RAIN
const rainCanvas = ref<HTMLCanvasElement | null>(null)
import { startRain } from '../../effects/rain'


watch(weatherType, (type) => {
  if (type === 'rain' || type === 'storm') {
    nextTick(() => {
      if (rainCanvas.value) startRain(rainCanvas.value)
    })
  }
})


import { startSnow } from '../../effects/snow'

const snowCanvas = ref<HTMLCanvasElement | null>(null)

watch(weatherType, (val) => {
  if (val === 'snow') {
    nextTick(() => {
      if (snowCanvas.value) {
        startSnow(snowCanvas.value)
      }
    })
  }
})

  

//DISCORD
interface Status {
  status:  string
	game:    string
	username:string
	global:  string
}

const status = ref<Status | null>(null)


onMounted(async () => {
  const baseURL = import.meta.env.NUXT_PUBLIC_API_URL
  status.value = await $fetch(`${baseURL}/discord`)
})

const isHOI = computed(() =>
  status.value?.game?.toLowerCase() === "hearts of iron iv"
)


</script>


<style>
.rain {
  filter: blur(3px);
}

.snow {
  filter: blur(1px);
}


.weather-cloudy {
  background: linear-gradient(
    180deg,
    #858a94,
    #f3f4f6
  );
}

.weather-rain {
  background: linear-gradient(
    180deg,
    #95a3c9,
    #f8fafc
  );
  opacity: 60;
}

.weather-snow {
  background: linear-gradient(
    180deg,
    #f1f5f9,
    #ffffff
  );
}

.weather-fog {
  background: linear-gradient(
    180deg,
    #e5e7eb,
    #ffffff
  );
}




.weather-snow::after {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  background-image:
    radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px);
  background-size: 18px 18px;
  animation: snowMove 12s linear infinite;
  opacity: 0.4;
}

@keyframes snowMove {
  from { background-position: 0 0; }
  to   { background-position: 0 300px; }
}



/* точечный фон */
.dot-bg {
  background-image: radial-gradient(
    rgba(0,0,0,0.15) 1px,
    transparent 1px
  );
  background-size: 18px 18px;
}
</style>

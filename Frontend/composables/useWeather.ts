import { ref, computed, onMounted } from 'vue'


interface Weather {
  condition: string
  temp: number
  type: string
}

export function useWeather() {
  const weather = ref<Weather | null>(null)

  const weatherType = computed(() => weather.value?.type ?? 'default')

  async function fetchWeather() {
    const baseURL = import.meta.env.NUXT_PUBLIC_API_URL
    weather.value = await $fetch(`${baseURL}/weather`)
  }



  onMounted(fetchWeather)

  return {
    weather,
    weatherType
  }
}

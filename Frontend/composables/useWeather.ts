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
    const { public: { apiBase } } = useRuntimeConfig()
    weather.value = await $fetch(`${apiBase}/weather`)
  }




  onMounted(fetchWeather)

  return {
    weather,
    weatherType
  }
}

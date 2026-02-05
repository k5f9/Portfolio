import { computed } from 'vue'

interface Weather {
  condition: string
  temp: number
  type: string
}

export function useWeather() {
  const weather = ref<Weather | null>(null)

  const weatherType = computed(() => {
    return weather.value?.type?.toLowerCase() ?? 'default'
  })

  async function fetchWeather() {
    const { public: { apiBase } } = useRuntimeConfig()
    const data = await $fetch<Weather>(`${apiBase}/weather`)
    console.log('WEATHER RAW:', data)
    weather.value = data // ← вот тут теперь всё ок
  }
  console.log('USE WEATHER INSTANCE')

  return {
    weather,
    weatherType,
    fetchWeather,
  }
}

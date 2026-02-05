import { computed } from 'vue'

interface Weather {
  condition: string
  temp: number
  type: string
}

export function useWeather() {
  const weather = useState<Weather | null>('weather', () => null)

  const weatherType = computed(() => {
    return weather.value?.type?.toLowerCase() ?? 'default'
  })

  async function fetchWeather() {
    const { public: { apiBase } } = useRuntimeConfig()
    const data = await $fetch<Weather>(`${apiBase}/weather`)
    console.log('WEATHER RAW:', data)
    weather.value = data // ← вот тут теперь всё ок
  }

  return {
    weather,
    weatherType,
    fetchWeather,
  }
}

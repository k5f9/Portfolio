import { ref, computed, onMounted } from 'vue'


interface Weather {
  condition: string
  temp: number
  type: string
}

export function useWeather() {
  const weather = useState<any | null>('weather', () => null)

  const weatherType = computed(() => {
    const type = weather.value?.type
    if (!type) return 'default'
    return type.toLowerCase()
  })

  async function fetchWeather() {
    const { public: { apiBase } } = useRuntimeConfig()
    const data = await $fetch(`${apiBase}/weather`)
    console.log('WEATHER RAW:', data)
    weather.value = data
  }

  onMounted(fetchWeather)

  return {
    weather,
    weatherType,
  }
}


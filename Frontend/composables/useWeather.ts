import { ref, computed, onMounted } from 'vue'


interface Weather {
  condition: string
  temp: number
  type: string
}

export function useWeather() {
  const weather = ref<Weather | null>(null)

  type WeatherKind = 'clear' | 'rain' | 'snow' | 'storm' | 'default'

  const weatherType = computed<WeatherKind>(() => {
    if (!weather.value) return 'default'
    return weather.value.type.toLowerCase() as WeatherKind
  })


  async function fetchWeather() {
    const { public: { apiBase } } = useRuntimeConfig()
    const data = await $fetch(`${apiBase}/weather`)
    console.log('WEATHER RAW:', data)
    weather.value = data as any
  }





  onMounted(fetchWeather)

  return {
    weather,
    weatherType
  }
}

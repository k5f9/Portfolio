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
    const res = await fetch('http://localhost:8080/weather')
    weather.value = await res.json()
  }

  onMounted(fetchWeather)

  return {
    weather,
    weatherType
  }
}

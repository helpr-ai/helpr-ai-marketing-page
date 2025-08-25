import { ref, onMounted, onUnmounted } from 'vue'

export const useReveal = () => {
  const createRevealElement = () => {
    const element = ref<HTMLElement>()
    const isVisible = ref(false)

    onMounted(() => {
      if (!element.value) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              isVisible.value = true
              observer.unobserve(entry.target)
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      )

      observer.observe(element.value)

      onUnmounted(() => {
        observer.disconnect()
      })
    })

    return { element, isVisible }
  }

  return { createRevealElement }
}
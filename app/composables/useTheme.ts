// Theme composable for dark/light mode
export const useTheme = () => {
    const colorMode = useState<'light' | 'dark'>('color-mode', () => 'dark')

    const isDark = computed(() => colorMode.value === 'dark')

    const toggleTheme = () => {
        colorMode.value = colorMode.value === 'light' ? 'dark' : 'light'
        updateTheme()
    }

    const setTheme = (theme: 'light' | 'dark') => {
        colorMode.value = theme
        updateTheme()
    }

    const updateTheme = () => {
        if (import.meta.client) {
            if (colorMode.value === 'dark') {
                document.documentElement.classList.add('dark')
                document.documentElement.classList.remove('light')
            } else {
                document.documentElement.classList.add('light')
                document.documentElement.classList.remove('dark')
            }
            localStorage.setItem('theme', colorMode.value)
        }
    }

    const initTheme = () => {
        if (import.meta.client) {
            const saved = localStorage.getItem('theme') as 'light' | 'dark' | null

            if (saved) {
                colorMode.value = saved
            } else {
                // Default to dark mode
                colorMode.value = 'dark'
            }
            updateTheme()
        }
    }

    return {
        colorMode,
        isDark,
        toggleTheme,
        setTheme,
        initTheme
    }
}

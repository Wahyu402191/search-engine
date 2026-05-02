import { useEffect, useState } from 'react'

export function useRoutePath() {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    function handleNavigation(event: MouseEvent) {
      const target = event.target as HTMLElement
      const link = target.closest('a')

      if (!link) {
        return
      }

      const url = new URL(link.href)
      const isInternal = url.origin === window.location.origin
      const isHandledRoute = url.pathname === '/' || url.pathname.startsWith('/news/')

      if (!isInternal || !isHandledRoute) {
        return
      }

      event.preventDefault()
      window.history.pushState({}, '', `${url.pathname}${url.search}${url.hash}`)
      setPath(window.location.pathname)

      window.setTimeout(() => {
        const scrollTarget = url.hash ? document.querySelector(url.hash) : null

        if (scrollTarget) {
          scrollTarget.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return
        }

        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 0)
    }

    function handlePopState() {
      setPath(window.location.pathname)
    }

    document.addEventListener('click', handleNavigation)
    window.addEventListener('popstate', handlePopState)

    return () => {
      document.removeEventListener('click', handleNavigation)
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  return path
}

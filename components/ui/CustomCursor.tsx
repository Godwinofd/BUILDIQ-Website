"use client"

import { useEffect, useRef } from "react"

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null)
  const pos = useRef({ x: 0, y: 0 })
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const move = (e: MouseEvent) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
      cursor.classList.add("visible")
    }

    const click = () => {
      cursor.classList.add("active")
      setTimeout(() => cursor.classList.remove("active"), 200)
    }

    const loop = () => {
      // Lerp for smooth fast movement
      pos.current.x += (mouse.current.x - pos.current.x) * 0.2
      pos.current.y += (mouse.current.y - pos.current.y) * 0.2
      cursor.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`
      requestAnimationFrame(loop)
    }

    window.addEventListener("mousemove", move)
    window.addEventListener("mousedown", click)
    loop()

    return () => {
      window.removeEventListener("mousemove", move)
      window.removeEventListener("mousedown", click)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="cursor fixed top-0 left-0 w-[12px] h-[12px] bg-[#C8A86A] rounded-full pointer-events-none z-[9999] opacity-0 
      shadow-[0_0_20px_rgba(200,168,106,1),_0_0_40px_rgba(200,168,106,0.5)] 
      transition-all duration-150 ease-out"
    />
  )
}


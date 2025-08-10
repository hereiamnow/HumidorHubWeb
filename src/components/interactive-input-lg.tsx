'use client'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

export default function InteractiveInput() {
  const [text, setText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [showData, setShowData] = useState(false)
  const placeholder = "e.g., Arturo Fuente OpusX"

  useEffect(() => {
    let typingTimeout: NodeJS.Timeout;
    if (isTyping && text.length < placeholder.length) {
      typingTimeout = setTimeout(() => {
        setText(placeholder.slice(0, text.length + 1))
      }, 100)
    } else if (text.length === placeholder.length && isTyping) {
        typingTimeout = setTimeout(() => {
            setIsTyping(false)
        }, 1000)
    }
    
    return () => clearTimeout(typingTimeout);
  }, [text, isTyping])

  useEffect(() => {
    let dataTimeout: NodeJS.Timeout;
    if(!isTyping) {
        dataTimeout = setTimeout(() => {
            setShowData(true)
        }, 500)
    }
    return () => clearTimeout(dataTimeout);
  }, [isTyping])

  return (
    <div className="relative w-full rounded-lg border-2 border-border bg-secondary/50 p-4 min-h-[120px] transition-all duration-300">
      <div className="flex items-center text-left">
        <span className="text-muted-foreground">{text}</span>
        {isTyping && <span className="w-0.5 h-5 bg-primary animate-blink ml-1" />}
      </div>
      <div className={cn(
          "absolute inset-0 flex flex-col justify-center items-start p-4 transition-opacity duration-500",
          showData ? 'opacity-100' : 'opacity-0'
      )}>
        <p className="text-sm font-medium">Found 1 result:</p>
        <div className="mt-2 w-full p-3 bg-card rounded-md shadow-inner flex items-center gap-4">
            <div className="w-10 h-10 bg-primary/20 rounded flex-shrink-0"></div>
            <div className="flex-grow space-y-1.5">
                <div className="h-4 bg-primary/50 rounded w-3/4"></div>
                <div className="h-3 bg-muted-foreground/50 rounded w-1/2"></div>
               
            </div>
        </div>
      </div>
    </div>
  )
}

import * as React from 'react'
import * as ToastPrimitives from '@radix-ui/react-toast'
import { useState } from 'react'
import { ToastContext } from './use-toast-context'

type ToastProps = {
  title?: string
  description?: string
  variant?: 'default' | 'destructive'
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [toastProps, setToastProps] = useState<ToastProps>({})

  const toast = (props: ToastProps) => {
    setToastProps(props)
    setOpen(true)
  }

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <ToastPrimitives.Provider>
        <ToastPrimitives.Root
          className={`fixed bottom-4 right-4 z-50 rounded-lg p-4 shadow-lg ${
            toastProps.variant === 'destructive' ? 'bg-red-600' : 'bg-white'
          } ${toastProps.variant === 'destructive' ? 'text-white' : 'text-black'}`}
          open={open}
          onOpenChange={setOpen}
        >
          {toastProps.title && (
            <ToastPrimitives.Title className="font-semibold">
              {toastProps.title}
            </ToastPrimitives.Title>
          )}
          {toastProps.description && (
            <ToastPrimitives.Description className="mt-1">
              {toastProps.description}
            </ToastPrimitives.Description>
          )}
        </ToastPrimitives.Root>
        <ToastPrimitives.Viewport />
      </ToastPrimitives.Provider>
    </ToastContext.Provider>
  )
}

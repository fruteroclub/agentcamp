'use client'

import { toast } from 'sonner'
import { Button } from '../ui/button'

type AuthButtonProps = {
  size?: 'default' | 'sm' | 'lg' | 'icon' | null | undefined
}

export default function AuthButton({
  size = 'default',
}: AuthButtonProps) {

  return (
    <Button
      onClick={() => toast.info('inscríbete, ¡los agentes están casi listos!')}
      size={size}
      className="font-medium"
    >
      entrar
    </Button>
  )
}

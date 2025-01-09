import PageWithAppbar from '@/components/layout/pageWithAppbar'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <PageWithAppbar>
      <div className="page space-y-8 text-center">
        <h1>Frutero Hackathon Starter</h1>
        <h3>
          construye tu proyecto rápido y fácil <br />con las frutas
        </h3>
        <Link href="https://www.youtube.com/@fruteroclub" target="_blank">
          <Button size="lg">¡aprende aquí!</Button>
        </Link>
        <div className="flex justify-center">
          <h3>
            🍑🥝🍇🥑🍎🍓🍍🥭</h3>
        </div>
      </div>
    </PageWithAppbar>
  )
}

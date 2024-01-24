import { FC } from 'react'
import { Button } from './components/ui/button'
import { ArrowRight } from 'lucide-react'

const App: FC = () => {
  return (
    <div className="w-full h-screen flex flex-col px-5 space-y-8 items-center justify-center">
      <h1 className="text-5xl font-bold text-center">
        Electron-Vite template with ShadcnUI and Tailwindcss
      </h1>
      <p className="text-lg font-semibold">Start edit code in `src/rerender/src/App.tsx`</p>
      <Button asChild>
        <a href="/" className="flex gap-2">
          Get Started <ArrowRight />{' '}
        </a>
      </Button>
    </div>
  )
}

export default App

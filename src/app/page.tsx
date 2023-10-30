import { redirect } from 'next/navigation'
import Image from 'next/image'

export default function Home() {
  redirect('https://www.streamlake.com')

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Image src="/logo.png" alt="StreamLake Logo" width={200} height={100} />
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Redirecting to <a href="https://www.streamlake.com" className="text-blue-500 hover:text-blue-600">StreamLake</a>
        </p>
      </div>
    </main>
  )
}

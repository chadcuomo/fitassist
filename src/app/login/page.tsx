import Link from 'next/link'
import Messages from './messages'

export default function Login() {
  return (
    <div className="flex-1 flex flex-col w-full px-8 justify-center gap-2 h-full items-center">
     

      <form
        className="max-w-sm flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
        action="/api/auth/sign-in"
        method="post"
      >
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
         <button
          className="border bg-black text-white border-foreground/20 rounded-md px-4 py-2 text-foreground mb-2"
        >
          Sign in
        </button>
        <Messages />
        <p>
        Need to create an account?
      <Link href="/signup" className='ml-1 text-blue-600 underline'>
        Sign up
        </Link>
        </p>
      </form>
    </div>
  )
}

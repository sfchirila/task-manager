export function LoginPage() {
    return (
        <>
            <main className="min-h-screen flex items-center justify-center bg-slate-100">
                <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm space-y-6">
                    <h1 className="text-2xl font-bold text-center text-slate-800">Login</h1>

                    <form className="space-y-4">
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            required
                            className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="your@email.com"
                        />

                        <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                        <input
                            type="password"
                            id="password"
                            required
                            className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="••••••••"
                        />

                        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">Sign in</button>
                    </form>

                    <p className="text-sm text-center text-slate-600">Don’t have an account?
                        <a href="/register" className="ml-1 text-blue-600 font-medium hover:underline">Register</a>
                    </p>
                </div>
            </main>
        </>
    )
}
export function RegisterPage() {
    return (
        <>
            <main className="min-h-screen flex items-center justify-center bg-slate-100">
                <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm space-y-6">
                    <h1 className="text-2xl font-bold text-center text-slate-800">Create account</h1>

                    <form className="space-y-4">
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                        <input
                            type="text"
                            id="name"
                            required
                            className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="Your name"
                        />


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

                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-700 mb-1">Repeat password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            required
                            className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="••••••••"
                        />

                        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition">Register</button>
                    </form>

                    <p className="text-sm text-center text-slate-600">Already have an account?
                        <a href="/login" className="ml-1 text-blue-600 font-medium hover:underline">Login</a>
                    </p>
                </div>
            </main>
        </>
    )
}
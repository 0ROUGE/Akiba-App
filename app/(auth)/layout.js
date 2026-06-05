export default function AuthLayout({ children }) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-black/5">
      <div className="w-full max-w-md px-6">
        {children}
      </div>
    </main>
  );
}

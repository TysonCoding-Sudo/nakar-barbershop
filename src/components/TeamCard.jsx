export default function TeamCard({ name, role, index = 0 }) {
  return (
    <div
      className="bg-card rounded-2xl border border-line p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="w-24 h-24 rounded-full bg-charcoal mx-auto mb-4 flex items-center justify-center">
        <span className="text-3xl">💈</span>
      </div>
      <h3 className="text-lg font-bold text-soft-black">{name}</h3>
      <p className="text-sm text-muted mt-1">{role}</p>
      <div className="flex justify-center gap-1.5 mt-4">
        <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
        <span className="text-xs text-muted">Available today</span>
      </div>
    </div>
  )
}

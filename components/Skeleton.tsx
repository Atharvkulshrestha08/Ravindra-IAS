'use client'

export function SkeletonText({ lines = 3, className = '' }: { lines?: number; className?: string }) {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="skeleton h-4 rounded"
          style={{ width: i === lines - 1 ? '60%' : '100%' }}
        />
      ))}
    </div>
  )
}

export function SkeletonCard({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-white p-6 rounded-2xl shadow-md ${className}`}>
      <div className="skeleton h-6 w-1/3 rounded mb-4" />
      <SkeletonText lines={3} />
    </div>
  )
}

export function SkeletonImage({ aspectRatio = 'aspect-video' }: { aspectRatio?: string }) {
  return (
    <div className={`${aspectRatio} skeleton rounded-xl`} />
  )
}

export function SkeletonButton({ className = '' }: { className?: string }) {
  return (
    <div className={`skeleton h-12 rounded-lg ${className}`} />
  )
}

export default function ContactFormSkeleton() {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="skeleton h-4 w-20 rounded mb-2" />
          <div className="skeleton h-10 rounded-lg" />
        </div>
        <div>
          <div className="skeleton h-4 w-24 rounded mb-2" />
          <div className="skeleton h-10 rounded-lg" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="skeleton h-4 w-24 rounded mb-2" />
          <div className="skeleton h-10 rounded-lg" />
        </div>
        <div>
          <div className="skeleton h-4 w-28 rounded mb-2" />
          <div className="skeleton h-10 rounded-lg" />
        </div>
      </div>
      <div>
        <div className="skeleton h-4 w-16 rounded mb-2" />
        <div className="skeleton h-24 rounded-lg" />
      </div>
      <div className="skeleton h-12 rounded-lg" />
    </div>
  )
}

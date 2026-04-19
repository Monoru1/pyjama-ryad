import { Product } from '../data/products'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="product-card">
      <div className="card-img" style={{ aspectRatio: '3/4' }}>
        <img src={product.image} alt={product.name} loading="lazy"/>
        {product.badge && (
          <span className="badge absolute top-3 left-3">{product.badge}</span>
        )}
      </div>
      <div className="p-5">
        <p className="label text-[10px] mb-2">{product.subcategory}</p>
        <h3 className="font-display text-[1.0625rem] font-medium leading-snug mb-2 text-[var(--noir)]">
          {product.name}
        </h3>
        <p className="font-body text-[0.8125rem] text-[var(--gris)] leading-relaxed mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-display text-lg font-semibold text-[var(--noir)]">{product.price}</span>
          <div className="flex gap-1">
            {product.sizes.slice(0, 4).map(s => (
              <span key={s} className="size-pill">{s}</span>
            ))}
            {product.sizes.length > 4 && (
              <span className="font-body text-[0.6rem] text-[var(--gris)] self-end">+{product.sizes.length - 4}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}


"use client";

import { usePathname } from "next/navigation"

export default function NotFound() {
  const pathname = usePathname()
  const pathParts = pathname.split("/")
  const productId = pathParts[pathParts.length - 3]
  const reviewId = pathParts[pathParts.length - 1]
  return (
    <main>
      productId:{productId} and reviewId: {reviewId} was not found
    </main>
  )
}
/**
 * title: titulo del producto
 * longDescription: descripcion del producto
 * price: precio del producto
 * type: [lamina, original, etc]
 * sizes: tamaños disponibles, si aplica
 * images: array de imagenes a mostrar en el carrusel de producto
 * hasVariants: saber si un producto es configurable/el usuario puede elegir opciones de tamaño o similar
 * similarProducts: array de productos similares vinculados al producto
 */
export interface IProduct {
  id: number
  title: string
  longDescription: string
  price: number
  amount?: number
  type: string
  sizes?: string[]
  images: string[]
  hasVariants?: boolean
  variants: IProduct[]
  slug: string
  similarProducts?: IProduct[]
}

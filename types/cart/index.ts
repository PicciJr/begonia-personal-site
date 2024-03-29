import { IProduct } from 'types/product/index'

export enum CartStatus {
  InProgress = 'NEW',
  Addressed = 'ADDRESSED',
  Completed = 'COMPLETED',
}

/**
 * items: items del carrito
 * subtotal: subtotal actual del carrito
 * shippingAddress: dirección de envío del pedido
 * email: email del comprador
 */
export interface ICart {
  items: IProduct[]
  subtotal: number
  status?: CartStatus
  token?: string
}

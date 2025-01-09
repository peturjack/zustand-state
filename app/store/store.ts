import { create } from "zustand"

type Product = {
    id: number,
    title: string,
    price: number,
    description: string
    inStock?: number
}


type ProductStore = {
    products: Product[]
}

type Actions = {
    addProduct: (newProduct: Product) => void
    removeProduct: (id: number) => void
    updateProduct: (id: number, updatedProduct:Product) => void
}


export const useProductStore = create<ProductStore & Actions>((set)=>({
    //initial value
    products: [],
    addProduct: (newProduct: Product) => set((state)=>({products: [...state.products, newProduct ]})),
    removeProduct: (id: number)=> set((state)=>({products: state.products.filter((item)=> item.id !== id)})),
    updateProduct: (id: number, updatedProduct:Product) => set((state)=>({
        products: state.products.map((product)=> product.id === id ?  updatedProduct : product )
    }))
}))


type toggleStore = {
    showodal: boolean,
    setshowmodal: () => void
    showNav: boolean
    setShowNav: () => void
}

export const useToggleStore = create<toggleStore>((set)=>({
    showodal: false,
    setshowmodal: () => set((state)=> ({showodal: !state.showodal})),
    showNav: false,
    setShowNav: () => set((state)=> ({showNav: !state.showNav}))
}))
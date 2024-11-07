import { toast } from "react-toastify"

const getLocalStorage =(viewproduct)=>{
    const allViewproductData = localStorage.getItem('cart')
    if(allViewproductData){
        const cart = JSON.parse(allViewproductData)
        return cart
    }else{
        return([])
    }
}

const addLocalStorage =(viewproduct)=>{
    const addToCart = getLocalStorage()
    const verifyAddToCart = addToCart.find(varifyCart => varifyCart.id == viewproduct.id)
    if(verifyAddToCart) return toast.error("This product already added",{
        position: "top-center"
    })
    addToCart.push(viewproduct)
    localStorage.setItem('cart', JSON.stringify(addToCart))
    toast.success("Item Added to Cart",{
        position: "top-center"
    })
}


const removeCartLocalStorage = (carts) =>{
    const cartadd = getLocalStorage()
    const removeData = cartadd.filter(c => c.id != carts.id)
    localStorage.setItem('cart', JSON.stringify(removeData))
    toast.success("Item remove to cart",{
        position: "top-center"
    })
}


const getWishlistLocalStorage =()=>{
    const allWishlistViewProduct = localStorage.getItem('wishlist')
    if(allWishlistViewProduct){
        const wishlist = JSON.parse(allWishlistViewProduct)
        return wishlist
    }else{
        return([])
    }
}

const addWishlistLocalStorage =(viewproduct)=>{
    const addWishlist = getWishlistLocalStorage()
    const verifyWishlist = addWishlist.find(varifyCart => varifyCart.id == viewproduct.id)

    if(verifyWishlist) return toast.error("This Wishlist already added",{
        position: "top-center"
    })
    addWishlist.push(viewproduct)
    localStorage.setItem('wishlist', JSON.stringify(addWishlist))
    toast.success("Item Added to wishlist",{
        position: "top-center"
    })
}


const removeWishlistCartLocalStorage = (wish) =>{
    const wishListAdd = getWishlistLocalStorage()
    const removeWishlistData = wishListAdd.filter(c => c.id != wish.id)
    localStorage.setItem('wishlist', JSON.stringify(removeWishlistData))
    toast.success("Item remove to wishlist",{
        position: "top-center"
    })
}





export {addLocalStorage, getLocalStorage, removeCartLocalStorage, getWishlistLocalStorage, addWishlistLocalStorage, removeWishlistCartLocalStorage }
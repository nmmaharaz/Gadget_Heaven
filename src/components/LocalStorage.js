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
    addToCart.push(viewproduct)
    localStorage.setItem('cart', JSON.stringify(addToCart))
}


export {addLocalStorage, getLocalStorage}
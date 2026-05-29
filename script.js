const cart = document.getElementById("cart");
const cartContainer = document.getElementById("cart-container")
const burgerButton = document.getElementById("burder-menu-btn")
const navigation = document.getElementById("primary-navigation")
const mobileNavClose = document.getElementById("mobile-nav-close")
const increase = document.getElementById("increase")
const decrease = document.getElementById("decrease")
const quantity = document.getElementById("quantity-number")
const pages = document.querySelectorAll(".pages")
const images = document.querySelectorAll(".thumbnail")
const mainImage = document.getElementById("main-image")
const prevButton = document.getElementById("lightbox-prev")
const nextButton = document.getElementById("lightbox-next")
const closeLightbox = document.getElementById("close-lightbox")
const lightbox = document.getElementById("lightbox")
const lightboxImage = document.getElementById("lightbox-image")
const mobilePrevButton = document.getElementById("prev-button")
const mobileNextButton = document.getElementById("next-button")
const addToCartButton = document.getElementById("add-to-cart")
const checkoutButton = document.getElementById("checkout-btn")
const emptyCartText = document.getElementById("empty-cart-text")
const cartItem = document.getElementById("cart-item")
const cartItemQuantity = document.getElementById("cart-item-quantity")
const cartItemTotalPrice = document.getElementById("cart-item-total-price")
const deleteIcon = document.getElementById("delete-icon")


const imageSources = [
    "/assets/sneaker_image1.jpg",
    "/assets/sneaker_image2.jpg",
    "/assets/sneaker_image3.jpg",
    "/assets/sneaker_image4.jpg"
]

function itemAmountCounter(){
    let itemAmount = 0

    return {
        increase() {
            itemAmount++
        },

        decrease() {
            if (itemAmount > 0) {
                itemAmount--
            }
        },

        set itemAmount(value) {
            itemAmount = value
        },

        get itemAmount() {
            return itemAmount
        }
    }
}

const counter = itemAmountCounter()


cart.addEventListener("click", () => {
    checkoutButton.classList.toggle("visible")
    cartContainer.classList.toggle("visible")
})

burgerButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open")
})

mobileNavClose.addEventListener("click", () => {
    navigation.classList.remove("open")
})

increase.addEventListener("click", () => {
    counter.increase()
    quantity.textContent = counter.itemAmount
})

decrease.addEventListener("click", () => {
    counter.decrease()
    quantity.textContent = counter.itemAmount
})

closeLightbox.addEventListener("click", () => lightbox.classList.add("hidden"))
mainImage.addEventListener("click", () => lightbox.classList.remove("hidden"))
addToCartButton.addEventListener("click", () => {
    if (counter.itemAmount !== 0) {
        cartItem.classList.remove("hidden")
        cartItemQuantity.textContent = counter.itemAmount
        cartItemTotalPrice.textContent = `$${counter.itemAmount * 125}.00`
        counter.itemAmount = 0
        quantity.textContent = 0
        emptyCartText.classList.add("hidden")
        checkoutButton.classList.remove("hidden")
    }
})

deleteIcon.addEventListener("click", () => {
    cartItem.classList.add("hidden")
    emptyCartText.classList.remove("hidden")
    checkoutButton.classList.add("hidden")
})

prevButton.addEventListener("click", () => {
    const listOfSplitSrc = mainImage.src.split("/")
    const currentIndex = imageSources.indexOf(`/assets/${listOfSplitSrc.at(-1)}`)
    const prevIndex = (currentIndex - 1 + imageSources.length) % imageSources.length
    mainImage.src = imageSources[prevIndex]
    lightboxImage.src = imageSources[prevIndex]
    images.forEach((img) => img.classList.remove("active"))
    images[prevIndex].classList.add("active")
})

nextButton.addEventListener("click", () => {
    const listOfSplitSrc = mainImage.src.split("/")
    const currentIndex = imageSources.indexOf(`/assets/${listOfSplitSrc.at(-1)}`)
    const nextIndex = (currentIndex + 1) % imageSources.length
    mainImage.src = imageSources[nextIndex]
    lightboxImage.src = imageSources[nextIndex]
    images.forEach((img) => img.classList.remove("active"))
    images[nextIndex].classList.add("active")
})

mobilePrevButton.addEventListener("click", () => {
    const listOfSplitSrc = mainImage.src.split("/")
    const currentIndex = imageSources.indexOf(`/assets/${listOfSplitSrc.at(-1)}`)
    const prevIndex = (currentIndex - 1 + imageSources.length) % imageSources.length
    mainImage.src = imageSources[prevIndex]
    images.forEach((img) => img.classList.remove("active"))
    images[prevIndex].classList.add("active")
})

mobileNextButton.addEventListener("click", () => {
    const listOfSplitSrc = mainImage.src.split("/")
    const currentIndex = imageSources.indexOf(`/assets/${listOfSplitSrc.at(-1)}`)
    const nextIndex = (currentIndex + 1) % imageSources.length
    mainImage.src = imageSources[nextIndex]
    images.forEach((img) => img.classList.remove("active"))
    images[nextIndex].classList.add("active")
})

pages.forEach((page) => {

    page.addEventListener("click", () => {
        pages.forEach((page) => {
            page.classList.remove("active")
        })
        page.classList.add("active")
        navigation.classList.remove("open")
    })

})

images.forEach((image) => {

    image.addEventListener("click", () => {
        images.forEach((img) => {
            img.classList.remove("active")
        })
        mainImage.src = image.src
        lightboxImage.src = image.src
        image.classList.add("active")
        navigation.classList.remove("open")
    })
})

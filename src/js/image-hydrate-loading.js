class ImageHydrateLoading {
    constructor(selector) {
        this.img = null
        this.selector = (typeof selector !== 'string')
            ? selector
            : document.querySelector(selector)
        console.log(this.selector)
        this.addBufferedImage()
    }

    getAttribute(attribute) {
        return this.selector.getAttribute(attribute)
    }

    addBufferedImage() {
        fetch(this.getAttribute('data-src'))
            .then((response) => response.arrayBuffer()).then((buffer) => {
                this.selector.src = window.URL.createObjectURL(
                    /* eslint-disable-next-line */
                    new Blob([ new Uint8Array(buffer) ])
                )
                this.selector.setAttribute('rendered', true)
            })
    }
}

export default ImageHydrateLoading


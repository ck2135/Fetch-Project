let total = 4;
let url = "https://fakestoreapi.com/products";

function charan() {
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const imageContainer = document.getElementById("imageContainer");
            imageContainer.innerHTML = ""; // Clear previous content
            

            for (let i = 0; i < total; i++) {

                const id1 = data[i].id;
                const product = data[i].image;
                const cost1 = data[i].price;


                const imageCards = document.createElement("div");
                imageCards.classList.add("image-cards");
                imageContainer.appendChild(imageCards)


                const id = document.createElement("h3");
                id.innerHTML = "id: " + id1


                // Create an image element
                const imgElement = document.createElement("img");
                imgElement.src = product;


                // Create h3 element
                const cost = document.createElement("h3");
                cost.innerHTML = "Price: " + cost1
                                               

                // Append the image to the container
                imageCards.append(id);
                imageCards.append(imgElement);
                imageCards.append(cost);
            }
        });
}

document.getElementById("charan").addEventListener("click",()=>{
    total=total+4
    charan(total)
})

charan(total);
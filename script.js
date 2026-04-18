const itemInput = document.getElementById("itemInput");
const qtyInput = document.getElementById("qtyInput");
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function(){



    const item = itemInput.value;
    const qty = qtyInput.value;

    const newItem = document.createElement("div");

    newItem.innerText = item + " - " + qty;

    listContainer.appendChild(newItem);



});




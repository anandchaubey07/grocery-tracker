const itemInput = document.getElementById("itemInput");
const qtyInput = document.getElementById("qtyInput");
const addBtn = document.getElementById("addBtn");
const listContainer = document.getElementById("listContainer");

addBtn.addEventListener("click", function () {

    const item = itemInput.value;
    const qty = qtyInput.value;

    // Create row container
    const newItem = document.createElement("div");

    // Create text
    const text = document.createElement("span");
    text.innerText = item + " - " + qty;

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    // 🔥 DELETE LOGIC
    deleteBtn.addEventListener("click", function () {
        newItem.remove();
    });

    // Append text + button into row
    newItem.appendChild(text);
    newItem.appendChild(deleteBtn);

    // Add row to main container
    listContainer.appendChild(newItem);

});
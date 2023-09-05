const headers = [
    "S.No",
    "Product Name",
    "Product Quantity",
    "Product Mrp",
    "Product SP",
    "Date",
    "Actions",
  ];
  const products = JSON.parse(localStorage.getItem("products"));
  
  let tableContainer = document.getElementById("table-container");
  let table = document.createElement("table");
  
  let headRow = document.createElement("tr");
  let tableHead = document.createElement("thead");
  
  headers.forEach((header) => {
    let headCell = document.createElement("th");
    headCell.textContent = header;
    headRow.appendChild(headCell);
  });
  tableHead.appendChild(headRow);
  table.appendChild(tableHead);
  tableContainer.appendChild(table);
  
  let tableBody = document.createElement("tbody");
  
  products.forEach((product) => {
    let bodyRow = document.createElement("tr");
    Object.values(product).forEach((product) => {
      let bodyCell = document.createElement("td");
      bodyCell.textContent = product;
  
      bodyRow.appendChild(bodyCell);
    });
    let actionCell = document.createElement("td");
  
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      deleteRow(product);
    });
  
    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => {
      // Call a function to handle the edit action
      editRow(product);
    });
  
    actionCell.appendChild(deleteButton);
    actionCell.appendChild(editButton);
  
    bodyRow.appendChild(actionCell)
  
    tableBody.appendChild(bodyRow);
  });
  
  table.appendChild(tableBody);
  
  function deleteRow(data) {
    let index = products.findIndex((product) => product === data);
  
    if (index !== -1) {
      products.splice(index, 1);
  
      // Reassign productId values
      products.forEach((product, id) => {
        product.productId = id + 1;
      });
  
      localStorage.setItem("products", JSON.stringify(products));
      renderTable(); // Call renderTable to update the displayed table
    }
  }
  
  function editRow(data) {
    let index = products.findIndex((product) => product === data);
     console.log(data.productId);
    if (index !== -1) {
    
      
      const editProduct = [{
        productId: data.productId,
        productName : data.productName,
        productQty: data.productQty,
        productMrp : data.productMrp
      }];
      localStorage.setItem("edit", JSON.stringify(editProduct));
      window.location.href = "../html/edit.html";
    }
   
  }
  
  function renderTable() {
    tableBody.innerHTML = ""; // Clear existing content
  
    products.forEach((product) => {
      let bodyRow = document.createElement("tr");
      Object.values(product).forEach((value) => {
        let bodyCell = document.createElement("td");
        bodyCell.textContent = value;
        bodyRow.appendChild(bodyCell);
      });
      let actionCell = document.createElement("td");
  
      let deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        deleteRow(product);
      });
  
      let editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.addEventListener("click", () => {
        // Call a function to handle the edit action
        editRow(product);
      });
  
      actionCell.appendChild(deleteButton);
      actionCell.appendChild(editButton);
  
      bodyRow.appendChild(actionCell)
  
      tableBody.appendChild(bodyRow);
    });
  }
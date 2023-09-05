const form = document.getElementById("productform");

const formData = JSON.parse(localStorage.getItem("products")) || [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let productName = document.getElementById("productname").value;
  let productQty = document.getElementById("productquantity").value;
  let productMrp = document.getElementById("productmrp").value;
  let productSp = document.getElementById("productsalesprice").value;
  let productDate = document.getElementById("productcreatedate").value;
  productDate = new Date();
  year = productDate.getFullYear();
  month = productDate.getMonth();
  day = productDate.getDate();
  fulldate = `${day}-${month}-${year}`;

  const productId = formData.length + 1; 
  let product = {
    productId: productId,
    productName: productName,
    productQty: productQty,
    productMrp: productMrp,
    productSp: productSp,
    productDate: fulldate,
  };
  formData.push(product);
  console.log(formData);
  localStorage.setItem("products", JSON.stringify(formData));

  form.reset();
});


/**
2. (soal2.js) Misalkan terdapat response API sebagai berikut. 
Sebagai QA Engineer kalian ingin mengecek total quantity dari bebarapa storageId untuk productCode FBR00040101 (FloBrand-DressBSPink). Buatlah sebuah program javascript untuk menjumlahkan quantity dari semua storageId untuk produk tersebut 
Hint : Gunakan metode Pengulangan, Array dan Object keys (silakan cari referensi cara mendapatkan value dari json)
 */

var prompt = require("prompt-sync")();

let productBin = {
  requestId: null,
  data: [
    {
      id: 100000057465,
      storageId: 10000008207,
      code: "A01-01-01-A",
      productId: 110000081009,
      productName: "FloBrand-DressBSPink",
      productCode: "FBR00040101",
      quantity: 76,
      createdTime: "2021-12-21T13:54:48Z",
    },
    {
      id: 100000057466,
      storageId: 10000002181,
      code: "A01-01-01-B",
      productId: 110000081009,
      productName: "FloBrand-DressBSPink",
      productCode: "FBR00040101",
      quantity: 71,
      createdTime: "2021-12-21T13:54:48Z",
    },
    {
      id: 100000065224,
      storageId: 10000008884,
      code: "Tgt00-A-A-01",
      productId: 110000081009,
      productName: "FloBrand-DressBSPink",
      productCode: "FBR00040101",
      quantity: 10,
      createdTime: "2022-02-08T10:35:19Z",
    },

    {
      id: 100000065224,
      storageId: 10000008884,
      code: "Tgt00-A-A-01",
      productId: 110000081009,
      productName: "FloBrand-DressBSPink",
      productCode: "FBR00040101",
      quantity: 20,
      createdTime: "2022-02-08T10:35:19Z",
    },
  ],
  message: "success",
};

function hitung_quantity_berdasarkan_product_code(product_code, productBin) {
  const data = productBin.data
  let total_semuanya = 0
  let storage = []


  data.forEach(function(product) {
    const {productCode, quantity, storageId} = product //destructuring element
    if(productCode === product_code){
      total_semuanya = total_semuanya+quantity

      storage[storageId] = (storage[storageId]??0) + quantity
    }
  })

  console.log(total_semuanya,storage)
}

const productCode = prompt("Masukkan Product Code: ");
hitung_quantity_berdasarkan_product_code(productCode, productBin);

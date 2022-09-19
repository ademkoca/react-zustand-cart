// export const addToCart = (e) => {
//     e.preventDefault();
//     //check if item already in cart
//     //if not
//     if (size !== 'Size') {
//       const itemExists = items.find((x) => x.itemName === product.productName);

//       const sizeExists = items.find(
//         (x) => x.itemName === product.productName && x.size === size
//       );
//       if (itemExists === undefined) {
//         addItemToCart({
//           id: Math.ceil(Math.random() * 1000000),
//           itemName: product.productName,
//           itemDesc: product.productDesc,
//           itemImg: product.productImg,
//           itemPrice:
//             product.salePrice !== 0 ? product.salePrice : product.price,
//           size: size,
//           qty: 1,
//         });

//         //if yes
//       } else {
//         if (!sizeExists) {
//           addItemToCart({
//             id: Math.ceil(Math.random() * 1000000),
//             itemName: product.productName,
//             itemDesc: product.productDesc,
//             itemImg: product.productImg,
//             itemPrice:
//               product.salePrice !== 0 ? product.salePrice : product.price,
//             size: size,
//             qty: 1,
//           });
//         } else updateItem(product.productName);
//       }
//     } else alert('Please choose size!');
//   };

/*console.log('Merhaba!');
console.log('Benim adım: Enes');
console.log('Merhaba Dünya!');
console.warn('Uyarı mesajı');
console.error('Hata Mesajı');
console.table(['Enes','Kurt',18]);

let isim =prompt('İsminiz:');
console.log('İsminiz:' +isim);

let ad = prompt("adınız nedir?:");
console.log("adınız:"+ad);

let yas = prompt('Yasınız:');
console.log('yasınız'+yas);

let onay = confirm('Devam etmek istiyormusunuz?');
console.log('Onay:' + onay);

alert("merhaba enes")*/

const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger"
  },
  buttonsStyling: false
});
swalWithBootstrapButtons.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonText: "Yes, delete it!",
  cancelButtonText: "No, cancel!",
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) swalWithBootstrapButtons.fire({
    title: "Deleted!",
    text: "Your file has been deleted.",
    icon: "success"
  });
  else if (result.dismiss === Swal.DismissReason.cancel)
 /* Read more about handling dismissals below */
  swalWithBootstrapButtons.fire({
    title: "Cancelled",
    text: "Your imaginary file is safe :)",
    icon: "error"
  });
});
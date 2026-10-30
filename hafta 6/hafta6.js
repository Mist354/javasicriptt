/*let kilo = Number(prompt("Kilonuzu giriniz"))
let boy = Number(prompt("Boyunuzu giriniz"))

let Bki=kilo/(boy*boy)

if(Bki < 18.5)
{
    alert("ideal kilonun altında")
}
else if(Bki>=18.5 && Bki<=24.9)
{
    alert("ideal kiloda")
}
else if(Bki<=25 && Bki<=29.9)
{
    alert("ideal kilonun üstünde")
}
else if(Bki>= 30 && Bki<= 34.9)
{
    alert("Sınırdasın")
}
else
{
    alert("ideal kilonun çok üzerindesiniz")
} */

/*let sayi=prompt("1 ile 5 arasında sayı giriniz: ")
switch(sayi)
{
    case "1" :
        alert("Girilen sayı 1'dir");
        break;
    case "2" :
        alert("Girilen sayı 2'dir");
        break;
    case "3" :
        alert("Girilen sayı 3'dür");
        break;
    case "4" :
        alert("Girilen sayı 4' dür");
        break;
    case "5" :
        alert ("Girilen sayı 5'dir")
        break;
    default:
        alert("Uyarı uyarı uyarı")
}

let metin="MERHABA DÜNYA";
alert(metin.toLowerCase())

let metin2="merhaba dünya";
alert(metin2.toUpperCase())*/

/*let mevsim=prompt("mevsim giriniz")
mevsim.toLowerCase()

switch(mevsim)
{
    case "kış":
        alert("kayak yapabilirsiniz")
        break;
    case "ilkbahar":
        alert("doğa yürüyüşü yapabilirsiniz")
        break;
    case "yaz":
        alert("denize girebilirsiniz")
        break;
    case "sonbahar":
        alert("yaprak toplayabilirsiniz")
    default:
        alert("hatalı giriş")
    
}


document.writeln("<u>0'dan 10'a kadar olan çift sayılar:</u> "+"<br>");
for(let i=0; i<=10; i+=2)
{
    document.writeln(i);
}
document.writeln("<br><u>1'den 10'a kadar olan tek sayılar:</u> "+"<br>");
for(let j=1; j<=10;j+=2)
{
    document.writeln(j);
}*/

let sayi=prompt("faktoriyeli alınacak sayıyı giriniz")
let faktoriyel=1;
for(let i=1; i<=sayi ; i++)
{
    faktoriyel*=i;
}
alert(sayi+"sayısını faktöriyeli: "+ faktoriyel)
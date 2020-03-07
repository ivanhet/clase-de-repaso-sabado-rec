function mostrar()
{
    var ingrediente;
    var precio;
    var peso;

  do
{
    ingrediente= prompt("ingrese ingrediente v, a, m");
}
    while(ingrediente=! "v" && ingrediente!= "m" && ingrediente!= "a")

do
{
    precio= prompt("ingrese precio mayor a cero");
    precio= parseInt(precio);
}
    while(precio= isNaN(precio || precio<=0))
do
{
    peso=prompt("ingrese peso en kilos entre 10 y 1000");
    peso=parseInt(peso);
}
    while(peso!=parseInt(peso) || peso <10 || peso>1000);


  
}

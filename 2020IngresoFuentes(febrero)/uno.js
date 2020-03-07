
function mostrar()
{
	var precio; 
	var cantidad;
	var producto;
	var marca;
	var fabricante;
	var contador=0;
	var cantidadMayorFabricante;
	var flag= "no paso";
	var barbijoMasCaro;
	var cantidadMayor;
	var barbijoMasCaroCantidad;
	var barbijoMasCaroFabricante;
	var cantidadDeJabones;
	i=0
	
for (i=0 ; i<5; i++)
{	
do
{
		producto= prompt("ingrese producto");
}while (producto != "barbijo" && producto != "jabon" && producto != "alcohol" );

do
{
		cantidad= prompt("ingrese cantidad");
		cantidad= parseInt(cantidad);
}while (cantidad= isNaN(cantidad) || cantidad<100 || cantidad>300);

do
{
		precio= prompt("ingrese precio");
		precio= parseInt(precio);	
}while (precio=isNaN(precio || precio<1 || precio >300));

	marca= prompt("ingrese marca");
	fabricante= prompt("ingrese fabricante");
}
if(producto== "barbijo" && barbijoMasCaro< precio || flag == "no paso")
{
	barbijoMasCaro = precio;
	barbijoMasCaroCantidad= cantidad;
	barbijoMasCaroFabricante = fabricante;
	flag= "si paso";
}
if (contador=0 || cantidadDeJabones<cantidad)
{
	cantidadDeJabones = cantidad
}

if (contador ==0 || cantidadMayor<cantidad)
{
		cantidadMayor = cantidad
		cantidadMayorFabricante= fabricante;
}

document.write("cantidad de unidades de barbijo mas caro " + barbijoMasCaroCantidad + " y fabricante " + cantidadMayorFabricante + "</br>" );
document.write("fabricante del producto con mas unidades " + cantidadMayorFabricante + "</br>");
document.write("cantidad total de jabones " + cantidadDeJabones + "</br>");

}	


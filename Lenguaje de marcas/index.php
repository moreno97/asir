<?php
// Estructura para empezar un doc .php
?>

<?php
// Los Script se deben almacenar en una carpeta llamada htdocs (Apache busca aqui)
// Para comprobar escribimos localhost/nombrearchivo.php
// Se deben guardar en formato UTF-8
?>

<?php
echo "Esto imprime<br>";
// Puede imprimir varias cadenas. Ej -> echo cadena1 , cadena2;

/* Tipos de datos : boolean (true or false, el 0 es false), integer (27,5,-3,...), 
double (1.23,5.432,...), string (entre 'palabra' o "palabra"). Array, objecto. Resource, NULL.
*/

// gettype($variable); // devuelve el tipo  de variable.
/* Funcion is_type : comprueba si una variable es de un tipo de dato. is_array(), is_bool(),
is_float(),is_integer(),is_null(),is_numeric(),is_object(),is_resource(),is_scalar(),is_string().
*/
// Funcion var_dump($variable) : muestra el tipo y el valor de una varialbe. Especialmente con arrays.

//Definicion de constantes:
define ("constante","Hola<br>");
echo constante;
//(Solo se pueden definir constantes boolean, integer, double, string)

//Definicion de variables:
$variable=5;
echo "$variable";
//Php reconoce variable, no hace falta matizar cual es.

/*Variables SUPERGLOBALES predefinidas:
$GLOBALS es la lista de las variables globales del script. 
$_SERVER['SERVER_NAME'] devuelve nombre del equipo del servidor.
$_SERVER['SERVER_ADDR'] devuelve la direccion IP del servidor.
$_SERVER['SERVER_PORT'] devuelve puerto que atiende el servicio web.
$_SERVER['DOCUMENT_ROOT'] directorio raiz del servidor.

$_GET guarda las varialbes recibidas por método GET.
$_POST guarda las variables recibidas por método POST.
$_COOKIES guarda las tuplas recibidas a través de cookies.
$_FILES permite acceder a los ficheros recibidos, por ejemplo a través de un form.
$_ENV de entorno, sirve para configuración y seguridad. Ejemplo: $password = $_ENV["DB_PASSWORD"]
$_REQUEST guarda tuplas sin necesidad de especificar de donde vienen (si de GET, POST o Cookies).
$_SESSION guarda las tuplas almacenadas en la sesión.
*/
// Una tupla es un conjunto de elementos agrupados. Son datos relacionados Clave-Valor.


?>

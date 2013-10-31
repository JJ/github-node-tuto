github-node-tuto
================

Tutorial de uso del API de GitHub desde [node.js](http://nodejs.org). 

Introducción
------------

El [API de GitHub](http://developer.github.com/) permite acceder a
todas las funciones de esta red social usando un simple interfaz
REST. A todas las funciones se puede acceder mediante un URL, en
algunos casos usando autenticación.

La [versión actual es la tres](http://developer.github.com/v3/)
mediante llamadas al url `api.github.com`. Toda la información que hay
disponible en la web lo está en este API. Alguna [información básica](http://developer.github.com/guides/getting-started/) se
puede obtener directamente con `curl`, por ejemplo la llamada más
simple

	curl https://api.github.com/zen
	
(también)

	wget https://api.github.com/zen
	cat zen
	
o, para los que tengan Perl y
[LWP::Simple](http://search.cpan.org/~gaas/libwww-perl-6.05/bin/lwp-request)

	GET https://api.github.com/zen
	
Para interaccionar con el usuario de uno tendrá que usarse
[autenticación con OAuth](http://oauth.net/). Primero hay que
[registrar la aplicación](https://github.com/settings/applications/new),
y a continuación autorizar la aplicación en particular, lo que
generalmente se hace desde la aplicación una vez que la tenga uno. 

Trabajando con una librería
---------------------------

Vamos a trabajar con
[node.js](http://geneura.ugr.es/~jmerelo/tutoriales/node.js) usando la
librería [`node-github`](https://github.com/ajaxorg/node-github). Se
instala de la forma clásica:

	npm install github
	
Una vez instalado, podemos hacer un
[programa básico para recoger información del usuario](user-info.js). Este
módulo simplifica la recogida de información, en este caso usando
`getFrom` para solicitar información básica del usuario, equivalente a
la petición `get` del API. La información devuelta está ya en el
objeto `res`, sin necesidad de hacer el análisis de JSON de la
información *cruda* devuelta por el servidor.

En vez de volcarla, podemos
[imprimir sólo la información que nos interese](location.js),
incluyendo la localización del usuario. Para saber qué información
tenemos y los nombres de las variables
[lo tenemos en la referencia de la API](http://developer.github.com/v3/users/). 

En el hackatón una de las cosas que nos interesa es buscar usuarios
que cumplan una determinada condición. Una
[búsqueda genérica](search.js) nos devuelve la estructura de datos con
todo lo que queremos. Pero no se pueden hacer búsquedas específicas
por alguno de los campos; tenemos nosotros mismos [que filtrar la búsqueda](search-location.js).

	
	

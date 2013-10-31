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
	
	

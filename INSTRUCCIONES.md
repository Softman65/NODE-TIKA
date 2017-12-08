
instrucciones para instalar la TIKA APACHE para UBUNTU

# https://www.vultr.com/docs/how-to-install-apache-maven-on-ubuntu-16-04
# http://apache.rediris.es/tika/tika-1.16-src.zip 
# https://notesfromrex.wordpress.com/2015/02/09/install-apache-tika-on-debian/

Un servidor Vultr Ubuntu 16.04 recientemente implementado.
Un usuario no root con privilegios sudo creados en su servidor.
Paso 1: actualiza tu servidor

Primero, actualice su sistema a la última versión estable ejecutando el siguiente comando:

sudo apt-get update -y
sudo apt-get upgrade -y
Paso 2: instala Java

Apache Maven requiere que Java esté instalado en su servidor. Por defecto, Java no está disponible en el repositorio de Ubuntu. Agregue Oracle Java PPA a Apt con el siguiente comando:

sudo add-apt-repository ppa:webupd8team/java
A continuación, actualice su base de datos de paquetes Apt con el siguiente comando:

sudo apt-get update -y
Instale la última versión estable de Oracle Java 8.

sudo apt-get install oracle-java8-installer
Verifique la versión de Java ejecutando el siguiente comando:

java -version
Salida:

java version "1.8.0_91"
Java(TM) SE Runtime Environment (build 1.8.0_91-b14)
Java HotSpot(TM) 64-Bit Server VM (build 25.91-b14, mixed mode)

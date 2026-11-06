# Github

- Instalar Git: https://git-scm.com/install/
- Crear cuenta en github.com
- Anotar usuario y correo

- Con el proyecto abierto en VsCode, abrir la terminal, asegurarse de estar "parado" en la dirección correcta de la carpeta.
- Usar los comandos:
  - git init
  - git config user.name "nombreUsuario"
  - git config user.email "correoUsadoEnGit"

En github.com crear un Nuevo repositorio, elegir un nombre acorde al proyecto, visibilidad pública.
En la terminal: git remote add origin "urlDelRepositorio"

Una vez seguros de que tenemos lo que queremos "subir al repositorio remoto" (github).
Usamos:
git status (para ver el estado del espacio)
git add . (para agregar todos los archivos que tienen cambios. Se puede modificar el punto por el nombre del archivo específico)
git status (para ver el cambio de estado)
git commit -m "Mensaje explicando que hace el cambio que estamos subiendo" (Ej: Agrega vista Sobre nosotros. Agrega css de home.)
git push origin master (o main, depende del nombre de la rama en su proyecto)

En github, actualizar la ventana del repositorio, y observar que aparezcan los archivos/cambios hechos.
Buscar la pestaña de "Settings/Configuración" -> Pages -> Deploy from a branch -> Seleccionar el nombre de la rama y guardar.
Tarda unos minuto en brindar el link para poder visualizar la web.
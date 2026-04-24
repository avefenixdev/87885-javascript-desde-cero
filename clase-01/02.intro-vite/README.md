# Trabajando con Vite

## Arrancando un proyecto nuevo

```sh
npm create vite@latest ./ # ./ <---- indica directorio actual
```

## Luego seguir los pasos del menú interactivo

1. package-name

> nombre-cualquiera (por ej. proyecto-zapateria)

2. Seleccionar 'Vanilla'

3. Seleccionar 'Javascript'

4. Elegir 'yes' para instalar y arrancar el servidor de desarrollo

## Dejar de desarrollar (Detengo el servidor de desarrollo)

Ctrl + C

## Para arrancar o continuar desarrollando

1. Abro la terminal

2. Ejecuto el comando 

```sh
npm run dev
```

# Cuando quiero trabajar con proyecto de Vite

Nota: Tengo que ver si está la carpeta **node_modules**

Si no está me va a arrojar un error cuando intente arrancar el servidor de desarrollo

```sh
npm run dev # y no tengo la carpeta node_modules
```

```sh
'vite' is not recognized as an internal or external command,
operable program or batch file.
```

```sh
npm i ## npm install
```

```sh
npm run dev
```


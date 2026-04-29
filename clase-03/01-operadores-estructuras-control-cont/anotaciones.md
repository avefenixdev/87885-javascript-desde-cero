# Subiendo el proyecto a la nube (Hosting)

1. Ingresan a netlify

<https://www.netlify.com/>

2. Detienen el servidor de desarrollo

Ctrl + C

3. Hacen el build -> Crear la carpeta de distribución (dist)

```sh
npm run build
``` 

4. Controlan que todo este bien

```sh
npm run preview
```

5. Arrastran la carpeta dist en la zona de "Upload your project files" en netlify

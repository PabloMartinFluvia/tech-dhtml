# XMLHttpRequest
* Per a fer peticions http des del front
1. crear l’objecte
2. configurar la petició amb el mètode open
    - Important: fer la petició asíncrona
3. Registrar-li un event listener per al event `load`
    - És dispara quan hagi carregat tot el body de la resposta (readyState === 4)
4. Llançar la petició amb el mètode send

## Propietats
1. readyState:  0 = sin inicializar, 1 = abierto, 2 = cabeceras recibidas, 3 = cargando y 4 = completado
2. responseType: si "json" httpRequest.response serà un objecte, ja que internament ja JSON.parse(body content)
3. status: codi de la resposta HTTP
4. response: el contingut del response's body. En format segons com s'hagi indicat en el responseType

## Mètodes
1. open(métodoHttp: String, URL[, asíncrono: boolean [, usuario [, clave]]]). El readyState pasa a 1.
    * Asíncrono: per defecte true
    * métode: GET, POST ...
2. send(). Realitza la petició. El ready state pasa a 2.

## Events
1. onload: handler per a gestionar l'event que es dispara quan el readyState sigui 4 (transacció completada)
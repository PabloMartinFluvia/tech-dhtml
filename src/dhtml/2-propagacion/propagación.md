# Propagación de eventos
- En el cas que un event es dispari en N elements a la vegada → **quins callbacks s’executaran primer???**
    - Concepte: es produeix **un sol event**, pero hi han N elements *pendents* d'aquest event.
    
    Ej: en el cas de “click” tant un element com el seu(s) fill(s)  tenen registrarts un callback per a gestionar el event
    
- per defecte **bubbling →**  primer el del element *més fill/anidat* i després executar el del pare (element que l’engloba)
- si es vol al reves (**trickling**): primer el del element més general/pare/global, i després executar el del fill, etc…. :
    - cal registrar el callback amb: .addEventListener(key, callback, **true**);
        
        ↔ configurar el [usecapture](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#usecapture)
        


- Per a aturar la propagació (en qualsevol dels 2 casos) : event.stopPropagation()
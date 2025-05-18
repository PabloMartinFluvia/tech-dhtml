# Prevent default estaticamente
1. El comportamiento por defecto del evento se ejecuta <b>siempre</b> si "oneventname = callback(event)"
    - independientemente de si el callback devuelve algo o no    
2. Para que el comportamiento por defecto del evento se ejecute según el proceso: "oneventname" = <b>return</b> callback(event)".
    - el callback debe devolver <b>true o false </b>
3. Siguiendo esta logica se puede escribir la decisión "a fuego":
    - "oneventname" = <b>return true o false</b>"
    - e incluso "oneventname = <b>true o false</b>"


# Prevenir el default dinámicamente
1. Al hacer element.addEventListener("eventname", callback)
    - <b>IMPORTANTE</b>: esto hace que el comportamiento por defecto se ejecute <b>siempre</b> ya que equivale a \<tagName oneventname="callback(event)" \>
2. En caso de que se quiera que **NO** se ejecute el comportamiento por defecto del evento según el proceso -> hay que configurarlo en la implementación del callback:
    1. evitar que el comportamiento por defecto del evento se ejecute (al producirse el evento): event.preventDefault();

[Ejemplo con submit en un form](../eventos_especificos/submit/sumbit.md)
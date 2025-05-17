# Registrar el callback estáticamente
1. Para que el action del form se ejecute según el proceso: "submit = <b>return</b> callback(event)".
    - el callback debe devolver <b>true o false </b>
2. Siguiendo esta logica se puede escribir la decisión "a fuego":
    - "submit = <b>return true o false</b>"
    - e incluso "submit = <b>true o false</b>"
3. El action del form se ejecuta <b>siempre</b> si "submit = callback(event)"
    - independientemente de si el callback devuelve algo o no
    - viene a ser como un submit = true, ejecutando el callback

# Registrar el callback dinámicamente
1. hacer formElement.addEventListener("submit", callback)
    - <b>IMPORTANTE</b>: esto hace que el action se ejecute <b>siempre</b> ya que equivale a \<form onsubmit="callback(event)" \>
2. En caso de que se quiera que se ejecute el action según el proceso:
    - hay que configurarlo en la implementación del callback:
    1. evitar que el action del form se ejecute (al producirse el evento submit): event.preventDefault();
    2. realizar el action del form: formElement.submit();
        - este mètodo NO dispara el evento submit
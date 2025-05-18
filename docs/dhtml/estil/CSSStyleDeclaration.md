# Manipulació d'estils:
- Un cop s’ha creat l’arbre DOM (llegir html + aplicar estils css + executar scripts) es pot gestionar l’estil mitjançant [HTMLElement.style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) : [CSSStyleDeclaration](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration)
1. Puc manipular propietats concretes. Ex: element.style.backgroundColor = “red”
2. També es pot setegar una propietat. Ex: element.style.setProperty("background-color", "red")
3. Puc manipular tot el estil aplicat al elemet. Ex: element,style.cssText = "color:red; font-family:Arial, Helvetica, sans-serif;";
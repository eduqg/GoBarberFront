## GoBarber FrontEnd

### Projeto do curso Gostack Rocketseat modulo 9

### Comandos de Desenvolvimento

Para inicializar o projeto.
> yarn create react-app frontgobarber
___

Para configurar eslint
> yarn add eslint -D

> yarn eslint --init

A configuração do eslintrc está diferente nesse projeto.

Para adicionar bibliotecas do Prettier e ESLint
> yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D

> yarn add eslint-import-resolver-babel-plugin-root-import  babel-plugin-root-import -D

Criar arquivo .editorconfig com extensão  Editor config.
___

Adicionar bibliotecas de estilos, rotas e prop-types.
> yarn add styled-components react-router-dom prop-types

> yarn add react-router-dom styled-components prop-types
___

History: para navegação em qualquer tela
> yarn add history
___

Reactotron ReactJS
> yarn add reactotron-react-js

Adicionar nova fonte em global style. Ir na página do google de fontes. Roboto. Select This Font. Pegar em customize o regular 400 e bold 700. Copiar importação no estilo @import. Colocar no arquivo global.js.

@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

___
Para configurar importações mais fáceis de rotas, sem utilizar ..

Quando utilizar, será sempre referenciando a pasta src. Basta importar como:

import Auth from '~/pages/auth'. Com til. A importação funcionará mesmo que mude a pasta que o arquivo está.

> yarn add customize-cra react-app-rewired babel-plugin-root-import -D

Criar arquivo config-overrides.js. Alterar package.json nos scripts para utilizar rewired.

Aqui neste momento são importantes o pacotes eslint-import-resolver-babel-plugin-root-import  babel-plugin-root-import para que o eslint entenda as novas rotas.

Configurar arquivo jsconfig.json para poder acessar pastas novamente clicando com ctrl.
___
Para estilos. darken colors.

> yarn add polished
___
Biblioteca da rocketseat para criar formulários.
> yarn add @rocketseat/unform

___
Para validações de campos utilizar yup. Serve tanto para node quanto para react. Baseado em schemas.

> yarn add yup
___
Adicionar redux para a autenticação. Token e informações de usuário devem ser dados acessiveis por compoenentes.

> yarn add redux redux-saga react-redux reactotron-redux reactotron-redux-saga immer axios

Para testar, ir no reactotron, state e adicionar auth. Ele vai aparecer com o valor inicial definido no reducer, trocar para token: '123' para ter certeza.
___
Para persistir token de usuário autenticado.

> yarn add redux-persist
___
Para toasts

> yarn add react-toastify
___
Fluxo para a criação de funcionalidade:

* Em um module, criar actions de request e success.
* Em pages, importar dispatch e a action a ser chamada.
* Chamar em handleAlgo o request com os parâmetros apropriados.
* Ouvir a request em saga criando método em takeLatest.
___
Para mock de avatares

Abrir api.adorable.io
___
Para icones

> yarn add react-icons
___
Scrollbar de notificações.

> yarn add react-perfect-scrollbar
___
Para datas. Ultima versão.

> yarn add date-fns@next

Para timezones.

> yarn add date-fns-tz
___

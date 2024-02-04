# Estudo de design de responsividade na web

## Estrutura

O HTML é dividido em três tags: `<head>`, `<body>` e `<html>` (que cobre as
outras duas tags).

```html
<html>
  <head>
  </head>
  <body>
    <!-- Seu site -->
  </body>
</html>
```

Porém, iremos estudar a estrutura responsiva de um **site**, que fica dentro do
`<body>`. Essa estrutura, se baseia em 3 partes:

1. Header;
2. Main;
3. Footer.

```html
<body>
  <header>
  </header>
  <main>
  </main>
  <footer>
  </footer>
</body>
```

### Header

O Header é responsável por ser a parte de navegação do site, pode conter
informações do próprio site como logo, links, contatos etc. Também serve como
introdução ao site.

Responsividade:

1. `Logo|Space|NavItems` if NavItems > Space, then `Logo|Space|NavIcon` (just
   tailwind sm)
2. NavIcon button functionality `Logo|Space|NavIcon` if pressed
   `Logo|Space|NavXIcon{V - Navitems}` opens down Navitems. if NavItems < Space
   `Logo|Space|NavItems` (useSate and useEffect).

Ficar no topo:

1. just `position: sticky` and `top: 0`.

### Main

O main é responsável por mostrar o conteúdo principal do site.

### Footer

O footer é responsável pelo rodapé da página. Geralmente, ele contém informações
como créditos, links para informações adicionais, dados de contato ou qualquer
outra informação relacionada ao final da página.

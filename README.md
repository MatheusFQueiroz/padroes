# Qual vem depois?

Jogo de **padrões e sequências** para crianças, com a coruja Lu. Feito para uso em sala de aula, sem pontuação e sem competição.

🎮 **Jogar:** https://padroes.cliick.dev

## Como funciona

- **6 mundos e 36 fases:** Jardim das Cores, Floresta dos Bichos, Praia do Meio, Montanha dos Detetives, Castelo dos Construtores e Céu das Setas.
- **Quatro tipos de desafio:** qual vem depois, qual está faltando no meio, encontre a figura fora do lugar e construa o final da sequência.
- **Sem pontos:** cada fase dá uma figurinha para o álbum, sempre a mesma, não importa quantas tentativas. Errar só pede para olhar de novo, com uma dica que mostra o pedaço que se repete.
- **Pensado para todos:** botão para ouvir a instrução, animações que podem ser desligadas (e já começam desligadas se o aparelho pede menos movimento), sons desligados por padrão, telas sempre iguais de uma fase para a outra.

## Para o professor

- Em **Ajustes**, ative **Todas as fases abertas** para escolher qualquer fase em aula.
- O progresso fica salvo no próprio aparelho (navegador). Cada criança vê só o seu álbum.
- **Recomeçar do zero** apaga o progresso daquele aparelho.

## Rodar localmente

É um site estático. Baixe os arquivos e sirva a pasta com qualquer servidor simples, por exemplo:

```bash
npx serve .
```

Abrir o `index.html` direto do disco funciona, mas as fontes podem não carregar; com um servidor local, tudo carrega.

## Estrutura

| Arquivo | O que é |
|---|---|
| `index.html` | A página do jogo |
| `estilo.css` | Visual e animações |
| `jogo.js` | Fases, figuras e a lógica do jogo |
| `icones.js` | Ícones em SVG, gerados a partir da IconPark |
| `fontes/` | Fredoka e Nunito, para funcionar sem internet |
| `CNAME` | Domínio do GitHub Pages |

Para acrescentar fases, edite a lista `MUNDOS` em `jogo.js`. Cada fase tem o tipo (`next`, `meio`, `erro` ou `construir`), o pedaço que se repete (`u`), o tamanho (`n`) e a figurinha (`f`).

## Créditos e licenças

Veja [CREDITOS.md](CREDITOS.md). Ícones da [IconPark](https://github.com/bytedance/IconPark) (Apache 2.0); fontes [Fredoka](https://fonts.google.com/specimen/Fredoka) e [Nunito](https://fonts.google.com/specimen/Nunito) (OFL).

Faz parte de uma coleção de jogos educativos: [Qual tecnologia resolve?](https://github.com/MatheusFQueiroz/qual-tecnologia), [Invasão das Letras](https://github.com/MatheusFQueiroz/invasao-das-letras), [Pode ou não pode?](https://github.com/MatheusFQueiroz/pode-ou-nao-pode) e [A casa das máquinas](https://github.com/MatheusFQueiroz/casa-das-tecnologias).

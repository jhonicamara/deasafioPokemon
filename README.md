<h3 align="center">
  <b>Desafio Pokemon</b>
</h3>


<p align="center">
  <a href="#-Sobre-o-projeto">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Executando o projeto</a>
</p>

<h1 align="center">
	<img alt="Demo" src=".github/demo.gif" width="50%" />
</h1>


## ⚡ Sobre o desafio

Esta aplicação em React Native tem como objetivo o desenvolvimento de um mini aplicativo que consulta a API pública (https://pokeapi.co/) e exibe os resultados de maneira amigável e interativa.

Aqui estão os principais requisitos do aplicativo:

1. Listagem de Pokémon: Implementação de uma funcionalidade para listar os Pokémons em cards. Essa lista deve ser paginável para facilitar a 
navegação.

2. Pesquisa por Nome: Permitir a pesquisa de Pokémon pelo nome.

3. Detalhes do Pokémon: Ao clicar em um card, o aplicativo deve exibir os dados básicos do Pokémon.

### Listagem de Pokémon
Na implementação da listagem de pokémons, optei por utilizar a rota de paginação sugerida pela Pokémon API
 (https://pokeapi.co/docs/v2#resource-listspagination-section). No entanto, durante essa integração, observei a ausência de informações cruciais sobre os pokémons na resposta da API de listagem, como estatísticas detalhadas e outros atributos relevantes.

Para contornar essa limitação, desenvolvi uma solução ao extrair o ID do Pokémon da URL fornecida pela resposta da API. Com base nesse ID, construí um link para recuperar a imagem correspondente do Pokémon na base de imagens hospedada no GitHub. Essa abordagem visa otimizar o desempenho, eliminando a necessidade de realizar chamadas adicionais à API apenas para obter as imagens dos pokémons.

Entretanto, reconheço que essa estratégia atende apenas parcialmente às necessidades do sistema. A fim de aprimorar a experiência do usuário de maneira abrangente e reduzir a dependência de chamadas adicionais à API, sugiro que o time de backend enriqueça os dados disponíveis na rota de listagem/paginação dos pokémons. Essa expansão de informações não só atenderá aos requisitos específicos da listagem, mas também contribuirá para a eficiência global do sistema, minimizando custos e melhorando a eficácia operacional.

Para a paginação, optei por utilizar o contexto de scroll inifito, visando fazer com que o usuário usasse o aplicativo de forma contínua e proporcionar uma transição suave entre os conjuntos de dados de pokémons, sem a necessidade de ações manuais para carregar páginas adicionais.

Dessa forma, ao integrar o contexto de scroll infinito à paginação, busca-se não apenas manter o usuário imerso na aplicação, mas também garantir uma gestão eficiente dos recursos, promovendo um equilíbrio adequado entre a experiência do usuário e a eficiência operacional do sistema.

### Pesquisa do nome
Na implementação da pesquisa de nomes de pokémons, identifiquei que a Pokémon API não disponibiliza uma rota específica para essa finalidade. Diante desse cenário, adotei a estratégia de recuperar todos os pokémons disponíveis e, em seguida, realizar a filtragem com base no valor inserido pelo usuário no campo de input.

Com o intuito de evitar chamadas excessivas à API e otimizar o desempenho do sistema, implementei um timeout de 500 milissegundos no momento que o usuário digita algo no input antes de ser feita a requisição.

Essa medida visa evitar requisições consecutivas à API, proporcionando uma gestão mais eficiente das consultas e contribuindo para a estabilidade do aplicativo.

Essa abordagem, embora contorne a ausência de uma rota dedicada para a pesquisa de nomes, busca garantir uma experiência de usuário mais eficaz, equilibrando a obtenção de dados necessários e a minimização de chamadas desnecessárias à API.

### Detalhes do Pokémon
Na elaboração da funcionalidade de detalhes do Pokémon, criei a dinâmica em que, ao usuário clicar no card de um Pokémon na listagem, ele é redirecionado para uma tela dedicada. Nessa tela, são recuperadas informações específicas do Pokémon selecionado e apresentadas ao usuário, juntamente com a imagem destacada do Pokémon.

Essa abordagem visa oferecer uma experiência mais detalhada e imersiva, permitindo que o usuário explore informações específicas sobre um Pokémon ao clicar em seu card. A integração de uma tela exclusiva para os detalhes proporciona uma apresentação mais organizada e focada, destacando as informações relevantes de forma clara e concisa.

Assim, ao implementar essa funcionalidade, busquei garantir que a transição do usuário para a tela de detalhes fosse intuitiva e enriquecedora, proporcionando uma visualização ampliada das características do Pokémon selecionado.

## 🚀 Tecnologias

Tecnologias utilizadas neste projeto em React Native

- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Axios](https://github.com/axios/axios)

## 💻 Executando o projeto

### Requisitos

- Ter Android Studio e o Java Development Kit 17 ou Xcode 15 e as command lines instalada em sua máquina para executar o projeto tanto no Android quanto no IOS.

**Faça o clone do projeto e acesse a pasta**

```bash
$ git clone https://github.com/jhonicamara/desafioPokemon.git desafioPokemon && cd desafioPokemon
```

**Siga os passos a seguir**

```bash
# Instale as dependências
$ yarn

# Certifique-se que o arquivo src/services/api.js contém o IP da API.

# Se for executar o projeto em um emulador Android, execute este comando:
$ yarn android

# Se for executar o projeto em um emulador IOS, execute este comando:
$ yarn ios

# Pronto, projeto executando!
```
---

Feito por João Câmara 👋 [Veja meu Linkedin](www.linkedin.com/in/joaocamara01)

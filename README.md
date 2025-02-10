## Execução automática com GitHub Actions

Os testes são executados automaticamente em cada push ou pull request para a branch `main`.

Os resultados incluem tempo de resposta e uso da CPU durante a execução.

## Analisando os resultados

Após a execução, os tempos de resposta e uso da CPU podem ser visualizados no terminal. Para análises mais detalhadas, recomenda-se a integração com o Grafana e Prometheus.

## Configuração no Node.js

1. Inicialize um projeto Node.js:
   ```sh
   npm init -y
   ```
2. Instale o k6 como dependência de desenvolvimento:
   ```sh
   npm install --save-dev k6
   ```

## Estrutura do Repositório
```
/
├── test.js  # Script de teste com k6
├── package.json  # Configuração do projeto Node.js
├── package-lock.json  # Controle de versões das dependências
├── .gitignore  # Arquivos a serem ignorados pelo Git
├── results/  # Pasta para armazenar resultados dos testes
└── .github/workflows/k6_test.yml  # Configuração do GitHub Actions
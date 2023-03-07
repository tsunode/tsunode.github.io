# Passo 1
- Criar um repositório no formato: nome_usuario.github.io

# Passo 2
- Você precisa manter uma branch separada da principal
- Principal vai servir código transpilado, ou seja, o build

# Passo 3
- Na branch criada você precisará instalar o pacote gh-pages

# Passo 4
- Você precisa criar um script no seu package.json
- "deploy": "pnpm run build && gh-pages -b master -d dist"

# Passo 5
- Execute o comando e seja feliz.

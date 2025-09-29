# 🚀 SAAS Cobrança - Hospedagem GitHub Pages

Esta pasta contém todos os arquivos necessários para hospedar seu SAAS de Cobrança no GitHub Pages de forma simples e automatizada.

## 📁 Estrutura da Pasta

```
SAAS-Cobranca-GitHub-Pages/
├── 📄 README.md              # Este arquivo
├── 📦 package.json           # Configurações do projeto
├── 🔧 copy-build.js          # Script para copiar arquivos de build
├── 🚀 deploy.bat             # Script de deploy (Windows)
├── 🚀 git-deploy.bat         # Script de deploy completo com Git
├── 🚫 .gitignore             # Arquivos ignorados pelo Git
├── 🔒 .nojekyll              # Desabilita Jekyll no GitHub Pages
├── 🌐 CNAME                  # Domínio personalizado (opcional)
└── [arquivos do build]       # Arquivos gerados automaticamente
```

## 🎯 Como Usar

### 1️⃣ Primeira Configuração

1. **Crie um repositório no GitHub:**
   - Vá para [GitHub](https://github.com) e crie um novo repositório
   - Nome sugerido: `SAAS-Cobranca-GitHub-Pages`
   - Marque como **público** (necessário para GitHub Pages gratuito)

2. **Inicialize o Git nesta pasta:**
   ```bash
   cd SAAS-Cobranca-GitHub-Pages
   git init
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/SAAS-Cobranca-GitHub-Pages.git
   ```

### 2️⃣ Deploy Automático

#### Opção A: Deploy Simples (Windows)
```bash
# Execute o arquivo deploy.bat
deploy.bat
```

#### Opção B: Deploy Completo com Git (Windows)
```bash
# Execute o arquivo git-deploy.bat
git-deploy.bat
```

#### Opção C: Deploy Manual
```bash
# 1. Fazer build do projeto principal
cd ..
npm run build

# 2. Voltar para pasta de hospedagem
cd SAAS-Cobranca-GitHub-Pages

# 3. Copiar arquivos
node copy-build.js

# 4. Commit e push
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

### 3️⃣ Configurar GitHub Pages

1. Vá para as **Settings** do seu repositório no GitHub
2. Navegue até **Pages** no menu lateral
3. Em **Source**, selecione **Deploy from a branch**
4. Escolha **main** branch e **/ (root)**
5. Clique em **Save**

## 🌐 Acessando seu SAAS

Após o deploy, seu SAAS estará disponível em:
```
https://SEU_USUARIO.github.io/SAAS-Cobranca-GitHub-Pages/
```

## ⚙️ Configurações Importantes

### Domínio Personalizado (Opcional)
Se você tem um domínio próprio:
1. Edite o arquivo `CNAME` e adicione seu domínio
2. Configure o DNS do seu domínio para apontar para GitHub Pages

### Variáveis de Ambiente
⚠️ **IMPORTANTE**: Configure as variáveis de ambiente do Supabase:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

Essas devem ser configuradas no projeto principal antes do build.

## 🔄 Atualizações

Para atualizar seu SAAS hospedado:

1. Faça as alterações no projeto principal
2. Execute `deploy.bat` ou `git-deploy.bat`
3. Aguarde alguns minutos para o GitHub Pages atualizar

## 🛠️ Solução de Problemas

### Erro: "Diretório de origem não encontrado"
- Execute `npm run build` no projeto principal primeiro

### Erro: "Git não inicializado"
- Execute `git init` na pasta de hospedagem
- Configure o repositório remoto

### Página não carrega corretamente
- Verifique se o arquivo `.nojekyll` existe
- Confirme se as variáveis de ambiente estão corretas
- Verifique se o base path está configurado corretamente no `vite.config.ts`

### Build falha
- Verifique se todas as dependências estão instaladas no projeto principal
- Execute `npm install` no projeto principal se necessário

## 📞 Suporte

Se encontrar problemas:
1. Verifique os logs de erro no terminal
2. Confirme se todos os arquivos foram copiados corretamente
3. Verifique as configurações do GitHub Pages
4. Teste localmente com `npm run preview` no projeto principal

## 🎉 Pronto!

Agora você tem uma pasta completamente configurada para hospedar seu SAAS no GitHub Pages. Basta arrastar os arquivos para esta pasta usando os scripts automatizados e fazer o deploy!
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Caminhos
const sourceDir = path.join(__dirname, '..', 'dist');
const targetDir = __dirname;

// Função para copiar diretório recursivamente
function copyDir(src, dest) {
  if (!fs.existsSync(src)) {
    console.error(`❌ Diretório de origem não encontrado: ${src}`);
    console.log('💡 Execute primeiro: npm run build no projeto principal');
    process.exit(1);
  }

  // Criar diretório de destino se não existir
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      // Não copiar arquivos que já existem na pasta de hospedagem
      if (!['package.json', 'copy-build.js', 'README.md', '.gitignore'].includes(entry.name)) {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }
}

console.log('🚀 Iniciando cópia dos arquivos de build...');

try {
  // Limpar arquivos antigos (exceto arquivos de configuração)
  const currentFiles = fs.readdirSync(targetDir);
  const filesToKeep = ['package.json', 'copy-build.js', 'README.md', '.gitignore', '.git'];
  
  currentFiles.forEach(file => {
    if (!filesToKeep.includes(file)) {
      const filePath = path.join(targetDir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        fs.rmSync(filePath, { recursive: true, force: true });
      } else {
        fs.unlinkSync(filePath);
      }
    }
  });

  // Copiar novos arquivos
  copyDir(sourceDir, targetDir);
  
  console.log('✅ Arquivos copiados com sucesso!');
  console.log('📁 Arquivos prontos para deploy no GitHub Pages');
  console.log('');
  console.log('📋 Próximos passos:');
  console.log('1. Inicialize um repositório Git nesta pasta');
  console.log('2. Adicione os arquivos ao Git');
  console.log('3. Faça push para o GitHub');
  console.log('4. Configure GitHub Pages nas configurações do repositório');
  
} catch (error) {
  console.error('❌ Erro ao copiar arquivos:', error.message);
  process.exit(1);
}
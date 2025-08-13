# 🚀 Roteiro de Instalação - Ambiente React Native para Laboratórios

## 📋 Pré-requisitos do Sistema
- **Sistema Operacional**: Windows 10/11 (64-bit)
- **Memória RAM**: Mínimo 8GB (recomendado 16GB)
- **Espaço em Disco**: Mínimo 10GB livres
- **Processador**: Intel/AMD 64-bit compatível
- **Resolução**: Mínimo 1366x768

## 🔧 1. Instalação do Node.js

### Download e Instalação
- Baixar a versão LTS mais recente em: 🔗 [https://nodejs.org/pt](https://nodejs.org/pt)
- **IMPORTANTE**: Manter marcada a opção "Add to PATH" durante a instalação

-- Se necessário, verifique o anexo 1 sobre como configurar variáveis de ambiente manualmente.

### Verificação Pós-Instalação pelo PowerShell do Windows
```bash
# Verificar versão do Node.js
node -v
# Deve exibir: v20.10.0 (ou versão similar)

# Verificar versão do npm
npm -v
# Deve exibir: 10.2.4 (ou versão similar)

# Verificar se está no PATH (Windows)
Get-Command node
Get-Command npm
```

## 📚 2. Instalação do Git

### Download e Instalação
- Baixar em: 🔗 [https://git-scm.com/downloads](https://git-scm.com/downloads)
- Manter todas as opções padrão recomendadas durante a instalação

### Verificação Pós-Instalação pelo PowerShell do Windows
```bash
git --version
# Deve exibir: git version 2.45.0 (ou versão similar)

# Verificar configuração básica
git config --global --list
```

## 💻 3. Instalação do Visual Studio Code

### Download e Instalação
- Baixar em: 🔗 [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Instalar com todas as opções padrão

### Extensões Essenciais para React Native
Após a instalação, abrir o VS Code e instalar via Ctrl+Shift+X:
- **React Native Tools** (Microsoft)
- **ES7+ React/Redux/React-Native snippets**
- **Prettier - Code formatter**
- **Auto Rename Tag**

### Verificação Pós-Instalação
- VS Code abre normalmente
- Extensões aparecem na lista (Ctrl+Shift+X)
- Comando "code ." funciona no terminal

## ⚡ 4. Instalação do Expo CLI

### Instalação Global pelo PowerShell do Windows
```bash
npm install -g expo-cli
```

### Verificação Pós-Instalação pelo PowerShell do Windows
```bash
expo --version
# Deve exibir versão como: 6.3.2

# Teste de criação de projeto
npx create-expo-app teste-instalacao
cd teste-instalacao
npm start
# Deve abrir o servidor Expo no navegador
```

## ☕ 5. Instalação do Java SE JDK 23

### Download e Instalação
- Baixar em: 🔗 [https://download.oracle.com/java/23/latest/jdk-23_windows-x64_bin.exe](https://download.oracle.com/java/23/latest/jdk-23_windows-x64_bin.exe)
- **CRÍTICO**: Confirmar que "Add to PATH" está marcado

### Verificação Pós-Instalação pelo PowerShell do Windows
```bash
java -version
# Deve exibir: java version "23.0.1" (ou versão similar)

javac -version
# Deve exibir versão do compilador

echo %JAVA_HOME%
# Deve mostrar o caminho da instalação Java
```

## 🤖 6. Instalação do Android Studio

### Download e Instalação
- Baixar em: 🔗 [https://developer.android.com/studio?hl=pt-br](https://developer.android.com/studio?hl=pt-br)
- Durante a instalação, **OBRIGATÓRIO** instalar:
  - ✅ Android SDK
  - ✅ Android SDK Platform-Tools
  - ✅ Android Emulator
  - ✅ Pelo menos uma imagem Android (API 34 - Android 14)

### Configuração Pós-Instalação
1. Abrir Android Studio
2. Ir em **More Actions** → **SDK Manager**
3. Verificar se os pacotes estão instalados
4. Em **SDK Tools**, garantir que estão marcados:
   - Android SDK Build-Tools
   - Android SDK Command-line Tools
   - Android Emulator
   - Android SDK Platform-Tools

### Criação do Emulador
1. **More Actions** → **Virtual Device Manager**
2. **Create Device** → **Pixel 5** → **Next**
3. Selecionar **Android 14 (API 34)** → **Finish**
4. Iniciar o dispositivo e confirmar funcionamento

## ✅ Checklist Final de Verificação

Execute cada comando e confirme que retorna versão:

```bash
# ✅ Verificações básicas pelo PowerShell do Windows
node -v          → versão aparece
npm -v           → versão aparece
git --version    → versão aparece
expo --version   → versão aparece
java -version    → versão aparece

# ✅ Verificações de PATH - PowerShell
Get-Command node
Get-Command java
Get-Command git

```

## 🚨 Solução de problemas Comum

### Problema: "node não é reconhecido"
**Solução**: Reiniciar o terminal após instalação do Node.js

### Problema: "java não é reconhecido"
**Solução**: Verificar se JAVA_HOME está configurado corretamente

### Problema: Comandos não são reconhecidos no PATH
**Solução**: Configurar variáveis de ambiente manualmente conforme orientação do anexo 1

### Problema: Emulador não inicia
**Solução**: Verificar se Intel HAXM está instalado e habilitado na BIOS

### Problema: Expo não funciona
**Solução**: Verificar se firewall não está bloqueando a porta 19000

## 📝 Notas para TI

- **Reiniciar** cada computador após todas as instalações
- **Verificar** se antivírus não está bloqueando instalações
- **Testar** em um computador antes de replicar para todos
- **Documentar** qualquer erro específico encontrado



## ANEXO 1  - 🔧 Configuração Manual de Variáveis de Ambiente

### Se os comandos não funcionarem, configurar manualmente:

1. **Abrir Configurações do Sistema**:
   - Pressionar `Windows + R`
   - Digitar `sysdm.cpl` e pressionar Enter
   - Clicar em **Variáveis de Ambiente**

2. **Configurar PATH**:
   - Em **Variáveis do Sistema**, selecionar **Path** → **Editar**
   - **Adicionar** os seguintes caminhos:
     ```
     C:\Program Files\nodejs\
     C:\Program Files\Java\jdk-23\bin\
     C:\Program Files\Git\bin\
     C:\Users\[USERNAME]\AppData\Local\Android\Sdk\platform-tools\
     ```

3. **Configurar JAVA_HOME**:
   - Em **Variáveis do Sistema**, clicar **Novo**
   - **Nome da variável**: `JAVA_HOME`
   - **Valor da variável**: `C:\Program Files\Java\jdk-23`

4. **Configurar ANDROID_HOME**:
   - Em **Variáveis do Sistema**, clicar **Novo**
   - **Nome da variável**: `ANDROID_HOME`
   - **Valor da variável**: `C:\Users\[USERNAME]\AppData\Local\Android\Sdk`

5. **Reiniciar** o computador após as configurações

**Nota**: Substituir `[USERNAME]` pelo nome do usuário atual do Windows

---
*Roteiro atualizado para configuração de laboratório - React Native*


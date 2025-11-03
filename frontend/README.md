# Sistema de Lembrete de Medicamentos

Sistema que avisa os usuários nos horários marcados para tomar medicamentos.

## Tecnologias

- React 18.3.1
- TypeScript 5.6.3
- Vite 5.4.11
- TailwindCSS 3.4.14
- React Router DOM 6.26.2
- TanStack Query 5.59.20
- Axios 1.7.7
- Zustand 5.0.1
- React Hook Form 7.53.1
- Zod 3.23.8

## Estrutura do Projeto

```
src/
├── app/                    # Configuração da aplicação
│   ├── main.tsx           # Entry point
│   ├── App.tsx            # Componente raiz
│   ├── providers.tsx      # Providers globais
│   └── router.tsx         # Configuração de rotas
├── core/                  # Componentes e lógica compartilhada
│   ├── components/        # Componentes UI genéricos
│   ├── lib/              # Configurações de bibliotecas
│   ├── types/            # Types globais
│   └── utils/            # Funções utilitárias
├── domain/               # Domínios de negócio
├── pages/                # Páginas da aplicação
│   ├── layouts/          # Layouts compartilhados
│   ├── Home/             # Página inicial
│   └── NotFound/         # Página 404
└── assets/               # Assets estáticos
    └── styles/           # Estilos globais
```

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

Acesse http://localhost:3000

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Variáveis de Ambiente

Crie um arquivo `.env` baseado no `.env.example`:

```
VITE_API_URL=http://localhost:3001
VITE_API_VERSION=v1
VITE_API_TIMEOUT=30000
```

## Funcionalidades Principais

- Gerenciamento completo de medicamentos
- Configuração de lembretes personalizados
- Notificações nos horários programados
- Confirmação de doses tomadas
- Histórico de administração
- Compartilhamento com cuidadores
- Alertas de estoque baixo

## Padrões de Código

- TypeScript strict mode habilitado
- ESLint configurado
- Componentes funcionais com hooks
- Separação clara de responsabilidades
- Documentação JSDoc em todos os componentes
- Nomenclatura consistente (PascalCase para componentes, camelCase para funções)

## Licença

MIT
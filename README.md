# Mi Portafolio

Portfolio personal desarrollado con Angular, diseño minimalista y moderno con tema claro/oscuro, internacionalización (ES/EN), y despliegue en Netlify.

## 🚀 Características

- **Diseño Minimalista**: Paleta de colores sobria y elegante
- **Modo Claro/Oscuro**: Persistente en localStorage
- **Internacionalización**: Soporte completo español/inglés
- **Componentes Standalone**: Arquitectura moderna de Angular
- **Proyectos desde GitHub**: Integración con GitHub API
- **Formulario de Contacto**: Integrado con EmailJS
- **Responsive**: Optimizado para todos los dispositivos
- **Animaciones Suaves**: Transiciones elegantes

## 🛠️ Tecnologías

- Angular 17+
- TypeScript
- SCSS
- ngx-translate
- EmailJS
- GitHub API

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/TU_USUARIO/mi-portafolio.git

# Entrar al directorio
cd mi-portafolio

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
```

## ⚙️ Configuración

### 1. Proyectos de GitHub

Edita `src/app/components/projects/projects.component.ts`:

```typescript
// Configura tu nombre de usuario de GitHub
this.githubService.setUsername('TU_USUARIO_GITHUB');

// Lista de repositorios específicos que quieres mostrar
const reposToShow = [
  'nombre-repo-1',
  'nombre-repo-2',
  // Añade más aquí
];
```

### 2. EmailJS (Formulario de Contacto)

1. Crea una cuenta en [EmailJS](https://www.emailjs.com/)
2. Crea un servicio y plantilla de email
3. Configura las credenciales en `src/app/components/contact/contact.component.ts`:

```typescript
private readonly SERVICE_ID = 'TU_SERVICE_ID';
private readonly TEMPLATE_ID = 'TU_TEMPLATE_ID';
private readonly USER_ID = 'TU_USER_ID';
```

### 3. Personalización

- **Hero**: Edita `src/app/components/hero/hero.component.ts` (cambiar "Tu Nombre")
- **Sobre mí**: Edita `src/app/components/about/about.component.ts` (tecnologías)
- **Footer**: Edita `src/app/components/footer/footer.component.ts` (links sociales)
- **Traducciones**: Edita archivos en `src/assets/i18n/`

## 🚀 Deploy en Netlify

### Opción 1: Deploy Manual

```bash
# Crear build de producción
npm run build

# El resultado estará en dist/mi-portafolio/browser/
# Arrastra esta carpeta a Netlify
```

### Opción 2: Deploy Automático (Recomendado)

1. Sube el código a GitHub
2. Conecta tu repositorio en Netlify
3. Configuración automática (ya incluye `netlify.toml`)

### Configuración del Build

Ya incluido en `netlify.toml`:
- Build command: `npm run build`
- Publish directory: `dist/mi-portafolio/browser`
- Node version: 18

## 📝 Scripts Disponibles

- `npm start` - Inicia servidor de desarrollo
- `npm run build` - Crea build de producción
- `npm run watch` - Build en modo watch
- `npm test` - Ejecuta tests

## 📄 Licencia

MIT License - feel free to use this template for your own portfolio!

## 🙏 Créditos

- Diseño inspirado en tendencias minimalistas modernas
- Iconos y animaciones personalizadas
- Tipografía: Inter (Google Fonts)

---

**¡Disfruta tu nuevo portfolio! 🎉**
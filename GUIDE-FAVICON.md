# Guide pour créer les favicons avec votre logo

## 📋 Formats nécessaires

Pour utiliser votre logo `logo.png` comme favicon, vous devez créer les formats suivants :

### Formats à créer :

1. **favicon.ico** - Format classique (16x16, 32x32, 48x48)
2. **favicon-16x16.png** - 16x16 pixels
3. **favicon-32x32.png** - 32x32 pixels
4. **apple-touch-icon.png** - 180x180 pixels (pour iOS)
5. **favicon-192x192.png** - 192x192 pixels (Android)
6. **favicon-512x512.png** - 512x512 pixels (PWA)

## 🛠️ Comment créer les favicons :

### Option 1 : Outil en ligne (Realfavicon)

1. Allez sur https://realfavicongenerator.net/
2. Upload votre logo.png
3. Configurez les options :
   - iOS : Cocher "iOS"
   - Android : Cocher "Android Chrome"
   - PWA : Cocher "Generate icons for Android Chrome"
4. Cliquez sur "Generate"
5. Téléchargez le package
6. Extrayez les fichiers dans `/frontend/public/`

### Option 2 : Photoshop / GIMP

1. Ouvrez logo.png dans Photoshop ou GIMP
2. Créez des nouveaux fichiers aux dimensions suivantes :
   - 16x16
   - 32x32
   - 180x180
   - 192x192
   - 512x512
3. Redimensionnez et exportez en PNG
4. Pour favicon.ico, utilisez un convertisseur en ligne

### Option 3 : Terminal (si vous avez ImageMagick)

```bash
# Installer ImageMagick si nécessaire
# macOS: brew install imagemagick
# Linux: sudo apt-get install imagemagick

# Créer les favicons
cd frontend/public
convert logo.png -resize 16x16 favicon-16x16.png
convert logo.png -resize 32x32 favicon-32x32.png
convert logo.png -resize 180x180 apple-touch-icon.png
convert logo.png -resize 192x192 favicon-192x192.png
convert logo.png -resize 512x512 favicon-512x512.png

# Créer le favicon.ico (pour Windows)
convert logo.png -resize 16x16 -resize 32x32 -resize 48x48 favicon.ico
```

## 📁 Structure finale dans `/public` :

```
frontend/public/
├── favicon.ico
├── favicon-16x16.png
├── favicon-32x32.png
├── favicon-192x192.png
├── favicon-512x512.png
├── apple-touch-icon.png
└── logo.png
```

## ✅ C'est déjà configuré !

J'ai déjà ajouté les métadonnées dans `app/layout.jsx` pour ces favicons. Il vous suffit de créer les fichiers image et de les placer dans `/public/`.

## 🚀 Test

Une fois les fichiers créés, le favicon apparaîtra automatiquement dans :

- L'onglet du navigateur
- Les favoris
- Les raccourcis de bureau
- Les applications iOS/Android

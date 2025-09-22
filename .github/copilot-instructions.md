# Pascal Helmerich Personal Portfolio Website

Pascal Helmerich's personal portfolio is a static HTML/CSS/JavaScript website hosted on GitHub Pages. The site showcases personal projects including game development work and uses modern CSS features for responsive design and animations.

**Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## Working Effectively

### Quick Start - Bootstrap and Run
- **No build steps required** - This is a static website that runs directly in the browser
- **Run locally for development**:
  - `cd /home/runner/work/pascal-helmerich/pascal-helmerich`
  - `python3 -m http.server 8000` (takes ~10ms to start - INSTANT)
  - **NEVER CANCEL** - Server starts immediately but may appear to hang. Wait at least 5 seconds.
  - Navigate to `http://localhost:8000` to view the site
  - Use `Ctrl+C` or `pkill -f "python3 -m http.server"` to stop the server

### Validation and Testing
- **HTML validation**: `npx htmlhint index.html` (takes ~15ms - INSTANT)
- **CSS validation**: CSS files are standards-compliant, no special linting currently configured
- **Visual testing**: Always open `http://localhost:8000` in a browser after making changes
- **Manual validation scenarios**:
  - Load the homepage and verify the portrait image displays correctly
  - Test navigation by clicking on PawsOntheWire icons - should scroll to game section
  - Verify responsive design by resizing browser window to mobile sizes
  - Test hover animations on navigation icons (wiggle effect)
  - Ensure external game link works: click "Jetzt Spielen" button

### Site Structure
- **Main file**: `index.html` - Single-page application with all content
- **CSS organization**:
  - `css/reset.css` - Modern CSS reset based on Piccalilli
  - `css/portrait.css` - Fixed bottom portrait image and navigation icons
  - `css/projects.css` - Project showcase sections with responsive design  
  - `css/arrow.css` - Animated SVG arrow between sections
- **Assets**: `portrait.png`, `pawsonthewire.png` (large image files)
- **Domain**: Hosted at `1.pascal-helmerich.de` (configured via `CNAME` file)

## Development Guidelines

### Making Changes
- **Always test locally first**: Start HTTP server before making changes
- **Browser compatibility**: Uses modern CSS features (CSS Grid, Flexbox, CSS Variables)
- **Mobile-first approach**: Site uses responsive design with mobile breakpoints
- **German content**: Site content is in German - maintain language consistency

### Key Components to Understand
- **Fixed bottom portrait**: Uses complex CSS positioning with semicircle background
- **Navigation icons**: Positioned absolutely around the portrait with hover animations
- **Responsive sections**: Desktop and mobile layouts handled via CSS media queries
- **Animations**: CSS animations for arrow drawing, icon wiggling, and text fade-ins

### GitHub Pages Deployment
- **Automatic deployment**: Changes to `main` branch auto-deploy via GitHub Pages
- **Custom domain**: Site uses `1.pascal-helmerich.de` domain
- **No build process**: Static files are served directly from repository root

## Validation Scenarios

### Required Testing After Changes
1. **Load homepage**: `python3 -m http.server 8000` then visit `http://localhost:8000`
2. **Portrait display**: Verify the portrait image loads and semicircle background appears correctly
3. **Navigation functionality**: Click PawsOntheWire icons to test anchor navigation to `#pawsonthewire`
4. **Responsive behavior**: Test at mobile width (400px) and desktop width (1200px+)
5. **External links**: Verify the game link (`https://raevren.github.io/hetznergamejam2025/`) opens correctly
6. **Animation testing**: Hover over navigation icons to test wiggle animation

### Performance Expectations
- **Server startup**: ~10ms (INSTANT - NEVER CANCEL)
- **Page load**: <100ms for local development
- **HTML validation**: ~15ms (INSTANT - NEVER CANCEL)

## Common Tasks

### File Operations
```bash
# Repository root contents
ls -la
# Output:
# .git/
# .github/
# CNAME
# css/
# index.html  
# pawsonthewire.png
# portrait.png

# CSS directory contents
ls css/
# Output:
# arrow.css
# portrait.css  
# projects.css
# reset.css
```

### Development Workflow
```bash
# 1. Start development server
python3 -m http.server 8000

# 2. In another terminal, validate HTML
npx htmlhint index.html

# 3. Make changes to files
# 4. Refresh browser to see changes
# 5. Stop server when done
pkill -f "python3 -m http.server"
```

### Quick Content Overview
- **Title**: "Pascal Helmerich"
- **Tagline**: "Kreativität & Code – meine digitale Spielwiese" 
- **Featured project**: "Paws on the Wire" - Browser game from Hetzner GameJam 2025
- **Technologies**: HTML5, CSS3, responsive design, CSS animations
- **Hosting**: GitHub Pages with custom domain

## Troubleshooting

### Common Issues
- **Fonts not loading locally**: External Google Fonts may be blocked in development - this is normal
- **Images not loading**: Ensure `portrait.png` and `pawsonthewire.png` exist in root directory
- **CSS not applying**: Check file paths in `index.html` link tags are correct
- **Responsive layout broken**: Test CSS media queries at different viewport sizes

### File Structure Validation
```bash
# Ensure all required files exist
test -f index.html && test -f CNAME && test -d css && echo "Core files present" || echo "Missing files"

# Check CSS files
ls css/*.css | wc -l
# Should output: 4

# Verify image assets
ls *.png | wc -l  
# Should output: 2
```

This repository requires no build tools, dependency management, or complex deployment processes. Changes are immediately visible by refreshing the browser during local development.
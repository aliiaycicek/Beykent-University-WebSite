# Responsive Design Rules - Beykent University Website

## 🚨 CRITICAL RULES - NEVER BREAK THESE

### 1. Mobile-First Approach
- **ALWAYS** start with mobile design (320px+)
- Use `min-width` media queries, not `max-width`
- Test on actual mobile devices, not just browser dev tools

### 2. Breakpoint Standards
```css
xs: 475px   /* Extra small phones */
sm: 640px   /* Small phones */
md: 768px   /* Tablets */
lg: 1024px  /* Small laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large screens */
```

### 3. Typography Scaling
- **NEVER** use fixed large font sizes without responsive variants
- **ALWAYS** provide mobile-appropriate font sizes
- Use progressive scaling: `text-base sm:text-lg md:text-xl lg:text-2xl`

### 4. Spacing & Layout
- **ALWAYS** use responsive padding/margins: `px-4 sm:px-6 lg:px-8`
- **NEVER** use fixed widths without responsive alternatives
- Use `w-full` for mobile, then specific widths for larger screens

### 5. Button & Interactive Elements
- **MINIMUM** touch target: 44px x 44px (iOS/Android standard)
- **ALWAYS** make buttons full-width on mobile: `w-full sm:w-auto`
- Use appropriate padding: `px-6 sm:px-8 py-3 sm:py-4`

### 6. Images & Media
- **ALWAYS** use `object-cover object-center` for hero images
- Set min/max heights to prevent layout breaks: `min-h-[600px] max-h-[900px]`
- Use responsive image sizing

### 7. Container & Content Width
- **NEVER** exceed viewport width without horizontal scroll
- Use `max-w-*` classes with responsive variants
- Add horizontal padding to prevent edge touching: `px-4 sm:px-6 lg:px-8`

## 🔧 Implementation Checklist

### Before Any UI Component:
- [ ] Design mobile version first (320px-640px)
- [ ] Add tablet version (640px-1024px)
- [ ] Add desktop version (1024px+)
- [ ] Test on actual devices
- [ ] Verify touch targets are 44px minimum
- [ ] Check text readability on small screens
- [ ] Ensure no horizontal scroll on any breakpoint

### Hero Section Specific Rules:
- [ ] Use responsive height: `h-screen min-h-[600px] max-h-[900px]`
- [ ] Progressive font scaling for headlines
- [ ] Stack buttons vertically on mobile
- [ ] Adequate padding on all sides
- [ ] Background image properly positioned

### Common Mistakes to Avoid:
- ❌ Using only `md:` or `lg:` breakpoints
- ❌ Fixed font sizes like `text-6xl` without mobile variants
- ❌ Buttons without full-width mobile versions
- ❌ Missing horizontal padding
- ❌ Text too small on mobile
- ❌ Touch targets smaller than 44px
- ❌ Content wider than viewport

## 🧪 Testing Protocol

### Required Tests:
1. **iPhone SE (375px)** - Smallest modern phone
2. **iPhone 12/13 (390px)** - Standard phone
3. **iPad (768px)** - Tablet portrait
4. **iPad Landscape (1024px)** - Tablet landscape
5. **Desktop (1280px+)** - Standard desktop

### Testing Tools:
- Chrome DevTools responsive mode
- Firefox responsive design mode
- Real device testing (preferred)
- BrowserStack for cross-device testing

## 📱 Emergency Mobile Fix Checklist

If mobile layout is broken:
1. Add `w-full` to containers
2. Use `text-sm sm:text-base md:text-lg` for text
3. Add `px-4 sm:px-6 lg:px-8` for horizontal spacing
4. Make buttons `w-full sm:w-auto`
5. Use `flex-col sm:flex-row` for button groups
6. Add `min-h-[400px]` to prevent collapsed sections
7. Use `object-cover object-center` for images

## 🎯 Performance Considerations

- Use `priority` prop for above-fold images
- Implement lazy loading for below-fold content
- Optimize images for different screen densities
- Use appropriate image formats (WebP, AVIF)

---

**Remember: A broken mobile experience = lost users. Always prioritize mobile responsiveness!**
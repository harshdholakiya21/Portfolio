# Customization Guide

Complete guide to personalize your portfolio.

## 🎯 Priority Changes (Do First!)

### 1. Your Name & Title
**File**: `src/components/Home.jsx` (Line 15-20)

```jsx
// Change from:
<h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
  Your Name
</h1>

// To:
<h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
  John Doe
</h1>
```

**File**: `src/components/Home.jsx` (Line 25-30)

```jsx
// Change from:
<Typewriter
  text={['Full Stack Developer', 'AI/ML Enthusiast', 'Problem Solver']}
  ...
/>

// To:
<Typewriter
  text={['Your Role 1', 'Your Role 2', 'Your Role 3']}
  ...
/>
```

### 2. Your Email & Social Links
**File**: `src/components/Contact.jsx` (Line 45)

```jsx
// Change from:
<a href="mailto:contact@example.com" className="text-cyan-400...">
  your.email@example.com
</a>

// To:
<a href="mailto:your.actual@email.com" className="text-cyan-400...">
  your.actual@email.com
</a>
```

**File**: `src/components/Home.jsx` & `src/components/Contact.jsx`

```jsx
// Update social links:
<a href="https://github.com/yourusername" aria-label="GitHub">
<a href="https://linkedin.com/in/yourusername" aria-label="LinkedIn">
<a href="https://twitter.com/yourusername" aria-label="Twitter">
```

### 3. Your Photo
1. Add image to: `public/image/profile.jpg`
2. Update in `src/components/AboutMe.jsx`:

```jsx
// Change from:
<div className="text-center">
  <div className="text-8xl mb-4">👤</div>
  <p className="text-gray-400 text-sm">Add your photo here</p>
</div>

// To:
<img 
  src="/image/profile.jpg"
  alt="Your Name"
  className="w-full h-full object-cover rounded-2xl"
/>
```

## 📝 Content Customization

### About Me Section
**File**: `src/components/AboutMe.jsx` (Line 24-32)

```jsx
<p className="text-gray-300 leading-relaxed text-lg">
  I'm a passionate developer specializing in full-stack web development with expertise 
  in React, Tailwind CSS, and JavaScript. I build interactive applications with a focus 
  on usability, performance, and clean design.
</p>
```

Update this with your actual background.

### Education & Experience
**File**: `src/components/AboutMe.jsx` (Line 41-56)

```jsx
<div className="font-semibold text-white text-lg">B.Tech in Computer Science</div>
<div className="text-gray-400">University Name — 2021 - Present</div>

<div className="font-semibold text-white text-lg">High School Diploma</div>
<div className="text-gray-400">School Name — 2019 - 2021</div>
```

Update with your education details.

### Interests & Expertise Tags
**File**: `src/components/AboutMe.jsx` (Line 63-73)

```jsx
{[
  'Full Stack Development',
  'AI/ML',
  'Web Design',
  'Problem Solving',
  'Open Source',
  'Tech Innovation',
  'Database Design',
  'Cloud Computing',
  'API Development'
].map((tag) => (
```

Replace tags with your actual interests.

## 🛠️ Skills Section

**File**: `src/components/Skills.jsx` (Line 9-35)

```jsx
const data = [
  {
    title: "Programming Languages",
    items: [
      { label: "JavaScript", value: 85 },      // Change proficiency %
      { label: "Python", value: 80 },
      { label: "Java", value: 75 },
    ],
  },
  {
    title: "Web Development",
    items: [
      { label: "React", value: 85 },
      { label: "Tailwind CSS", value: 90 },
      { label: "HTML/CSS", value: 90 },
    ],
  },
  // Add more categories as needed...
]
```

**Tips:**
- Add/remove skill categories
- Update proficiency values (0-100)
- Reorder by importance
- Use values that reflect your actual experience

## 🌈 Color Customization

### Change Theme Colors
**File**: `tailwind.config.js`

```js
theme: {
  extend: {
    colors: {
      primary: 'rgb(59, 130, 246)',    // Blue
      secondary: 'rgb(34, 211, 238)',  // Cyan
    }
  }
}
```

Then replace color classes:
- `from-blue-400` → `from-primary`
- `to-cyan-400` → `to-secondary`

### Popular Color Combinations

**Purple & Pink:**
```jsx
from-purple-400 via-pink-400 to-purple-500
```

**Green & Cyan:**
```jsx
from-green-400 via-cyan-400 to-green-500
```

**Orange & Red:**
```jsx
from-orange-400 via-red-400 to-orange-500
```

## 📝 Home Page Bio

**File**: `src/components/Home.jsx` (Line 33-37)

```jsx
// Change from:
<p className="text-gray-400 text-lg leading-relaxed max-w-lg">
  I build innovative web applications and explore AI/ML technologies. 
  Passionate about clean code, responsive design, and solving complex problems.
</p>

// To:
<p className="text-gray-400 text-lg leading-relaxed max-w-lg">
  Your custom bio here. Keep it concise (2-3 sentences). 
  Mention what makes you unique as a developer.
</p>
```

## 🔗 GitHub Links

Update your GitHub profile link across files:

1. **Home.jsx** - Social links section
2. **Contact.jsx** - Social links section
3. **README.md** - Repository link
4. **Navbar.jsx** - Optional github logo

## 🏢 Company Info (Optional)

If highlighting a company:

**File**: `src/components/Home.jsx`

```jsx
<p className="text-cyan-400 text-lg font-semibold mb-2">
  Currently at: Company Name
</p>
```

## 📱 Mobile Optimization

Test these changes on mobile:
- Text sizes
- Button sizes
- Image aspect ratios
- Navigation menu

Use Chrome DevTools: `Ctrl+Shift+I` → Toggle device toolbar

## 🎨 Advanced Customization

### Modify Animations
**File**: `src/App.css`

```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);  /* Change this value */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Add New Sections
1. Create component: `src/components/Projects.jsx`
2. Add route in `App.jsx`
3. Add navigation link in `Navbar.jsx`

### Customize Fonts

In `tailwind.config.js`:

```js
theme: {
  fontFamily: {
    sans: ['Segoe UI', 'Roboto', 'sans-serif'],
    serif: ['Georgia', 'serif'],
  }
}
```

## ✅ Customization Checklist

- [ ] Your name appears everywhere
- [ ] Email is updated
- [ ] Social links work
- [ ] Photo is uploaded
- [ ] Bio is accurate
- [ ] Skills are realistic
- [ ] Education is correct
- [ ] Colors look good
- [ ] Mobile view is responsive
- [ ] No placeholder text remains
- [ ] All links work

## 🚀 After Customization

```bash
# Test locally
npm run dev:all

# Check for errors
npm run lint

# Build for production
npm run build

# Commit changes
git add .
git commit -m "Customize portfolio with personal information"
git push
```

## 💡 Pro Tips

1. **Keep it simple** - Don't overcomplicate designs
2. **Be honest** - Accurate skill levels matter
3. **Update regularly** - Keep projects and skills current
4. **Ask for feedback** - Show friends/mentors
5. **Test thoroughly** - Check on real devices
6. **Professional photos** - Use good quality images
7. **Consistent branding** - Use same colors/fonts everywhere
8. **Clear writing** - Proofread all text

## 🔒 Security Reminders

✅ **DO:**
- Use `.env` for sensitive data
- Never commit API keys
- Validate form inputs

❌ **DON'T:**
- Hardcode passwords
- Expose MongoDB credentials
- Put personal info in code
- Leave console.log() statements

---

Need help? Check README.md for more detailed guides!

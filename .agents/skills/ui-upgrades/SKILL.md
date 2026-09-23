---
name: ui-upgrades
description: Standards and guidelines for crafting ultra-luxury, high-aesthetic web interfaces with warm minimalist palettes, refined typography, and fluid micro-interactions.
---

# UI Upgrades & Aesthetic Design Guidelines

This skill defines the luxury design system inspired by Parisian chic, warm neutral minimalism, and high-end boutique wellness sanctuaries.

## 1. Color Palette (Warm Minimalist Luxe)
- **Primary Background**: `#FDFBF7` (Alabaster Silk) / `#F6F2EC` (Warm Oat Milk)
- **Surface & Cards**: `#FFFFFF` with glassmorphic transparency `rgba(255, 255, 255, 0.75)` and `backdrop-filter: blur(16px)`
- **Borders & Dividers**: `rgba(197, 168, 128, 0.25)` (Soft Champagne Gold) or `#EAE4DC`
- **Primary Text**: `#1F1A18` (Espresso Noir) - Never use pure `#000000`
- **Secondary Text / Muted**: `#756C65` (Warm Taupe)
- **Accent Gold / Brass**: `#C5A880` / `#D4B892` / `#B38E5D`
- **Warm Glow / Highlights**: `radial-gradient(ellipse at top, rgba(230, 215, 195, 0.4) 0%, transparent 70%)`

## 2. Typography Pairing
- **Headings & Editorial Titles**: `Cormorant Garamond` (Google Font) - Serifs with high contrast, elegant italics, and generous tracking (`letter-spacing: 0.02em - 0.05em`).
- **Signature Cursive Accents**: `Italianno` or `Alex Brush` - For glowing gold cursive flourishes (e.g. *"Thank You"*, *"lately"*, *"LIVE More"*, *"confidence"*, *"Sanctuary"*).
- **Body & Functional UI**: `Plus Jakarta Sans` or `Montserrat` - Modern, clean geometric sans-serif with high readability, uppercase tracking for labels (`text-transform: uppercase; letter-spacing: 0.15em; font-size: 0.75rem`).

## 3. Visual Components & Polish
- **Editorial Grids**: Asymmetric layouts with generous whitespace, delicate borders, and overlapping typography.
- **Glassmorphism**: Translucent floating navigation, cards with frosted backdrop filters and subtle golden ambient shadows.
- **Micro-interactions**:
  - Smooth magnetic-feel buttons with subtle golden shimmer.
  - Image hover zooms with subtle brightness increase and caption reveal.
  - Interactive tabs and calendar pickers with smooth spring-like CSS transitions (`cubic-bezier(0.16, 1, 0.3, 1)`).
  - Ambient sound frequency player (Web Audio API synthesised tranquil drone / bowl resonance).

## 4. Accessibility & Mobile Responsiveness
- Crisp responsive scaling with fluid typography (`clamp()`).
- High contrast between text and background for effortless reading.
- Touch-friendly tap targets (minimum 44x44px).

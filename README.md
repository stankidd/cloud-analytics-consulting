# Cloud Analytics Consulting, LLC — Company Website

**Domain:** [cloudanalyticsconsulting.com](https://cloudanalyticsconsulting.com)  
**Owner:** Stan Kidd  
**Location:** Broomfield, CO  
**Founded:** 2021

---

## Project Overview

A professional, single-page marketing website for **Cloud Analytics Consulting, LLC**, a senior data architecture and cloud analytics consultancy operated by Stan Kidd. The site positions the company for enterprise and professional-services buyers seeking expertise in:

- Databricks & Snowflake lakehouse architecture
- dbt Cloud ELT implementation
- AI-assisted data engineering
- Data pipeline migration & modernization
- Data governance, MDM, and catalog
- Self-service BI and analytics enablement
- Developer and team enablement at scale

---

## Completed Features

### Pages / Sections
- **Navbar** — Fixed top, scrolled glass-blur effect, mobile hamburger menu, active link highlighting
- **Hero** — Full-viewport hero with animated tech orbit (dbt, Databricks, Snowflake, AWS, Azure), floating particles, headline, stat counters
- **Trust Bar** — Client roster (New York Life, Vertex Pharma, City of Boulder, Crown Castle, Sony, Mint Dentistry, ULA)
- **Services** — Six service cards (featured + grid): Lakehouse Architecture, AI-Assisted Engineering, Pipeline Migration, Data Governance, BI Enablement, dbt Mentorship
- **Capabilities** — Eight technology category blocks + certification showcase
- **Outcomes / KPIs** — Six animated KPI cards + six project spotlights (NYL, Vertex, Butcherbox, Boulder, Crown Castle, Sony)
- **Ideal Engagements** — Four industry vertical cards (Professional Services/Law, Healthcare, Financial Services, Enterprise)
- **About / Founder** — Stan Kidd bio, career timeline, quick-facts card, pull quote
- **Why CAC** — Four differentiator cards on dark navy background
- **Contact** — Info + validated form with API persistence
- **Footer** — Full links, social, brand, copyright
- **Back-to-top button**

### JavaScript Features
- Scroll-reveal animations (staggered card entrance)
- Animated stat counters (IntersectionObserver triggered)
- Tech orbit pause-on-hover
- Floating particle system in hero
- Smooth scroll with navbar offset
- Contact form validation + API submission

### Data Storage
- **Table:** `contact_submissions` — Stores form submissions via RESTful Table API

---

## Functional Entry URIs

| Path | Description |
|------|-------------|
| `/` or `/index.html` | Full site (single-page) |
| `#services` | Services section |
| `#capabilities` | Tech capabilities & certifications |
| `#outcomes` | KPIs & project spotlights |
| `#about` | Founder profile |
| `#contact` | Contact form |
| `tables/contact_submissions` | REST API for form data |

---

## Data Models

### `contact_submissions` Table
| Field | Type | Description |
|-------|------|-------------|
| `id` | text | UUID (auto) |
| `first_name` | text | Submitter first name |
| `last_name` | text | Submitter last name |
| `email` | text | Work email |
| `company` | text | Company/org name |
| `interest` | text (enum) | Service area interest |
| `message` | rich_text | Inquiry message |
| `submitted_at` | datetime | ISO timestamp |

---

## Visual Brand System

| Token | Value | Usage |
|-------|-------|-------|
| Navy | `#0D2045` | Primary dark, hero, footer |
| Royal Blue | `#1A4FA0` | Buttons, headings |
| Blue | `#2E86DE` | Accents, links, icons |
| Sky | `#56B0F7` | Light accents |
| Green | `#2ECC71` | CTA buttons, check marks, highlights |
| Light | `#F5F8FF` | Section backgrounds |

Font stack: **Space Grotesk** (headings) · **Inter** (body)

---

## File Structure

```
index.html              Main website (single-page)
css/
  style.css             All styles, brand palette, responsive breakpoints
js/
  main.js               Navbar, animations, particles, form logic
images/
  logo.png              Company logo (334KB PNG)
README.md               This file
```

---

## Features Not Yet Implemented

- Blog / Insights section
- Case study detail pages
- Downloadable capability deck (PDF)
- Services detail sub-pages
- Testimonials / client quotes section
- Google Analytics / tracking integration
- SEO meta tags (Open Graph, Twitter Card, schema.org)
- Email notification on contact form submission (requires backend)
- CRM integration (HubSpot, Salesforce)

---

## Recommended Next Steps

1. **Custom domain setup** — Point `cloudanalyticsconsulting.com` DNS to deployed project URL
2. **Add OG/Twitter meta tags** — For LinkedIn and social sharing previews
3. **Professional headshot** — Replace "SK" initials avatar in About section
4. **Testimonial quotes** — Add 2–3 client testimonials for social proof
5. **Blog/thought leadership** — dbt, Databricks, AI-assisted engineering articles to drive SEO
6. **Analytics** — Add Google Analytics 4 or Plausible
7. **Contact email** — Set up a professional `stan@cloudanalyticsconsulting.com` address and update contact links
8. **Case study PDFs** — Detailed one-pagers for Vertex, NYL, Boulder engagements

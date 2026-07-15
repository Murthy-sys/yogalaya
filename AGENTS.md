# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

## Project design decisions

- Preserve the custom editorial wellness aesthetic; avoid generic AI-style gradient cards, excessive floating panels, and dashboard-like UI patterns.
- Use the supplied Suresh's Yogalaya image as the brand logo.
- Do not add, remove, or modify sign-in or authentication functionality unless the user explicitly asks for it in a future request.
- WhatsApp enquiries should open a chat to +91 90003 82815.
- Use smooth, restrained transitions that support the editorial wellness aesthetic and respect reduced-motion preferences.
- The canonical studio location is Suresh's Yogalaya, MeeSeva Road, Ramnagar, opposite the MeeSeva office, Anantapur, Andhra Pradesh 515004.
- The verified map coordinates for the Ramnagar/MeeSeva Road studio are `14.6724758, 77.5895235`; use these coordinates for the embedded map marker.
- Social links: Instagram `https://www.instagram.com/sureshesapathi?igsh=bzJueWQwNGJtZjZ2` and YouTube `https://youtube.com/@bruceleesuresh?si=euIyGGvrdOe0eABN`.
- Credit the site developer as Trimugo and link to `https://www.trimugo.in` in the footer.
- Keep the floating WhatsApp action icon-only and hide it while the footer is visible so it never overlaps footer content.
- Upcoming workshop imagery must be original to Yogalaya; do not reuse imagery or card ordering from reference sites.
- Prefer advanced but calm motion: staggered reveals, subtle depth, and smooth state transitions without theatrical effects.
- On mobile, use a subject-aware crop that centers the yoga teacher in the hero image, and stack upcoming workshop cards vertically rather than using a horizontal carousel.
- The instructor is Suresh with 20+ years of yoga practice and teaching experience. Do not invent certifications or affiliations that the user has not supplied.
- The Meet Suresh preview should link via “Know about me” to the dedicated `#/about-suresh` component containing his fuller story and experience.
- Present testimonials as a compact, interactive editorial review block rather than oversized cards or a wall of quotes.
- Use the actual top 10 reviews displayed on the Suresh S Yogalaya Justdial listing, and link the review card footer to that listing for all reviews.
- Keep Parameswara Reddy M.'s full advocate testimonial as the featured default first review, followed by the 10 Justdial reviews without changing their order or content.
- On mobile, present reviews as a centered swipeable card slider with blurred adjacent cards and polished depth transitions; keep the editorial directory layout on desktop.
- The About Suresh route presents two separate instructor profiles: Suresh first and Gayatri Keerti second, using their supplied International Yoga Day photographs.
- Use the same shared header navigation, mobile menu, floating WhatsApp action, and full footer on every site route.
- Treat mobile as the primary experience: favor smooth spring-like, GPU-friendly transitions, progressive view/scroll animation enhancements, responsive touch feedback, and full reduced-motion support.
- Keep the mobile review section compact, with readable five-line previews and prominent navigation controls directly beneath the cards.
- Mobile review cards use a structured flex layout with restrained quote typography, four-line previews, an in-flow read toggle, and a non-overlapping author footer.
- The mobile review carousel should feel premium and gesture-responsive: cards follow the finger, settle with spring physics, use restrained 3D depth, and feature layered translucent editorial surfaces with active-edge lighting.
- On a full page load or refresh, disable browser scroll restoration and start the current route at the top.
- Every route change must synchronously reset to the top inside the route transition; instructor portraits and copy use scroll-triggered mobile reveals on the About route.
- On mobile, defer below-the-fold section rendering with `content-visibility` and intrinsic-size placeholders; lazy-load and asynchronously decode non-critical imagery while keeping above-the-fold hero imagery eager.
- Keep the displayed brand logo close to its rendered resolution and serve the hero photograph as a quality-balanced compressed JPEG to avoid Lighthouse oversized-image and inefficient-image-delivery warnings.

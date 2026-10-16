# Marquee public overview and pixel illustration

This directory owns the public `/marquee/` page and its original synthetic browser
illustration. It does not contain or host the private Marquee application. Follow
the repository's [preview commands](../README.md), then open `/marquee/` locally.

[index.html](index.html) supplies the overview, controls and SVG display;
[styles.css](styles.css) owns the luminous pixel-display theme. [demo.js](demo.js)
renders the 32-by-8 illustration and keeps transient scene/progress state in the
page. Choose allowance, workout, manual or fallback scenes. Manual input accepts
up to eight uppercase letters, digits or spaces, with optional progress.

Scenes and values are invented and deterministic. The illustration neither calls
providers nor controls a device, and reloading resets it. Preserve its synthetic
labels and distinguish it from the owning project's recorded TC001 evidence.
The DOM renderer is private to this page; it is not an exported UI component API.

Run `pnpm verify` from the repository root. [Marquee browser checks](../tests/browser/marquee.spec.js)
exercise scene state, text normalization and progress boundaries. The
[verification guide](../VERIFYING.md) covers shared artifact, layout and manual
checks. Browser results do not establish hardware or provider behavior; follow
the shared [maintenance rules](../AGENTS.md) when changing public claims.

# Perch former-address redirect

This directory maintains the public `/perch/` address after the full site moved
to [Perch's own site](https://echoz.github.io/Perch/). Its project page, CAD and
print downloads belong to the separate Perch repository.

[index.html](index.html) performs an immediate HTML refresh to that destination.
It also provides a visible destination link and a link back to the project index.
The inline styles preserve the warm cream, sage and rounded Perch theme while the
fallback page is visible. [dock.webp](dock.webp) is the render used by the parent
index card; it is not a model, print package or physical-fit guarantee.

Follow the repository's [preview commands](../README.md), then open `/perch/`.
Even a local preview navigates to the external Perch site. Run `pnpm verify` from
the repository root. The [redirect check](../tests/browser/pages.spec.js) verifies
the exact destination using an inert response; it does not validate the external
site or CAD. Follow the shared [verification](../VERIFYING.md) and
[maintenance](../AGENTS.md) guidance for changes.

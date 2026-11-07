<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture
- Marketing site structure: page components live in `src/pages/`, thin TanStack route files in `src/routes/` own per-page `head()` SEO metadata; shared chrome (SiteHeader/SiteFooter) is mounted in `src/routes/__root.tsx`.
- Use the app's own `@/components/ui/Button` and `@/components/ui/Section` primitives (not shadcn) for site pages; shadcn remains for any future app UI.
- Hero media is a CDN asset pointer (`src/assets/auditdesk-operations.mp4.asset.json`) imported for its `url`; never commit the MP4 itself.

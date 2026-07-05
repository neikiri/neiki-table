# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-07-05

### Added

- Initial release of Neiki's Table.
- Web Component with Shadow DOM isolation for CSS-conflict-free embedding.
- Column-based configuration with `text`, `number`, `boolean`, `date` and `select` types.
- Per-column `align` (`left`/`center`/`right`; numbers right-align by default) and a `format(value, row)` function for custom display text (rendered with `textContent`, so it stays XSS-safe, and feeding search/filter/export).
- Debounced global search across all columns, configurable via `search-debounce` / `searchDebounce` (default 180 ms).
- Per-column filters: text match, select dropdown, and yes/no for booleans.
- Click-to-sort column headers with `aria-sort`, keyboard support, and asc/desc/none cycling.
- Column resizing by dragging a header's edge, with per-column (`resizable: false`) and table-wide opt-out, plus a `neiki-table:column-resize` event.
- Density modes — `density="compact" | "normal" | "spacious"` attribute/config and `setDensity()`.
- Pagination with configurable page size, prev/next and numbered page buttons (with first/last controls and ellipsis for large datasets).
- Inline cell editing (double-click or Enter to open, Enter to save, Escape to cancel), with single-click toggling for boolean cells.
- Row selection via checkboxes, including a select-all header checkbox scoped to the current filtered view.
- CSV and JSON export plus copy-to-clipboard, scoped to the current selection when present, otherwise the filtered view; CSV output is RFC 4180 escaped and neutralizes formula-injection payloads.
- Loading state via the `loading` attribute / `setLoading()`, with an accessible overlay.
- Built-in internationalization with English, Czech, German, Spanish, French, Italian, Polish and Slovak translations, plus `addTranslations()` for custom/additional locales, and screen-reader `aria-live` result announcements.
- Light, dark and auto (OS-following) themes.
- Declarative attribute configuration and a full JavaScript API: `setColumns`, `getColumns`, `setData`, `getData`, `setConfig`, `getConfig`, `setLocale`, `getLocale`, `addTranslations`, `setDensity`, `setLoading`, `sortBy`, `search`, `setFilter`, `clearFilters`, `goToPage`, `setPageSize`, `selectRow`, `selectAll`, `clearSelection`, `getSelectedRows`, `exportCSV`, `exportJSON`, `copyCSV`, `refresh`.
- `neiki-table:ready`, `:sort`, `:search`, `:filter`, `:page-change`, `:select`, `:cell-edit`, `:row-click`, `:column-resize`, `:export`, `:copy` and `:error` events.
- CSS variable customization with a consistent `--ntbl-*` prefix.
- `minify.py` build script that embeds the component's CSS directly into `dist/neiki-table.js` and `dist/neiki-table.min.js`, so a single script tag is enough at runtime; standalone `dist/neiki-table.css` and `.min.css` are also produced for reference.

[1.0.0]: https://github.com/neikiri/neiki-table/releases/tag/1.0.0

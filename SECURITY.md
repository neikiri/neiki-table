# Security Policy

## Supported Versions

Only the latest published release of Neiki's Table receives security fixes.

| Version | Supported |
| --- | --- |
| 1.x | ✅ |
| < 1.0 | ❌ |

## Reporting a Vulnerability

Please do not open a public GitHub issue for security vulnerabilities.

Instead, report it privately by emailing **neikiri@neikiri.dev** with:

- A description of the vulnerability and its potential impact
- Steps to reproduce it, including a minimal example if possible
- The affected version(s)

You should receive an initial response within **72 hours**. We will keep you updated as the issue is investigated and fixed, and will credit you in the release notes unless you prefer to stay anonymous.

## Scope

This policy covers the code in this repository (`src/`, `dist/`, `demo/`, `minify.py`). It does not cover:

- Third-party CDNs or package registries used to distribute the built files.

## Security Design Notes

- Cell content is always rendered with `textContent`, never `innerHTML` — row data supplied by the host application can never inject markup into the page.
- CSV export neutralizes formula-injection payloads: values starting with `=`, `+`, `-`, `@`, tab, or carriage return are prefixed with a leading apostrophe before being written to the file, preventing spreadsheet software from executing them as formulas.
- CSV fields are quoted and escaped per RFC 4180 when they contain commas, quotes, or newlines.
- Export downloads are generated client-side via `Blob` and a temporary `<a download>` link; no data is sent to any server.
- The component renders inside a Shadow DOM, isolating its markup and styles from the host page.
- The component does not collect, store, or transmit any user data, and makes no network calls of its own.

See [README.md](README.md#security) for more details on the security model.

# Coltrane Sax Coach

The original standalone trainer is published at https://www.nikete.com/sax/.
It includes all nine tunes, microphone feedback, timed-form practice, fingering
hints, a metronome, and progress saved in this browser on this device.

## Deployment

GitHub Pages builds this repository's `master` branch. The existing Jekyll site
copies these static files to `/sax/`; there is no additional build step or runtime
dependency. Keep the HTML free of Jekyll front matter. Leave the root `CNAME`,
`_config.yml`, and existing Pages settings unchanged.

The manifest's `id`, `start_url`, and `scope`, plus service-worker registration,
are explicitly `/sax/`. Relative icons resolve inside that directory. The worker
only handles the app's core files and deletes only caches prefixed `nikete-sax-`,
leaving other pages and caches on the domain alone. Bump the version in `sw.js`
when changing a cached asset. Navigation tries the network first, then falls back
to the saved trainer offline.

For local development, run this from the repository root:

    python3 -m http.server 8000

Then open http://localhost:8000/sax/ (not the filesystem file directly).

## Install and use offline

Open the HTTPS URL while online and let the service worker finish caching.

- Android/Chrome: use **Install app** or **Add to Home screen** in the browser menu.
- iPhone/iPad/Safari: **Share → Add to Home Screen**.
- Desktop: use the browser's install command where supported.

Launch the home-screen icon and grant microphone permission. Audio is processed
locally. Optional recordings are selected from the device and never uploaded.
Browser/device storage is separate; progress from an older file or another
hostname is not automatically copied. Clearing site data also clears progress
and the offline copy.

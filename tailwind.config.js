/** Tailwind v3 config. Colors point at the CSS variables in styles.css (:root),
 *  so text-strong / text-body / text-muted / text-accent follow the tokens. */
module.exports = {
    content: ['./index.html'],
    theme: {
        extend: {
            colors: {
                strong: 'var(--text-strong)',
                body: 'var(--text-body)',
                muted: 'var(--text-muted)',
                accent: {
                    DEFAULT: 'var(--accent)',
                    light: 'var(--accent-light)',
                },
            },
        },
    },
};

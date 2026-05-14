module.exports = {
    theme: {
        extend: {
            colors: {
                // Core brand
                primary:                 '#0F172A', // deep navy
                'primary-container':     '#131b2e',
                'on-primary':            '#ffffff',
                'on-primary-container':  '#bec6e0',
                secondary:               '#334155', // slate
                'secondary-container':   '#d5e3fd',
                'on-secondary':          '#ffffff',
                'on-secondary-container':'#57657b',
                accent:                  '#0EA5E9', // electric blue
                'accent-dim':            '#0284c7',
                // Surfaces
                background:              '#F8FAFC',
                surface:                 '#f7f9fb',
                'surface-dim':           '#d8dadc',
                'surface-container-lowest': '#ffffff',
                'surface-container-low': '#f2f4f6',
                'surface-container':     '#eceef0',
                'surface-container-high':'#e6e8ea',
                'surface-container-highest': '#e0e3e5',
                // Text
                'on-surface':            '#191c1e',
                'on-surface-variant':    '#45464d',
                'on-background':         '#191c1e',
                // Borders
                outline:                 '#76777d',
                'outline-variant':       '#c6c6cd',
                // Code block background
                'code-bg':               '#1E293B',
                // Error
                error:                   '#ba1a1a',
                'error-container':       '#ffdad6',
            },
            fontFamily: {
                heading: ['Manrope', 'sans-serif'],
                body:    ['Work Sans', 'sans-serif'],
                label:   ['Space Grotesk', 'monospace'],
            },
            fontSize: {
                'headline-lg': ['3rem',    { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
                'headline-md': ['2rem',    { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
                'headline-sm': ['1.5rem',  { lineHeight: '1.4', fontWeight: '600' }],
                'body-lg':     ['1.125rem',{ lineHeight: '1.6' }],
                'body-md':     ['1rem',    { lineHeight: '1.6' }],
                'body-sm':     ['0.875rem',{ lineHeight: '1.5' }],
                'label-caps':  ['0.75rem', { lineHeight: '1.0', letterSpacing: '0.1em', fontWeight: '600' }],
            },
            borderRadius: {
                sm:      '0.125rem',
                DEFAULT: '0.25rem',
                md:      '0.375rem',
                lg:      '0.5rem',
                xl:      '0.75rem',
                full:    '9999px',
            },
            spacing: {
                'stack-sm': '0.5rem',
                'stack-md': '1.5rem',
                'stack-lg': '4rem',
            },
            maxWidth: {
                container: '1120px',
            },
            boxShadow: {
                card:       '0 1px 4px 0 rgba(15,23,42,0.06)',
                'card-hover':'0 4px 16px 0 rgba(15,23,42,0.10)',
            },
        }
    }
}
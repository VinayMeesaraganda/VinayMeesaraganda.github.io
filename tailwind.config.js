/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0a0e27", // Deeper navy for more sophistication
                "primary-light": "#1a1f3a",
                "primary-lighter": "#2a2f4a",
                secondary: "#f59e0b", // Richer amber/gold
                "secondary-light": "#fbbf24",
                "text-light": "#f8fafc",
                "text-dim": "#cbd5e1",
                "text-muted": "#94a3b8",
                "accent-blue": "#3b82f6",
                "accent-purple": "#8b5cf6",
                "accent-cyan": "#06b6d4",
                "accent-emerald": "#10b981",
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Inter"', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-mesh': "radial-gradient(at 40% 20%, rgba(59, 130, 246, 0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(139, 92, 246, 0.15) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(59, 130, 246, 0.15) 0px, transparent 50%)",
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'slide-up': 'slideUp 0.5s ease-out',
                'fade-in': 'fadeIn 0.6s ease-out',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 5px rgba(245, 158, 11, 0.2), 0 0 10px rgba(245, 158, 11, 0.2)' },
                    '100%': { boxShadow: '0 0 10px rgba(245, 158, 11, 0.4), 0 0 20px rgba(245, 158, 11, 0.4)' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            },
            boxShadow: {
                'glow-sm': '0 0 10px rgba(245, 158, 11, 0.3)',
                'glow-md': '0 0 20px rgba(245, 158, 11, 0.4)',
                'glow-lg': '0 0 30px rgba(245, 158, 11, 0.5)',
                'inner-glow': 'inset 0 0 20px rgba(245, 158, 11, 0.1)',
            },
        },
    },
    plugins: [],
}

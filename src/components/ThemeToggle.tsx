'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="fixed bottom-6 right-6 z-[100] w-[72px] h-9 rounded-full border-2 border-black bg-white"
                style={{ boxShadow: '4px 4px 0 0 rgba(0,0,0,1)' }} />
        );
    }

    const isDark = theme === 'dark';

    return (
        <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className={`
        fixed bottom-6 right-6 z-[100]
        w-[72px] h-9 rounded-full
        border-2 border-black
        flex items-center
        transition-colors duration-300
        ${isDark ? 'bg-[#FFD166]' : 'bg-white'}
      `}
            style={{ boxShadow: '4px 4px 0 0 rgba(0,0,0,1)' }}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            <motion.div
                layout
                transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 30
                }}
                className={`
          w-7 h-7 rounded-full
          border-2 border-black
          flex items-center justify-center
          ${isDark ? 'bg-[#0B0F19] ml-auto mr-0.5' : 'bg-[#FF9F1C] ml-0.5'}
        `}
            >
                {isDark ? (
                    <Moon size={14} className="text-white" />
                ) : (
                    <Sun size={14} className="text-white" />
                )}
            </motion.div>
        </button>
    );
}

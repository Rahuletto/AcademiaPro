"use client";

import React, { useState, useEffect } from 'react';
import { Themes } from '@/misc/theme';

const ColorPicker = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedTheme, setSelectedTheme] = useState(Themes[0]);

    const handleColorChange = (propertyName: string, value: string) => {
        const root = document.documentElement;
        root.style.setProperty(`--${propertyName}`, value);
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <button
            type='button'
                onClick={() => setIsOpen(!isOpen)}
                className="bg-light-background-dark dark:bg-dark-background-dark p-2 rounded-full shadow-lg hover:opacity-80 transition-opacity"
            >
                {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                <svg aria-label='svg' xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute bottom-16 right-0 w-80 max-h-[80vh] overflow-y-auto bg-light-background-normal dark:bg-dark-background-normal rounded-lg shadow-xl p-4">
                    <h3 className="text-lg font-semibold mb-4">Theme Colors</h3>
                    <div className="space-y-4">
                        {Object.entries(selectedTheme.properties).map(([key, value]) => (
                            <div key={key} className="flex flex-col gap-2">
                                {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
                                <label className="text-sm font-medium">{key}</label>
                                <div className="flex items-center gap-2">
                                    <input
                                        type="text"
                                        value={value}
                                        onChange={(e) => handleColorChange(key, e.target.value)}
                                        className="flex-1 bg-light-background-dark dark:bg-dark-background-dark rounded px-2 py-1 text-sm"
                                    />
                                    <div
                                        className="w-6 h-6 rounded border border-light-background-dark dark:border-dark-background-dark"
                                        style={{ backgroundColor: `rgb(${value})` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ColorPicker;
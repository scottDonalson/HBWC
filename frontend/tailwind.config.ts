import type {Config} from "tailwindcss";

export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./public/**/*.html"
    ],

    safelist: [
        "hidden",
        "block",
        "flex",
        "lg:flex",
        "lg:hidden",
        "md:hidden",
        "md:flex",
        "xl:flex",
        "col-span-3", "grid-cols-3", "col-span-full",
        "relative", "bg-orange-700", "grid", "grid-cols-1",
        "md:grid-cols-3", "grid-rows-auto", "rounded-2xl",
        "items-center", "gap-4", "p-6",
        "w-full", "min-h-[600px]", "m-5", "shadow-2xl", "flex-col",
        "text-3xl", "font-bold", "text-white", "text-center", "p-4",
        "w-[300px]", "h-[500px]", "group", "overflow-hidden", "shadow-lg", "mx-auto",
        "bg-white", "drop-shadow-2xl", "text-2xl", "p-8", "col-span-1", "md:col-span-2", "justify-center", "max-w-screen-lg",
        "h-screen", "absolute", "top-0", "left-0", "h-full", "bg-cover", "bg-center", "bg-no-repeat",
        "object-cover", "transition", "duration-300", "ease-in-out",
        "inset-0", "bg-black", "bg-opacity-0", "group-hover:bg-opacity-60", "opacity-0", "group-hover:opacity-100",
        "transition-all",  "my-2", "text-gray-800", "mb-4", "mt-4",
         "flex-row", "mx-2",
        "bg-gray-900", "shadow-md", "container", "justify-between",
         "space-x-6", "min-h-screen", "md:text-4xl", "lg:text-6xl", "font-sans", "mt-10",
         "italic", "mt-5", "gap-2", "mt-8", "focus:outline-none", "bg-gray-800", "space-y-2",
        "block", "hover:text-gray-300","hover:text-blue-400", "space-x-2",
         "py-10", "px-6", "lg:px-16", "gap-8", "text-gray-400", "mt-2",
         "text-lg", "font-semibold", "space-x-4", "mt-3", "border-t", "border-gray-700", "my-6",
         "text-gray-500", "text-sm", "px-6", "py-3", "rounded-lg", "hover:bg-orange-800",
        "bg-gray-100", "p-10", "max-w-6xl", "mb-10", "gap-6", "h-96", "group-hover:opacity-80",
        "text-gray-600", "max-w-3xl", "text-4xl", "text-orange-700", "mb-6",
        "text-gray-700", "space-y-4", "p-3", "border", "text-black", "max-w-4xl",
        "md:flex-row", "cursor-pointer", "border-gray-200", "hover:shadow-xl",
        "w-28", "h-28", "rounded-full", "object-cover", "border-gray-300", "md:mr-4",
        "md:items-center", "md:text-left", "md:mt-0", "md:w-1/3", "md:text-center",
        "fixed", "bg-opacity-50", "w-96", "text-xl", "px-4", "py-2", "bg-red-500", "rounded",
        "mt-6", "text-left", "list-disc", "list-inside", "max-w-lg","text-green-600",
        "input", "btn", "text-red-500", "bg-blue-500", "p-10", "overflow-x-auto",
        "border-collapse", "h-[600px]", "flex-1",

    ],

    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"], // Adds Inter as the default sans-serif font
            },
            fontSize: {
                "5xl": "3rem", // 48px
                "6xl": "3.75rem", // 60px
                "7xl": "4.5rem", // 72px
                "8xl": "6rem", // 96px
                "9xl": "8rem", // 128px
            },
        },
    },
    plugins: [],
} satisfies Config;

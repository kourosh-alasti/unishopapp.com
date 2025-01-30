import { ThemeProvider } from "next-themes";

export default function Provider({ children, ...props} : React.ComponentProps<typeof ThemeProvider>) {
    return (<ThemeProvider enableSystem={false} attribute={"class"} disableTransitionOnChange>
        {children}
    </ThemeProvider>)
}
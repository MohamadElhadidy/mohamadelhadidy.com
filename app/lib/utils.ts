// function to switvh colors dark/light mode
import Cookies from "js-cookie";

export function toggleTheme() {
    const root = document.documentElement;
    const currentTheme = root.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    root.setAttribute('data-theme', newTheme);
    Cookies.set("theme", newTheme, { expires: 365 });
}

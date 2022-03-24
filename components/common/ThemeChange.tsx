import { useTheme } from "next-themes";

export const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const themes = [
    { value: "light", label: "Light" },
    { value: "dark", label: "Dark" },
    { value: "bumblebee", label: "Bumblebee" },
  ];

  return (
    <div>
      {themes.map((t) => (
        <li className="font-medium" onClick={() => setTheme(t.value)}>
          <a className="">{t.label}</a>
        </li>
      ))}
    </div>
  );
};

// app/components/ThemeSwitcher.tsx
"use client";

import { Switch } from "@nextui-org/react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <Switch />;

  return (
    <Switch
      color="success"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
      isSelected={theme === "dark" ? true : false}
      onValueChange={(e) => setTheme(e ? "dark" : "light")}
    />
  );
}

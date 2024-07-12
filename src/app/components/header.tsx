"use client";
import styles from "@/styles/components/header.module.scss";
import React, { useState } from "react";
import Logo from "./logo";
import Route, { RouteProps } from "./route";

interface HeaderProps {
  onRouteChange: (route: string) => void;
}

export default function Header({ onRouteChange }: HeaderProps) {
  const initialRoutes: RouteProps[] = [
    {
      text: "me",
      selected: true,
    },
    {
      text: "blog",
      selected: false,
    },
  ];
  const [routes, setRoutes] = useState<RouteProps[]>(initialRoutes);

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
    const clickedText = event.currentTarget.getAttribute("name");

    if (clickedText) {
      const updatedRoutes = routes.map((route) => ({
        ...route,
        selected: route.text === clickedText,
      }));

      setRoutes(updatedRoutes);
      onRouteChange(clickedText);
    }
  };

  return (
    <div className={styles.header}>
      <Logo />
      <div className={styles.routes}>
        {routes.map((route, idx) => (
          // @ts-ignore
          <div onClick={handleClick} key={idx} name={route.text}>
            <Route {...route} />
          </div>
        ))}
      </div>
    </div>
  );
}

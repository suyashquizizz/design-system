// src/components/Button.tsx
import React from "react";

export const Button = ({ label, variant }: { label: string; variant: "primary" | "secondary" }) => {
  return <button className={`btn-${variant}`}>{label}</button>;
};

// src/code-connect/Button.code.tsx
import { Button } from "../components/Button";
import { connect } from "@figma/code-connect";

connect(Button, "Button", {
  props: {
    label: { type: "string", default: "Click me" },
    variant: { type: "enum", options: ["primary", "secondary"], default: "primary" }
  }
});

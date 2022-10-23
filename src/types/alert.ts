interface Alert {
  id?: string;
  message: string;
  type: "success" | "error" | "info" | "help";
}

export default Alert;

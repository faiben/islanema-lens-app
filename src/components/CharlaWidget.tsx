
import { useEffect } from "react";

export const CharlaWidget = () => {
  useEffect(() => {
    const widgetElement = document.createElement("charla-widget");
    widgetElement.setAttribute("p", "7153b087-b136-4705-b59c-9878d231f951");
    document.body.appendChild(widgetElement);

    const widgetScript = document.createElement("script");
    widgetScript.src = "https://app.getcharla.com/widget/widget.js";
    widgetScript.async = true;
    document.body.appendChild(widgetScript);

    // Cleanup function to remove elements when component unmounts
    return () => {
      const existingWidget = document.querySelector("charla-widget");
      if (existingWidget) {
        existingWidget.remove();
      }
      
      const existingScript = document.querySelector('script[src="https://app.getcharla.com/widget/widget.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null;
};

export default CharlaWidget;

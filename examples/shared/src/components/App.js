import { HydrationScript } from "solid-js/web";
import Form from "./Form";

const App = () => {
  return (
    <html lang="en">
      <head>
        <title>🔥 Solid SSR 🔥</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/styles.css" />
        <HydrationScript />
      </head>
      <body>
        <Form />
      </body>
      <script type="module" src="/js/index.js" async></script>
    </html>
  );
};

export default App;

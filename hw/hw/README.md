I removed Bootstrap:

npm uninstall bootstrap

and I deleted its import from the project files.

After that, I installed Tailwind CSS:

npm install tailwindcss @tailwindcss/vite
I configured Tailwind by:
adding it in vite.config.ts

adding this line in index.css:

@import "tailwindcss";
I removed the old SCSS file (login.scss) and stopped using it.

I converted my styles to Tailwind by writing classes directly inside className.

Example:

className="bg-white p-8 rounded-lg shadow-md"
I tested Tailwind by changing text color and size, and it worked.
Result
Bootstrap is removed
Tailwind CSS is working
Styling is now done using Tailwind classes
Note

https://chatgpt.com/share/69f1ab7d-e820-8396-94f2-cfb34a294bdf

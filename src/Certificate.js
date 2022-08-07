import React from 'react';

function Certificate() {
  return (
    <div class="w-screen h-screen py-20 bg-gradient-to-r from-cyan-200 via-sky-300 to-blue-400 ">
      <div class="bg-white w-3/6 h-full mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        <section>
            <img className='object-contain' src={"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHZpZXdCb3g9IjAgMCAzNTAgMzUwIiBzdHlsZT0iYm9yZGVyOjVweCBzb2xpZCBnb2xkIj48c3R5bGU+LmJhc2UgeyAgZm9udC1mYW1pbHk6IHNlcmlmOyAgfTwvc3R5bGU+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI0ZGRkJGQSIgLz48dGV4dCB4PSI1MCUiIHk9IjEwJSIgY2xhc3M9ImJhc2UiIGZpbGw9IiMwQzE2NzMiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjE2cHgiPlBvbGx1dGlvbiB1bmRlcmNvbnRyb2wgY2VydGlmaWNhdGU8L3RleHQ+PHRleHQgeD0iNTAlIiB5PSIyNSUiIGNsYXNzPSJiYXNlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjhweCIgZm9udC13ZWlnaHQ9ImJvbGQiPlZlaGljbGUgTnVtYmVyOiBLQS0wNC1LQS04NzMxPC90ZXh0Pjx0ZXh0IHg9IjUwJSIgeT0iMzIlIiBjbGFzcz0iYmFzZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI4cHgiIGZvbnQtd2VpZ2h0PSJib2xkIj5UeXBlIG9mIFZlaGljbGU6IDIgV2hlZWxlcjwvdGV4dD48dGV4dCB4PSI1MCUiIHk9IjM5JSIgY2xhc3M9ImJhc2UiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iOHB4IiBmb250LXdlaWdodD0iYm9sZCI+RnVlbCBUeXBlOiBQZXRyb2w8L3RleHQ+PHRleHQgeD0iNTAlIiB5PSI0NiUiIGNsYXNzPSJiYXNlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjhweCIgZm9udC13ZWlnaHQ9ImJvbGQiPlZlaGljbGUgTW9kZWw6ICBLVE0gRHVrZTwvdGV4dD48dGV4dCB4PSI1MCUiIHk9IjUzJSIgY2xhc3M9ImJhc2UiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iOHB4IiBmb250LXdlaWdodD0iYm9sZCI+VmVoaWNsZSBSYXRpbmc6IDQ8L3RleHQ+PHRleHQgeD0iNTAlIiB5PSI2MCUiIGNsYXNzPSJiYXNlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjhweCIgZm9udC13ZWlnaHQ9ImJvbGQiPlZlaGljbGUgT3duZXI6IFJhanU8L3RleHQ+PHRleHQgeD0iNTAlIiB5PSI2NyUiIGNsYXNzPSJiYXNlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjhweCIgZm9udC13ZWlnaHQ9ImJvbGQiPkNlcnRpZmllZCBBdDogNi04LTIwMjI8L3RleHQ+PHRleHQgeD0iNTAlIiB5PSI3NCUiIGNsYXNzPSJiYXNlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjhweCIgZm9udC13ZWlnaHQ9ImJvbGQiPlZhbGlkIFRpbGw6IDItMi0yMDIzPC90ZXh0Pjx0ZXh0IHg9IjUwJSIgeT0iODElIiBjbGFzcz0iYmFzZSIgZG9taW5yZWRhbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI4cHgiIGZvbnQtd2VpZ2h0PSJib2xkIj5WYWxpZGl0eTogdmFsaWQ8L3RleHQ+PC9zdmc+"}/>
        </section>
      </div>
    </div>
  );
}

export default Certificate;
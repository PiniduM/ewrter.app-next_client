import "@/global.d"

interface IEvent {
  action: string;
  params: Record<string, string>;
}

export const pageview = (url: string) => {
  if (window !== undefined) {
    window?.gtag("config", process.env.GA_MEASUREMENT_ID || "G-0LMS757CZR", {
      page_path: url,
    });
  }
};

export const event = ({ action, params }: IEvent) => {
  if (window !== undefined) {
    window?.gtag("event", action, params);
  }
};

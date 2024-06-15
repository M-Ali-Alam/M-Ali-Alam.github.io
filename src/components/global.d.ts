interface Window {
  Email: {
    send: (config: {
      SecureToken: string;
      To: string;
      From: string;
      Subject: string;
      Body: string;
    }) => Promise<void>;
  };
}

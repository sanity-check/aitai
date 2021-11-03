export type responseObj = JSX.IntrinsicAttributes & {
  data: {
    username: string;
    userId: number;
    messages: Record<
      string,
      { content: string; sentiment: number; createdAt: Date }
    >;
  };
};

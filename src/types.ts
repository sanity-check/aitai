export type responseObj = JSX.IntrinsicAttributes & {
  data: {
    user_id: number;
    message_id: number;
    content: string;
    emotional_rating: number;
    created_at: Date;
  }[];
};

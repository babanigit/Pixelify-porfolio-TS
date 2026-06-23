export interface IRequest {
  input: string;
  history: string;
}

export interface IResponse {
  success: boolean;
  message: string;
  history: string;
}

export interface IAiResponse {
  success: boolean;
  message: string;
  // payload_for_ref: string;
  // payload_message_length_for_ref: number;
  history: string;
}

export interface IChatHistory {
  role: "user" | "assistant" | "system";
  content: string;
}

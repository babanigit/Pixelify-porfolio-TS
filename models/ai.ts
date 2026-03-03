export interface IRequest {

  input: string;
}

export interface IResponse {
  success: boolean;
  message: string;
}


export interface IAiResponse {
  success: boolean;
  message_ai_response: string;
  payload_for_ref: string;
  payload_message_length_for_ref: number;
  total_chat_history_for_ref: IChatHistory[];
}

export interface IChatHistory {
  role: "user" | "assistant" | "system";
  content: string;
}

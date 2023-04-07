"use client"

import useSWR from "swr"
import fetcher from "@/utils/fetchMessages"
import { Message } from "@/type"
import MessageComponent from "./MessageComponent"

export default function MessageList() {
  const {
    data: messages,
    error,
    mutate,
  } = useSWR<Message[]>("/api/getMessages", fetcher)

  return (
    <div className="space-y-5 pt-8 pb-32 max-w-2xl xl:max-w-4xl mx-auto">
      {messages?.map((message) => (
        <MessageComponent key={message.id} message={message} />
      ))}
    </div>
  )
}

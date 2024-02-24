import { Timestamp } from "firebase/firestore";

type MessageProps = {
     text: string
     sender: boolean
     createdAt: Timestamp
     selectedMessage: string
     messageId: string
     setSelectedMessage: () => void
     isFirstMessage: string
     isLastMessage: string
}

function TimeConverter(UNIX_Timestamp: Timestamp) {
     let actualDate = new Date(UNIX_Timestamp.seconds * 1000)

     let months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]

     return (
          actualDate.getDate() + ' ' + months[actualDate.getMonth()] + ' ' + actualDate.getFullYear() + ' ' +
          actualDate.getHours() + ':' + actualDate.getMinutes()
     )
}

export default function Message({
     text, sender, messageId, createdAt, isFirstMessage, isLastMessage, selectedMessage, setSelectedMessage
}: MessageProps) {
     if (sender) {
          return (
               <div
                    className="self-end my-1 flex flex-col items-end"
               >
                    <div
                         onClick={setSelectedMessage}
                         className={`bg-green cursor-pointer shadow-md px-3 py-2 rounded-1-2x1 ${isLastMessage ? 'rounded-br-2x1' : ''}
                         ${isFirstMessage ? 'rounded-tr-2x1' : ''}
                         fllex items-center justify-center`}
                    >
                         <p
                              className="text-white"
                         >{text}</p>
                    </div>
                    {selectedMessage === messageId && (
                         <p
                              className="text-xs font-medium mt-1"
                         >{TimeConverter(createdAt)}</p>
                    )}
               </div>
          )
     }
     return (
          <div className="self-start my-1 flex flex-col items-start">
               <div
                    onClick={setSelectedMessage}
                    className={`bg-white cursor-pointer  ${isLastMessage ? "rounded-bl-2xl " : ""
                         } ${isFirstMessage ? "rounded-tl-2xl " : ""
                         }  shadow-md px-3 py-2 rounded-r-2xl  flex items-center justify-center`}
               >
                    <p className="text-green">{text}</p>
               </div>
               {selectedMessage === messageId && (
                    <p className="text-xs font-medium mt-1">{TimeConverter(createdAt)}</p>
               )}
          </div>
     )
}
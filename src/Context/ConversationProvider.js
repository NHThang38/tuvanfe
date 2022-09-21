import React, {useContext} from 'react'

const ConversationsContext =  React.createContext();
 
export function useConversation() {
 return useContext(ConversationsContext);   
}


export function ConversationProvider({children}) {
    // const [conversation, setConversation] = useLocalStorage('conversations', [])
    // function createConversation(recipient){
    //     setConversations(prevConversation => {
    //         return [... prevConversation, {recipient, message: []}]
    //     })
    // }
    
    
  return (
    <ConversationProvider.Provider >
        {children}
    </ConversationProvider.Provider>
  )
}

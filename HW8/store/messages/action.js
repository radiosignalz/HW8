import {createMessage} from "../../helpers";
import {BOT_AUTHOR} from "../../constants/authors";


export const CREATE_MESSAGE = 'CREATE_MESSAGE'
export const REMOVE_MESSAGES_BY_CHAT_ID = 'REMOVE_MESSAGES_BY_CHAT_ID'



export const addMessage = (message,chatId) => ({
    type: CREATE_MESSAGE,
    payload:{
        message,
        chatId,
    },
})
export const removeMessagesByChatID = (chatId) => ({
    type: REMOVE_MESSAGES_BY_CHAT_ID,
    payload: chatId,
})

export const sendMessageWithThunk=(author,text,chatId)=>(dispatch)=>{
    const userMessage = createMessage(author,text)
    dispatch(addMessage(userMessage,chatId));
    if (author===BOT_AUTHOR) {
        return; 
    }
    const botMessage=createMessage(BOT_AUTHOR,'Hello')
    dispatch(addMessage(botMessage,chatId));


}

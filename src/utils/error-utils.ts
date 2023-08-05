import { Dispatch } from "redux"
import { SetErrorType, SetStatusType, setErrorAC, setStatusAC } from "../app/appReducer"
import { ResponseType } from "../api/todolists-api";

export const handleServerAppkError = <T>(dispatch: ErrorUtilsDispatchType, data: ResponseType<T> ) => {
    const error = data.messages[0];
          if (error) {
            dispatch(setErrorAC(error));
          } else {
            dispatch(setErrorAC("Some error"));
          }
          dispatch(setStatusAC("failed"));
}

export const handleServerNetworkError = (dispatch: ErrorUtilsDispatchType, error: string) => {
    dispatch(setErrorAC(error))
    dispatch(setStatusAC('failed'))
 }
 
 type ErrorUtilsDispatchType = Dispatch <SetStatusType | SetErrorType>
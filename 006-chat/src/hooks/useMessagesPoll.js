import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { messagesActions } from "redux/messagesActions";

// Hook odpowiedzialny za odświeżanie formularzy
export const useMessagesPoll = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(messagesActions.fetchMessages());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);
};

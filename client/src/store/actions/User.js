import { Api } from "../../services/api";
import { toast } from "react-toastify";

export const getPendingUsers = (token) => async (dispatch) => {
  const api = new Api(token);
  try {
    let res = await api.user.getPendingUsers();
    dispatch({
      type: "GET_PENDING_USER_SUCCESS",
      res,
    });
    return res;
  } catch (error) {
    dispatch({
      type: "GET_PENDING_USER_ERROR",
      error,
    });
    toast.error(error.response.data.message);
  }
};

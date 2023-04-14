import { HttpErrorResponse } from "@angular/common/http";
import { Iuser } from "../../models/user.model";

export interface UsersState {
  response: Iuser[] | undefined;
  isLoading: boolean | undefined;
  error: HttpErrorResponse | undefined;
}

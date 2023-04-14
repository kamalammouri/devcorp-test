import { HttpErrorResponse } from "@angular/common/http";
import { Ifollower } from "src/app/models/follower.model";

export interface FollowerState {
  response: Ifollower[] | undefined
  isLoading: boolean | undefined;
  error: HttpErrorResponse | undefined;
}
